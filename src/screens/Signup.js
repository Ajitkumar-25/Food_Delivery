import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(
      credentials.name,
      credentials.email,
      credentials.password,
      credentials.geolocation
    );
    let response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
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
      alert("User registered successfully");
    }
  };

  return (
    <div className="container mt-5 p-4">
      <h1 style={{ textAlign: "center" }}>Hello this is a signup page</h1>
      <form onSubmit={handlesubmit}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            value={credentials.name}
            onChange={(event) =>
              setcredentials({ ...credentials, name: event.target.value })
            }
          />
        </div>
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
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={(event) =>
              setcredentials({ ...credentials, password: event.target.value })
            }
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Adress</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adress"
            name="geolocation"
            value={credentials.geolocation}
            onChange={(event) =>
              setcredentials({
                ...credentials,
                geolocation: event.target.value,
              })
            }
          />
        </div>

        <button type="submit" className="btn btn-success m-3">
          Submit
        </button>
        <Link to="/login" className="btn btn-danger m-3 ">
          Alredy a user
        </Link>
      </form>
    </div>
  );
};

export default Signup;
