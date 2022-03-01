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
  const scrollToBottom = () => {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="sticky">
      <div className="icons background-top">
        <a
          href="https://www.google.com/maps/dir//U%C4%8Ditelj+Tasina+14,+Ni%C5%A1/@43.3153012,21.8953993,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4755b0b031c6ddc1:0x30d52252e1a11a6f!2m2!1d21.8965462!2d43.315833?hl=sr"
          target="_blank"
          className="me-4 text-reset location-icon"
        >
          <i className="bi bi-geo-alt"></i>Učitelj Tasina 14a Niš
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-facebook face"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="bi bi-youtube"></i>
        </a>
      </div>

      <nav className=" navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <img
            onClick={scrollToTop}
            className="img-thumbnail img-fluid logo"
            src="materijal/logo.png"
          />

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
              <LinkTo style={linkStyle} to="/">
                <li className="nav-item">
                  <p
                    onClick={scrollToTop}
                    className="nav-link active pera"
                    aria-current="page"
                  >
                    NASLOVNA
                  </p>
                </li>
              </LinkTo>
              {/* DROPDOWN TOGGLE //////////////////////////////////////////////////////////////////////////////////*/}
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
                      Laser
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="nadogradnja">
                      Nadogradnja Trepavica
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sminka">
                      Sminka
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="tetoviranje">
                      Tetoviranje Obrva
                    </a>
                  </li>
                </ul>
              </li>
              {/* DROPDOWN TOGGLE //////////////////////////////////////////////////////////////////////////////////*/}
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
                <a className="nav-link active" href="#">
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
