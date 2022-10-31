import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const user = useLoaderData();
    const [displayUser, setDisplayUser] = useState(user);

    const handleDelete = u => {
        const agree = window.confirm(`Do you want to delete: ${u.name}`)
        if(agree) {
            fetch(`http://localhost:5000/users/${u._id}`, {
                method: 'DELETE'
            })
            .then (res => res.json())
            .then (data => {
                if(data.deletedCount > 0) {
                    const deleteUser = displayUser.filter(usr => u._id !== usr._id );
                    setDisplayUser(deleteUser);
                }
            })
        }
    }

    return (
        <div>
            <h2>This is Home</h2>
            <h4>Total User: {displayUser.length}</h4>
            <div>
                {
                    displayUser.map(u=> <p key={u._id}>
                        {u.name} {u.address} {u.email}
                        <Link to={`update/${u._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(u)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;