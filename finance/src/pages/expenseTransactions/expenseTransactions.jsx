import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "antd";
import axios from "axios";

function ExpenseTransactions() {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalTransactions, setTotalTransactions] = useState(0);
    const url = `http://127.0.0.1:8000/api/`;

    const handelGetTransactions = useCallback(() => {
        axios
            .get(`${url}transactions/list/expense?page=${currentPage}`)
            .then((response) => {
                setTotalTransactions(response.data.data.total);
                setTransactions(response.data.data.data);
            })
            .catch((error) => console.error(`Error:${error}`));
    }, [url, currentPage]);

    useEffect(() => {
        handelGetTransactions();
    }, [handelGetTransactions, currentPage]);

    return (
        <>
            <>
                <input type="checkbox" name="" id="nav-toggle" />
                <div className="table-container">
                    <table className="transaction-table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Duration</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Currency</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.category.name}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.recurring?.start_date}</td>
                                    <td>{transaction.recurring?.end_date}</td>
                                    <td>{transaction.recurring?.duration}</td>
                                    <td>{transaction.description}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.currency}</td>
                                    <td>{transaction.title}</td>
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
            </>
        </>
    );
}

export default ExpenseTransactions;
