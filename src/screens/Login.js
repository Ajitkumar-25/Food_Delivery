import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  let navigate=useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(credentials.email, credentials.password);
    let response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response);
    if (!response.success) {
      alert("Invalid credentials");
    } else {
       navigate('/')
    }
  };

  return (
    <div className="container mt-5 p-4">
      <h1 style={{ textAlign: "center" }}>Hello this is a Login page</h1>
      <form  onSubmit={handlesubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={(event) =>
              setcredentials({ ...credentials, email: event.target.value })
            }
          />
        </div>
        <div className="form-group mb-3" >
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={(event) =>
              setcredentials({
                ...credentials,
                password: event.target.value
              })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
        <Link to="/signup" className="btn btn-danger m-3 ">
          Not signed in
        </Link>
      </form>
    </div>
  );
};

export default Login;
