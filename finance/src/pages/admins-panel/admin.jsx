import React, { useCallback, useEffect, useState } from "react";
import "./admin.css";
import { Pagination } from "antd";
import axios from "axios";
function Admin() {
  const [Adminss, setAdminss] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allAdminss, setallAdminss] = useState(0);
  const [token, setToken] = useState("");
  const url = `http://127.0.0.1:8000/api/`;

  const handelDeleteAdmin = (id) => {
    axios
      .delete(`${url}/auth/delete/${id}`)
      .then((response) => {
        setAdminss(response.data.data);
        console.log("Admin successfully deleted.");
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const handelGetAdminss = useCallback(() => {
    setToken(localStorage.getItem("token"));
    token &&
      axios
        .get(`http://localhost:8000/api/auth/getalluser`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          setAdminss(response.data.message);
        })
        .catch((error) => console.error(`Error:${error}`));
  }, [token]);

  useEffect(() => {
    handelGetAdminss();
  }, [handelGetAdminss, currentPage]);

  const [editingAdmin, setEditingAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  // edit admin
  const handleAddAdmin = () => {
    console.log(Adminss.splice(-1));
    axios
      .post(`${url}/auth/register`, newAdmin)
      .then((response) => {
        setAdminss([response.data.message, ...Adminss]);
        setNewAdmin({
          name: "",
          email: "",
          password: "",
          role: "admin",
        });
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const handleEditAdmin = (id, editedAdmin) => {
    axios
      .put(`${url}/auth/edit${id}`, editedAdmin)
      .then((res) => {
        const updatedAdminss = Adminss.map((Admin) => {
          if (Admin.id === id) {
            return editedAdmin;
          } else {
            return Admin;
          }
        });
        setAdminss(updatedAdminss);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const handleSaveTransation = (id, editedAdmin) => {
    const updatedAdminss = Adminss.map((Admin) => {
      if (Admin.id === id) {
        return editedAdmin;
      } else {
        return Admin;
      }
    });
    setAdminss(updatedAdminss);
    setEditingAdmin(null);
  };

  return (
    <>
      <div className="admin-main-table">
        
          <input type="checkbox" name="" id="nav-toggle" />
          <div className="table-container">
            <table className="Admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Adminss.map((Admin, index) => (
                  <tr key={index}>
                    <td>{Admin.id}</td>
                    
                    <td>
                      {editingAdmin === Admin.id ? (
                        <input
                          type="text"
                         defaultValue={Admin.name}
                          onChange={(event) =>
                            handleEditAdmin(Admin.id, {
                              ...Admin,
                              name: event.target.value,
                            })
                          }
                        />
                      ) : (
                        Admin.name
                      )}
                    </td>
                    <td>
                      {editingAdmin === Admin.id ? (
                        <input
                          type="text"
                          defaultValue={Admin.email}
                          onChange={(event) =>
                            handleEditAdmin(Admin.id, {
                              ...Admin,
                              email: event.target.value,
                            })
                          }
                        />
                      ) : (
                        Admin.email
                      )}
                    </td>
                    <td>
                      {editingAdmin === Admin.id ? (
                        <input
                          type="text"
                          defaultValue={Admin.role}
                          onChange={(event) =>
                            handleEditAdmin(Admin.id, {
                              ...Admin,
                              role: event.target.value,
                            })
                          }
                        />
                      ) : (
                        Admin.role
                      )}
                    </td>
                    <td>
                      {editingAdmin === Admin.id ? (
                        <>
                          <button
                            onClick={() =>
                              handleSaveTransation(Admin.id, Admin)
                            }
                          >
                            Save
                          </button>
                          <button onClick={() => setEditingAdmin(null)}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => setEditingAdmin(Admin.id)}>
                            Edit
                          </button>
                          <button onClick={() => handelDeleteAdmin(Admin.id)}>
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              onChange={(page) => setCurrentPage(page)}
              current={currentPage}
              all={allAdminss}
            />
          </div>

          <input type="checkbox" name="" id="nav-toggle" />
          <div className="admin-content">
            <label>
              Name:{" "}
              <input
                type="email"
                value={newAdmin.name}
                onChange={(event) =>
                  setNewAdmin({
                    ...newAdmin,
                    name: event.target.value,
                  })
                }
              />
            </label>
            <label>
              email:
              <input
                type="email"
                value={newAdmin.email}
                onChange={(event) =>
                  setNewAdmin({
                    ...newAdmin,
                    email: event.target.value,
                  })
                }
              />
            </label>
            <label>
              role:{" "}
              <select
                value={newAdmin.role}
                onChange={(event) =>
                  setNewAdmin({
                    ...newAdmin,
                    role: event.target.value,
                  })
                }
              >
                <option value="admin">admin</option>
                <option value="super admin">Super admin</option>
              </select>
            </label>
            <label>
              password:{" "}
              <input
                type="password"
                value={newAdmin.password}
                onChange={(event) =>
                  setNewAdmin({
                    ...newAdmin,
                    password: event.target.value,
                  })
                }
              />
            </label>
            <button onClick={handleAddAdmin}>Add</button>
          </div>
        
      </div>
    </>
  );
}

export default Admin;
