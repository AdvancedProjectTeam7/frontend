import React, { useState } from "react";
import DashBoard from "../sidebar/dashboard";
import "./transactions.css";

function Transactions() {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            description: "Salary",
            amount: 5000,
            type: "income",
        },
        {
            id: 2,
            description: "Rent",
            amount: 1000,
            type: "expense",
        },
        {
            id: 3,
            description: "Groceries",
            amount: 200,
            type: "expense",
        },
    ]);

    const [editingTransaction, setEditingTransaction] = useState(null);
    const [newTransaction, setNewTransaction] = useState({
        description: "",
        amount: 0,
        type: "income",
    });

    const handleAddTransaction = () => {
        const newId = transactions.length + 1;
        const newTransactionWithId = { ...newTransaction, id: newId };
        setTransactions([...transactions, newTransactionWithId]);
        setNewTransaction({
            description: "",
            amount: 0,
            type: "income",
        });
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
        setEditingTransaction(null);
    };

    return (
        <>
            <input type="checkbox" name="" id="table-toggle" />
            <div className="main-table">
                <DashBoard />
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>
                                    {editingTransaction === transaction.id ? (
                                        <input
                                            type="text"
                                            value={transaction.description}
                                            onChange={(event) =>
                                                handleEditTransaction(
                                                    transaction.id,
                                                    {
                                                        ...transaction,
                                                        description:
                                                            event.target.value,
                                                    }
                                                )
                                            }
                                        />
                                    ) : (
                                        transaction.description
                                    )}
                                </td>
                                <td>
                                    {editingTransaction === transaction.id ? (
                                        <input
                                            type="number"
                                            value={transaction.amount}
                                            onChange={(event) =>
                                                handleEditTransaction(
                                                    transaction.id,
                                                    {
                                                        ...transaction,
                                                        amount: parseInt(
                                                            event.target.value
                                                        ),
                                                    }
                                                )
                                            }
                                        />
                                    ) : (
                                        transaction.amount
                                    )}
                                </td>
                                <td>{transaction.type}</td>
                                <td>
                                    {editingTransaction === transaction.id ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    handleEditTransaction(
                                                        transaction.id,
                                                        transaction
                                                    )
                                                }
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setEditingTransaction(null)
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
                <div className="minor-content">
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
                        Type:{" "}
                        <select
                            value={newTransaction.type}
                            onChange={(event) =>
                                setNewTransaction({
                                    ...newTransaction,
                                    type: event.target.value,
                                })
                            }
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </label>
                    <button onClick={handleAddTransaction}>Add</button>
                </div>
            </div>
        </>
    );
}

export default Transactions;
