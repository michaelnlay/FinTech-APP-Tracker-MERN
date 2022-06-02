import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/jaja.png";

const Navbar = (props) => {
  const Searchhandler = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <nav
      className="navbar navbar-nav navbar-expand-lg navbar-light d-flex flex-row justify-content-between position-fixed fixed-top container"
      style={{ height: "100px", backgroundColor: "#f2f2f2" }}
    >
      <div className="d-flex flex-row">
        <img src={img1} alt="" width="100" height="100"></img>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://animated-tarsier-57488a.netlify.app/"
              >
                Live Cryptos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://tubular-kringle-a6d3b7.netlify.app/"
              >
                ISS Tracker
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/michaelnlay/Financial-APP-Tracker-Mern"
              >
                Project Code(Github)
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/michaelnlay/"
              >
                Connect Me
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:michaellay2689@gmail.com? subject=subject text"
              >
                Help
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <form className="form-inline my-2 my-lg-0 d-flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={Searchhandler}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <div>
        <Link className="btn btn-primary m-2 float-end" to="/new">
          Log Out
        </Link>
        <Link className="btn btn-primary m-2 float-end" to="/new">
          Add New Expense
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
