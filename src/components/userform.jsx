import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const newUser = { username, email, password } = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        // inside of the createUser function
        // setUsername("");

    };

    return (
        <fieldset>
            <legend>form</legend>
            <form onSubmit={createUser}>
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} name="firstname" value={firstname} />
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} name="lastname" value={lastname} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" value={confirmPassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>
                    firstname: {firstname}
                </p>
                <p>
                    lastname: {lastname}
                </p>
                <p>
                    email: {email}
                </p>
                <p>
                    password: {password}
                </p>
                <p>
                    Confirm password: {confirmPassword}
                </p>
            </div>
        </fieldset>

    );
};

export default UserForm;