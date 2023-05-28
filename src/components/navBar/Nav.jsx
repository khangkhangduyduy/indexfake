import "./nav.css"
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand"><Link className="link0" to="/">HOME</Link></a>
    <a className="navbar-brand">ABOUT</a>
    <a className="navbar-brand">CONTACT</a>
    <a className="navbar-brand">WRITE</a>
    <a className="navbar-brand" ><Link className="link0" to="/login">LOGIN</Link></a>
    <a className="navbar-brand"><Link className="link0" to="/register">REGISTER</Link></a>
    <form className="d-flex " role="search">
      <input className="form-control-s me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-success" type="submit">Search</button>
    </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active"><Link className="link" to="/">HOME</Link></a>
            <a className="nav-link ">About</a>
            <a className="nav-link ">Contact</a>
            <a className="nav-link ">Write</a>
            <a className="nav-link ">Login</a>
            <a className="nav-link ">Register</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item">Action</a>
              <a className="dropdown-item">Another action</a>
              <a className="dropdown-item">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}
