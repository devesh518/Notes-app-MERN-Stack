import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    // Creating a useState hook for email and password
    const [credentials, setCredentials] = useState({email: "", password: ""})

    // Creating an object for useNavigate hook
    const navigate = useNavigate();

    // De-structuring showAlert from props
    const { showAlert } = props;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });      
        // const note = await response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authtoken);
            // redirect("/");
            showAlert("Logged in successfully", "success");
            navigate("/");
        }
        else{
            showAlert("Invalid credentials", "danger");
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    // Putting in-line styles into re-usable variables
    const styles = {
        // IDK HOW TO USE THIS SHIT MAN WTF
        background: {
            // margin: '0px',
            // padding: '0px',
            backgroundColor: "lightgrey",
            border: "2px solid red",
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container w-25 translate-middle position-absolute top-50 start-50 border p-5 rounded shadow-lg mb-5 bg-body" style={styles.background}>
                    <div className="mb-4">
                        <h4>Sign-in to your Notes Account</h4>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={credentials.email} onChange={onChange} /> 
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={credentials.password} onChange={onChange} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div id="emailHelp" className="form-text">Password must be atleast 6 characters.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>

    )
}

export default Login    