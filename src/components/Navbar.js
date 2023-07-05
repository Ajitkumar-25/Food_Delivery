import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("authtoken");
    // window.location.reload();
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-2 fst-italic" to="/">
          Foodi-Duniya
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto  ">
            <li className="nav-item ">
              <Link className="nav-link active fs-4" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem("authtoken") ? (
              <li className="nav-item ">
                <Link className="nav-link active fs-4" to="/">
                  Myorders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          {!localStorage.getItem("authtoken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-2" to="/signup">
                SignUp
              </Link>
              <Link className="btn bg-white text-success mx-2" to="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <div className="btn bg-white text-success mx-2">Mycart</div>
              <div
                className="btn bg-danger text-white mx-2"
                onClick={handlelogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
