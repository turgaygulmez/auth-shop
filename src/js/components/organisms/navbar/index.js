import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = ({ navigation, location, onLogout }) => {
  return (
    <nav className="navigation navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navigation__logo nav-link " to="/">
        <img
          className="navigation__logo__image"
          alt="logo"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {navigation &&
            navigation.map((item) => {
              return (
                <li
                  key={item.url}
                  className={`nav-item ${
                    location.pathname === item.url ? "active" : ""
                  }`}
                >
                  <Link className="nav-link navigation__link" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
        <button
          className="navigation__logout btn btn-primary"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
