import React from "react";
import { useNavigate } from "react-router-dom";

const NavContainer = () => {
    const navigate = useNavigate();

    return (
      <div className="nav-container">
        <nav className="flex flex-direction-column justify-content-space-between second-background-color nav">
          <div className="nav-options">
            <a
              href="#"
              className="nav-option active"
              onClick={async () => {
                navigate("/Users");
              }}
            >
              <i className="fa fa-tachometer" aria-hidden="true"></i>
              <h3> Dashboard</h3>
            </a>

            <a
              className="nav-option"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              <i className="fa fa-tachometer" aria-hidden="true"></i>
              <h3>Logout</h3>
            </a>
          </div>
        </nav>
      </div>
    );
}

export default NavContainer;