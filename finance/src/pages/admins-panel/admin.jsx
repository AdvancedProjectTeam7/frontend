import React, { useCallback, useEffect, useState } from "react";
import "./admin.css";
import { Pagination } from "antd";
import axios from "axios";
import DashBoard from "../sidebar/dashboard";
import { toast } from "react-toastify";
function Admin() {
  const [adminss, setAdminss] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allAdminss, setallAdminss] = useState(0);
  const [token, setToken] = useState("");
  const url = `http://127.0.0.1:8000/api/`;
  const [refresh, setRefresh] = useState(false);
  const handelDeleteAdmin = (id) => {
    token &&
      axios
        .delete(`${url}auth/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          setRefresh(!refresh);
          toast.success("Admin successfully deleted.");
        })
        .catch((error) => console.error(`Error:${error}`));
  };

  const handelGetAdminss = useCallback(() => {
    setToken(localStorage.getItem("token"));
    token &&
      axios
        .get(`http://localhost:8000/api/auth/getall`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setAdminss(response.data.message);
        })
        .catch((error) => console.error(`Error:${error}`));
  }, [token]);

  useEffect(() => {
    handelGetAdminss();
  }, [handelGetAdminss, refresh, currentPage]);

  const [editingAdmin, setEditingAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "admin",
  });

  const handleAddAdmin = () => {
    console.log(adminss.splice(-1));
    axios
      .post(`${url}auth/register`, newAdmin)
      .then((response) => {
        setRefresh(!refresh);
        toast.success("Admin successfully created.");
        setNewAdmin({
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
          role: "admin",
        });
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const handleEditAdmin = (id, editedAdmin) => {
    axios
      .post(`${url}auth/edit/${id}`, editedAdmin, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRefresh(!refresh);
      })
      .catch((error) => console.error({ error }));
  };

  const handleSaveTransation = (id, editedAdmin) => {
    const updatedAdminss = adminss.map((Admin) => {
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
      <>
        <DashBoard />

        <input type="checkbox" name="" id="nav-toggle" />
        <div className="table-container">
          <table className="transaction-table">
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
              {adminss &&
                adminss.map((Admin, index) => (
                  <tr key={index}>
                    <td>{Admin.id}</td>

                    <td>
                      {editingAdmin === Admin.id ? (
                        <input
                          type="text"
                          defaultValue={Admin.name}
                          onChange={(event) =>
                            handleEditAdmin(Admin.id, {
                              _method: "patch",
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
                              _method: "patch",
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
                              _method: "patch",
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
        <div className="minor-content">
          <label>
            Name:{" "}
            <input
              type="text"
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
                //   email: event.target.value,
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
          <label>
            password_confirmation:{" "}
            <input
              type="password"
              value={newAdmin.password_confirmation}
              onChange={(event) =>
                setNewAdmin({
                  ...newAdmin,
                  password_confirmation: event.target.value,
                })
              }
            />
          </label>
          <button onClick={handleAddAdmin}>Add</button>
        </div>
      </>
    </>
  );
}

export default Admin;
