import React from "react";
import avatar from "../../img/profile.jpg";
import Flags from "country-flag-icons/react/3x2";
import "./Navabar.scss";
function Navabar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Tihomir Stoychev Stoychev</span>
        <span className="d-none d-lg-block englobadorImg">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={avatar} alt="" />
        </span>
      </a>
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
        <ul className="navbar-nav">
          {[
            { nombre: "Acerca de mi", ruta: "/#about" },
            { nombre: "Experencia", ruta: "/#experience" },
            {
              nombre: "Educación",
              ruta: "/#education",
            },
            {
              nombre: "Habilidades",
              ruta: "/#skills",
            },
            {
              nombre: "Intereses",
              ruta: "/#interests",
            },
            {
              nombre: "Proyectos",
              ruta: "/#projects",
            },
            {
              nombre: "Premios",
              ruta: "/#awards",
            },
            {
              nombre: "Blog",
              ruta: "/blog",
            },
          ].map((entry, index) => {
            return (
              <li className="nav-item" key={index}>
                <a className="nav-link js-scroll-trigger" href={entry.ruta}>
                  {entry.nombre}
                </a>
              </li>
            );
          })}
          <br></br>
          <li className="nav-item">
            <div>
              <p>Descargar CV</p>
              <div className="row wrapperIconosIdioma">
               
                <div className="col-6 wrapperFlag">
                  <a
                    href="https://github.com/tihomir22/printable-ready-cv/raw/develop/CV-English.pdf"
                    download="CV-English-21-02-2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flags.US title="English version" />
                  </a>
                </div>

                <div className="col-6 wrapperFlag">
                  <a
                    href="https://github.com/tihomir22/printable-ready-cv/raw/develop/CV-Spanish.pdf"
                    download="CV-Spanish-21-02-2021.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flags.ES title="Spanish version" />
                  </a>
                </div>

              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navabar;
