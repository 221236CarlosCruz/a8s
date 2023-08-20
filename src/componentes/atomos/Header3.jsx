/* eslint-disable no-undef */
import { Link } from "react-router-dom";

import LogoRestaPoots from "../../assets/img/logo.png";

import "../../assets/styles/Header3.css";

function Header3() {

  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="container-fluid">
        <div className="logo">
          <img src={LogoRestaPoots} alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                inicio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#conocenos">
                acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#footer">
                menú
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " onClick={handleShow}>
                contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header3;