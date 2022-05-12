import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>POSETITE NAS NA DRUSTVENIM MREZAMA:</span>
          </div>

          <div>
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
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>ENA Beauty Studio
                </h6>
                <p>Random text about us</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h2 className="text-uppercase fw-bold mb-4">Usluge</h2>
                <p>
                  <a href="/laser" className="text-reset">
                    Tretmani Tela
                  </a>
                </p>
                <p>
                  <a href="epilacija" className="text-reset">
                    Epilacija
                  </a>
                </p>
                <p>
                  <a href="depilacija" className="text-reset">
                    Depilacija
                  </a>
                </p>
                <p>
                  <a href="sminka" className="text-reset">
                  Šminka
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                  <a href="nokti" className="text-reset">
                    Manikir
                  </a>
                </p>
                <p>
                  <a href="tetoviranje" className="text-reset">
                    Trajna Šminka
                  </a>
                </p>
                <p>
                  <a href="nadogradnja" className="text-reset">
                    Svilene Trepavice
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h2 className="text-uppercase fw-bold mb-4">Kontakt</h2>
                <p>
                <a className="text-reset"  href="https://www.google.com/maps/dir//U%C4%8Ditelj+Tasina+14,+Ni%C5%A1/@43.3153012,21.8953993,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4755b0b031c6ddc1:0x30d52252e1a11a6f!2m2!1d21.8965462!2d43.315833?hl=sr"
          target="_blank">
                  <i className="fas fa-home me-3"></i> Učitelj Tasina 14a Niš</a>
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  ena@ena.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

      
      </footer>
    </div>
  );
}

export default Footer;
