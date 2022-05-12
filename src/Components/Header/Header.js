import React from "react";
import "./Header.css";
import { Link as LinkTo } from "react-router-dom";
import { Link, Link as Scroll } from "react-scroll";

function Header() {
  const linkStyle = {
    cursor: "pointer",
    textDecoration: "none",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky">
      <nav className=" navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <h1 className="nav-item logo" style={linkStyle} onClick={scrollToTop}>
            <a href="/" className="text-reset">
              Ena
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-list">
                <li className="nav-item">
                  <a
                    onClick={scrollToTop}
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    NASLOVNA
                  </a>
                </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggler"
                  href="#"
                  id="navbarDropdown"
                  role="buttno"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USLUGE
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/nokti">
                      Manikir
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="depilacija">
                      Depilacija
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="laser">
                      Tretmani tela
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="nadogradnja">
                      Svilene Trepavica
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sminka">
                      Šminka
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="tetoviranje">
                      Trajna Šminka
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="epilacija">
                      Epilacija
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/cenovnik">
                  CENOVNIK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  AKCIJE
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to={"Footer"}
                  style={linkStyle}
                  smooth={true}
                  duration={100}
                >
                  KONTAKT
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  PRIJAVA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
