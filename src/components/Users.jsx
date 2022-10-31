import React, { useState } from 'react';

const Users = () => {
    const [user, setUser] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
    }

    const clickBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={clickBlur} type="text" name="name" id="" placeholder='Your Name' required /><br />
                <input onBlur={clickBlur} type="text" name="address" id="" placeholder='Your Address' required /><br />
                <input onBlur={clickBlur} type="email" name="email" id="" placeholder='Your Email' required /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Users;