import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src="images/logo.png" alt="LOGO" />
        </Link>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times"></i>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/teams">TEAMS</Link>
            </li>
            <li>
              <Link to="/bloglist">BLOG LIST</Link>
            </li>
            <li>
              <Link to="/createblog">CREATE BLOG</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
