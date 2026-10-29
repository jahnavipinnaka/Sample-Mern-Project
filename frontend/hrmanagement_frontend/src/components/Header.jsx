
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const currentuser = JSON.parse(
    localStorage.getItem("currentuser") || "null"
  );

  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setExpanded(false);
    navigate("/login");
  };

  const closeMenu = () => setExpanded(false);

  const navLinkClass = ({ isActive }) =>
    `nav-link px-3 ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Brand */}
        <Link
          to="/"
          className="navbar-brand fw-bold"
          onClick={closeMenu}
        >
          <span className="brand-icon">T</span>
          TaskFlow
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className={`collapse navbar-collapse ${
            expanded ? "show" : ""
          }`}
        >
          <ul className="navbar-nav mx-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>

            {/* Guest Links */}
            {!currentuser && (
              <>
                <li className="nav-item d-lg-none">
                  <NavLink
                    to="/register"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item d-lg-none">
                  <NavLink
                    to="/login"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}

            {/* HR Links */}
            {currentuser?.role === "HR" && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/assign-task"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    Assign Task
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/employees"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    View Employees
                  </NavLink>
                </li>
              </>
            )}

            {/* Employee Links */}
            {currentuser?.role === "EMPLOYEE" && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/add-todo"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    Add Todo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/view-task"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    View Tasks
                  </NavLink>
                </li>
              </>
            )}

            {/* Admin Links */}
            {currentuser?.role?.toLowerCase() === "admin" && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/view-task"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    View Tasks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/employees"
                    className={navLinkClass}
                    onClick={closeMenu}
                  >
                    View Employees
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* Right Side Actions */}
          <div className="navbar-actions d-flex align-items-lg-center gap-2">
            {!currentuser ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-login d-none d-lg-inline-block"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-register d-none d-lg-inline-block"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <span className="user-badge">
                  <span className="user-dot"></span>
                  {currentuser.role}
                </span>
                <button
                  className="btn btn-logout"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
