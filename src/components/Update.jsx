import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateApiUser = useLoaderData();
    const [user, setUser] = useState(updateApiUser);
    const handleSubmit = e => {

        e.preventDefault();

        // Update User
        fetch(`http://localhost:5000/users/${updateApiUser._id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }

    const clickUpdate = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={clickUpdate} defaultValue={updateApiUser.name} type="text" name="name" id="" placeholder='Your Name' required /><br />
                <input onBlur={clickUpdate} defaultValue={updateApiUser.address} type="text" name="address" id="" placeholder='Your Address' required /><br />
                <input onBlur={clickUpdate} defaultValue={updateApiUser.email} type="email" name="email" id="" placeholder='Your Email' required /> <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;