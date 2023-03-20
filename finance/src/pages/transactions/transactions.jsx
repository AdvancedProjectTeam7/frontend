import React, { useCallback, useEffect, useState } from "react";
import "./transactions.css";
import { Pagination } from "antd";
import axios from "axios";

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const url = `http://127.0.0.1:8000/api/`;

    const handelGetTransactions = useCallback(() => {
        axios
            .get(`${url}transactions/list?page=${currentPage}`)
            .then((response) => {
                setTotalTransactions(response.data.data.total);
                console.log(response.data);
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
        title: "fixed",
        category_id: "",
        date: "",
        currency: "$",
        start_date: "",
        end_date: "",
    });

    const handleAddTransaction = () => {
        console.log(transactions.splice(-1));
        axios
            .post(
                "http://127.0.0.1:8000/api/transactions/create/fixed",
                newTransaction
            )
            .then((response) => {
                console.log(response);
                setTransactions([response.data.data, ...transactions]);
                setNewTransaction({
                    description: "",
                    amount: "",
                    title: "fixed",
                    category_id: "",
                    date: "",
                    currency: "$",
                    start_date: "",
                    end_date: "",
                });
            })
            .catch((error) => console.error(`Error:${error}`));
    };

    const handleEditTransaction = (id, editedTransaction) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === id) {
                return editedTransaction;
            } else {
                return transaction;
            }
        });
        setTransactions(updatedTransactions);
    };

    const handleSaveTransation = (id, editedTransaction) => {
        const updatedTransactions = transactions.map((transaction) => {
            if (transaction.id === id) {
                return editedTransaction;
            } else {
                return transaction;
            }
        });
        setTransactions(updatedTransactions);
        setEditingTransaction(null);
    };

    return (
        <>
                <>
                <input type="checkbox" name="" id="nav-toggle" />
                <div className="table-container">
                    <table className="transaction-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
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
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.category_id}</td>
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
                                                    onClick={() => {
                                                        const updatedTransactions =
                                                            transactions.filter(
                                                                (t) =>
                                                                    t.id !==
                                                                    transaction.id
                                                            );
                                                        setTransactions(
                                                            updatedTransactions
                                                        );
                                                    }}
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
                    <label>
                        Description:{" "}
                        <select
                            value={newTransaction.description}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    description: event.target.value,
                                })
                            }
                        >
                            <option type="date" value="income">
                                income
                            </option>
                            <option value="expense">expense</option>
                        </select>
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
                            <option value="Lira">L.L.</option>
                        </select>
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
                            <option value="fixed">Fixed</option>
                            <option value="recurrening">Recurrening</option>
                        </select>
                    </label>
                    <button onClick={handleAddTransaction}>Add</button>
                </div>
                </>
        </>
    );
}

export default Transactions;
