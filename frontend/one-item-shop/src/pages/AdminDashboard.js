import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:5001/orders');
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Session ID</th>
                        <th>Items</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.sessionId}>
                            <td>{order.sessionId}</td>
                            <td>
                                <ul>
                                    {order.items.map((item, index) => (
                                        <li key={index}>{item.description}: {item.quantity}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{(order.totalAmount / 100).toFixed(2)} USD</td>
                            <td>{order.status}</td>
                            <td>{new Date(order.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
