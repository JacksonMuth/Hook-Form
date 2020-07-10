import React, { useState } from 'react';

const UserCard = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const addUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword }
        console.log("Welcome", newUser);
    }




    return (
        <div>
            <form onSubmit = { addUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setlastName(e.target.value) } />
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ (e) => setemail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setpassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
                </div>
            </form>




            <h3>Your Form Data</h3>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </div>
    )
}

export default UserCard;