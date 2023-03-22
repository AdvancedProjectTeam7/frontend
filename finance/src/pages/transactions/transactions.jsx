import React, { useCallback, useEffect, useState } from "react";
import "./transactions.css";
import { Pagination } from "antd";
import axios from "axios";
import DashBoard from "../sidebar/dashboard";
import Swal from "sweetalert2";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const url = `http://127.0.0.1:8000/api/`;

    const handelDeleteTransaction = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                    axios
                        .delete(`${url}transactions/delete/${id}`)
                        .then((response) => {
                            handelGetTransactions();
                        })
                        .catch((error) => console.error(`Error:${error}`));
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Your transaction is safe :)",
                        "error"
                    );
                }
            });
    };

    const handelGetTransactions = useCallback(() => {
        axios
            .get(`${url}transactions/list?page=${currentPage}`)
            .then((response) => {
                setTotalTransactions(response.data.data.total);
                setTransactions(response.data.data.data);
            })
            .catch((error) => console.error(`Error:${error}`));
    }, [url, currentPage]);

    useEffect(() => {
        handelGetTransactions();
    }, [handelGetTransactions, currentPage]);

    const [editingTransaction, setEditingTransaction] = useState(null);
    const [newTransaction, setNewTransaction] = useState({
        description: "",
        amount: "",
        title: "",
        category_id: "",
        date: "",
        currency: "$",
    });

    const handleAddTransaction = () => {
        if (
            newTransaction.start_date &&
            newTransaction.end_date &&
            newTransaction.duration &&
            newTransaction.interval
        ) {
            axios
                .post(`${url}transactions/create/recurring`, newTransaction)
                .then((response) => {
                    handelGetTransactions();
                    setNewTransaction({
                        description: "",
                        amount: "",
                        title: "",
                        category_id: "",
                        currency: "$",
                        start_date: "",
                        end_date: "",
                        duration: "",
                        interval: "",
                    });
                })
                .catch((error) => console.error(`Error:${error}`));
        } else {
            axios
                .post(`${url}transactions/create/fixed`, newTransaction)
                .then((response) => {
                    handelGetTransactions();
                    setNewTransaction({
                        description: "",
                        amount: "",
                        title: "",
                        category_id: "",
                        date: "",
                        currency: "$",
                    });
                })
                .catch((error) => console.error(`Error:${error}`));
        }
    };

    const handleEditTransaction = (id, editedTransaction) => {
        axios
            .put(`${url}transactions/edit/fixed/${id}`, editedTransaction)
            .then((res) => {
                const updatedTransactions = transactions.map((transaction) => {
                    if (transaction.id === id) {
                        return editedTransaction;
                    } else {
                        return transaction;
                    }
                });
                handelGetTransactions(updatedTransactions);
            })
            .catch((error) => console.error(`Error:${error}`));
    };

    const handleSaveTransation = (id, editedTransaction) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === id) {
                return editedTransaction;
            } else {
                return transaction;
            }
        });
        handelGetTransactions(updatedTransactions);
        setEditingTransaction(null);
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
                                <th>Date</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Duration</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Currency</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.recurring?.start_date}</td>
                                    <td>{transaction.recurring?.end_date}</td>
                                    <td>{transaction.recurring?.duration}</td>
                                    <td>
                                        {editingTransaction ===
                                        transaction.id ? (
                                            <input
                                                type="text"
                                                value={transaction.description}
                                                onChange={(event) =>
                                                    handleEditTransaction(
                                                        transaction.id,
                                                        {
                                                            ...transaction,
                                                            description:
                                                                event.target
                                                                    .value,
                                                        }
                                                    )
                                                }
                                            />
                                        ) : (
                                            transaction.description
                                        )}
                                    </td>
                                    <td>
                                        {editingTransaction ===
                                        transaction.id ? (
                                            <input
                                                type="number"
                                                value={transaction.amount}
                                                onChange={(event) =>
                                                    handleEditTransaction(
                                                        transaction.id,
                                                        {
                                                            ...transaction,
                                                            amount: parseInt(
                                                                event.target
                                                                    .value
                                                            ),
                                                        }
                                                    )
                                                }
                                            />
                                        ) : (
                                            transaction.amount
                                        )}
                                    </td>
                                    <td>{transaction.currency}</td>
                                    <td>{transaction.title}</td>
                                    <td>
                                        {editingTransaction ===
                                        transaction.id ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleSaveTransation(
                                                            transaction.id,
                                                            transaction
                                                        )
                                                    }
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditingTransaction(
                                                            null
                                                        )
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setEditingTransaction(
                                                            transaction.id
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handelDeleteTransaction(
                                                            transaction.id
                                                        )
                                                    }
                                                >
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
                        total={totalTransactions}
                    />
                </div>
                <input type="checkbox" name="" id="nav-toggle" />
                <div className="minor-content">
                    <label>
                        Category:
                        <input
                            type="number"
                            value={newTransaction.category_id}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    category_id: parseInt(event.target.value),
                                })
                            }
                        />
                    </label>
                    <label htmlFor="">
                        Duration:{" "}
                        <input
                            type="number"
                            value={newTransaction.duration}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    duration: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label htmlFor="">
                        Interval:{" "}
                        <input
                            type="text"
                            value={newTransaction.interval}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    interval: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Description:{" "}
                        <input
                            type="text"
                            value={newTransaction.description}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    description: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Amount:{" "}
                        <input
                            type="number"
                            value={newTransaction.amount}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    amount: parseInt(event.target.value),
                                })
                            }
                        />
                    </label>
                    <label>
                        Currency:{" "}
                        <select
                            value={newTransaction.currency}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    currency: event.target.value,
                                })
                            }
                        >
                            <option value="Dollar">$</option>
                            <option value="Lira" disabled>
                                L.L.
                            </option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Date:{" "}
                        <input
                            type="date"
                            value={newTransaction.date}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    date: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label htmlFor="">
                        Start:{" "}
                        <input
                            type="date"
                            value={newTransaction.start_date}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    start_date: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label htmlFor="">
                        End:{" "}
                        <input
                            type="date"
                            value={newTransaction.end_date}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    end_date: event.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Title:{" "}
                        <select
                            value={newTransaction.title}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    title: event.target.value,
                                })
                            }
                        >
                            <option style={{ display: "none" }}>select</option>
                            <option value="fixed">Fixed</option>
                            <option value="recurring">Recurring</option>
                        </select>
                    </label>
                    <div>
                        <button onClick={handleAddTransaction}>Add</button>
                    </div>
                </div>
            </>
        </>
    );
}

export default Transactions;
