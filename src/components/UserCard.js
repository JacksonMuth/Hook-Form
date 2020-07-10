import React, { useState } from 'react';

const UserCard = () => {
    const [firstName, setfirstName] = useState("");
    const [fnameError, setfnameError] = useState("");

    const [lastName, setlastName] = useState("");
    const [lnameError, setlnameError] = useState("");

    const [email, setemail] = useState("");
    const [emailError, setemailError] = useState("");

    const [password, setpassword] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");

    // const [submitted, setsubmitted] = useState(false);

    const addUser = e => {
        e.preventDefault();
        // setsubmitted(true);
        const newUser = { firstName, lastName, email, password, confirmPassword }
        console.log("Welcome", newUser);

    }

    const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfnameError("");
        } else if(e.target.value.length < 2) {
            setfnameError("First name must be 2 characters or longer!");
        } else {
            setfnameError("");
        }
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1) {
            setlnameError("");
        } else if(e.target.value.length < 2) {
            setlnameError("Last name must be 2 characters or longer!");
        } else {
            setlnameError("");
        }
    }

    const handleEmail = (e) => {
        setemail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        } else {
            setemailError("");
        }
    }

    const handlePassword = (e) => {
        setpassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        } else {
            setpasswordError("");
        }
    }

    const handleconfirmPassword = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setconfirmPasswordError("Passwords do not match!");
        } else {
            setconfirmPasswordError("");
        }
    }







    return (
        <div>
            <form onSubmit = { addUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handlefirstName } />
                    {
                        fnameError?
                        <p style={{color:'red'}}>{ fnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handlelastName } />
                    {
                        lnameError?
                        <p style={{color:'red'}}>{ lnameError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                        emailError?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    {
                        passwordError?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" onChange={ handleconfirmPassword } />
                    {
                        confirmPasswordError?
                        <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                        ''
                    }
                </div>
                {/* <input type="submit" value="Create User" /> */}
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