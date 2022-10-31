import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const user = useLoaderData();
    console.log(user);

    const handleDelete = u => {
        const agree = window.confirm(`Do you want to delete: ${u.name}`)
        if(agree) {
            console.log(`The user want to delete ${u._id}`);
        }
    }

    return (
        <div>
            <h2>This is Home</h2>
            <h4>Total User: {user.length}</h4>
            <div>
                {
                    user.map(u=> <p key={u._id}>{u.name} {u.address} {u.email} <button onClick={() => handleDelete(u)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Home;