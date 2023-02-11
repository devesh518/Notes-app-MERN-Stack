import React from 'react'

const Login = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        });      
        // const note = await response.json(); // parses JSON response into native JavaScript objects
        const json = await response.json();
        console.log(json);
    }

    return (
        <>
            <form className='container'  onSubmit={handleSubmit}>
                <div className="container w-25 translate-middle position-absolute top-50 start-50 border p-5 rounded">
                    <div className="mb-4">
                        <h4>Sign-in to your Notes Account</h4>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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