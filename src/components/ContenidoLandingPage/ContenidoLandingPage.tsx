import React, { useEffect } from "react";
import $ from "jquery";
import cryptoboss from "../../img/cryptoboss.png";
import thepumper from "../../img/thepumper.jpg";
import logo from "../../img/lifestyle.png";
import logoEpsilon from "../../img/logoEpsilon.png";
import PortfolioItem from "./subcomponents/PortfolioItem";

function ContenidoLandingPage() {
  function cambiarApartado() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      let self = this as any;
      // if (window.location.pathname.replace(/^\//, "") == self.pathname.replace(/^\//, "") && window.location.hostname == self.hostname) {
      let target: any = $(self.hash);
      target = target.length ? target : $("[name=" + self.hash.slice(1) + "]");
      if (target && target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return true;
      }
      //}
    });
  }

  function cerrarMenuResponsivoAlHacerClick() {
    $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  function activarScrollSpy() {
    $("body").scrollspy({
      target: "#sideNav",
    });
  }

  function activarHoverTarjetaBadger() {
    document.getElementsByClassName("hoverTarjetaBadger")[0].addEventListener("click", function (event) {
      let tarjetaBadger: any = document.querySelector(".mostrarHoverTarjetaBadger");
      if (tarjetaBadger) {
        if (tarjetaBadger.style.visibility == "hidden") {
          tarjetaBadger.style.visibility = "visible";
          tarjetaBadger.style.opacity = 1;
        } else {
          tarjetaBadger.style.visibility = "hidden";
          tarjetaBadger.style.opacity = 0;
        }
      }
    });
  }

  useEffect(() => {
    cambiarApartado();
    cerrarMenuResponsivoAlHacerClick();
    activarScrollSpy();
  }, []);

  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">
            Stoychev Stoychev
            <span className="text-primary"> Tihomir</span>
          </h1>
          <div className="subheading mb-5">
            Mestre Serrano 4 · Canals, 46650 · (+34) 603680594 ·
            <a href="mailto:tihomir_alcudia3@hotmail.com">tihomir_alcudia3@hotmail.com</a>
          </div>
          <p className="lead mb-5">
            Romper lo irrompible. Evitar lo inevitable. Romper las reglas sin quebrantar la ley. <br />
            Me defino como una persona trabajadora, apasionada, positiva y firme.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/tihomir-stoychev-stoychev" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/tihomir22" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/StoychevTihomir" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experencia</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Frontend Developer</h3>
              <div className="subheading mb-3">
                Geinfor S.L.
                <img
                  src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5c299493a3ae61d86484b85c/picture"
                  alt=""
                  className="imageSizes"
                />
              </div>
              <p>
                El desarollo de un ERP es un trabajo laborioso, el aprendizaje esta asegurado y la progresión tanto profesional como
                personal esta asegurada. En Geinfor di mis primeros pasos como programador y más en concreto en el front, desarollando en
                las ultimas tecnologias como Angular 9, Node , Ts, Rxjs , Git, HTML5,SCSS y metodologias agiles con SCRUM.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Marzo 2019 - Presente</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Contable y atención al cliente</h3>
              <div className="subheading mb-3">
                ITV Xativa
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ITV_logo.svg/1200px-ITV_logo.svg.png"
                  alt=""
                  className="imageSizes"
                />
              </div>
              <p>
                Me formó para un entorno de trabajo dinamico y intrepido. Me sirvió para comprender las dinamicas de una de las industrias
                más grandes. Mis tareas se basaban en simple ofimatica como access,word,excel... Manejo de caja y atención al cliente.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Marzo 2014 - Febrero 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Educación</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">IES Simarro LaCabra</h3>
              <div className="subheading mb-3">Grado Formativo Superior</div>
              <div>DAM - Desarollo de Aplicaciones Multiplataforma</div>
              <p>Media academica: 8.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septiembre 2017 - Marzo 2019 </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-4">
            <div className="resume-content">
              <h3 className="mb-0">Academia Millora Xativa</h3>
              <div className="subheading mb-3">Formación para la prueba de acceso DAM</div>
              <p>Media academica: 8.6</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Febrero 2017 - Septiembre 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">IES Simarro LaCabra</h3>
              <div className="subheading mb-3">Grado Formativo Medio</div>
              <div>Administración y contabilidad</div>
              <p>Media academica: 7.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septiembre 2012 - Marzo 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">Lenguajes de programación y Herramientas</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <div className="list-inline-item">
              <i className="devicon-git-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-android-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-bitbucket-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-cplusplus-plain"></i>
            </div>

            <div className="list-inline-item">
              <i className="devicon-csharp-plain"></i>
            </div>

            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <div className="list-inline-item">
              <i className="devicon-java-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-mongodb-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-mysql-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-php-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-typescript-plain"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-heroku-original"></i>
            </div>
            <div className="list-inline-item">
              <i className="devicon-docker-plain"></i>
            </div>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, diseño responsive
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Testeo en multiples navegadores y debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Equipos multidiscisplinares
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Desarollo agil y SCRUM
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Escalabilidad y eficiencia
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Programación reactiva
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Intereses</h2>
          <p>
            Aparte de ser un desarollador web asilvestrado, tambien me gusta la naturaleza, para mi no hay nada mejor que una brisa del mar
            te golpee mientras uno lee un libro o despertarse con el canto de los pajaros. Nos perdemos con las maquinas, pero nos volvemos
            a encontrar en la naturaleza.
          </p>
          <p className="mb-3">
            En el aire libre me gusta sacar mi bicicleta a dar una vuelta o con el coche de ruta, a explorar los confines del mundo mientras
            se disfruta de la tranquilidad de la naturaleza. Tambien otras de mis aficiones es ir de pesca, tanto en mar como en aguas
            dulces.
          </p>
          <p className="mb-5">
            Me gustan las peliculas de terror y ficción, y si se combinan ambos generos, la cosa se vuelve loca, peliculas como "The Thing",
            "Alien" me fascinan y sin duda podria verme multiples veces. Tambien me encanta invertir tiempo leyendo un libro o viendo los
            graficos, ya que otro de los mundos que me atrae de forma apasionada es el mundo bursatil.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Proyectos</h2>

          <div className="row rowPadre">
            <div className="col-md-9 col-sm-12 mostrarHoverTarjetaBadger">
              <div className="list-group-flush">
                <PortfolioItem
                  imageLogo={logoEpsilon}
                  titulo={"Epsilon"}
                  customCssRootClass={"rootClassEstrellaPequenya"}
                  descripcionApp={`Mi proyecto de final de grado. Un gestionador de portfolio, con acceso directo a las casas de intercambio, permitiendo abrir posiciones manualmente con precios en vivo. Multiples graficos en ChartJs para ver la liquidez actual y como se esta gestionando, sistema de chat y sistema de alertas para advertir al usuario sobre la volatilidad del mercado.`}
                  repositorioGithub={["https://github.com/tihomir22/Epsilon"]}
                  tecnologiasInvolucradas={["angularjs-plain", "ionic-original", "php-plain"]}
                  configBadges={[
                    { color: "dark", iconoFa: "fa-money-bill-wave", texto: "Finanzas" },
                    { color: "info", iconoFa: "fa-chart-bar", texto: "Todo en uno de las finanzas" },
                    { color: "success", iconoFa: "fa-check", texto: "Terminado" },
                  ]}
                />

                <PortfolioItem
                  imageLogo={cryptoboss}
                  titulo={"CryptoBoss"}
                  descripcionApp={`CryptoBoss se define como un "Potente sistema de gráficos y análisis de datos, todo en su bolsillo.", ni más ni menos, es una herramienta simple pero completa que aportará al usuario información rapida y detallada sobre los movimientos de sus criptomonedas favoritas.`}
                  configPlayStore={{
                    link:
                      "https://play.google.com/store/apps/details?id=com.hawkbadger.cryptoboss&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
                  }}
                  repositorioGithub={["https://github.com/tihomir22/CryptoBoss-RN"]}
                  tecnologiasInvolucradas={["react-original"]}
                  configBadges={[
                    { color: "dark", iconoFa: "fa-money-bill-wave", texto: "Finanzas" },
                    { color: "info", iconoFa: "fa-chart-bar", texto: "Portfolio Tracker" },
                    { color: "success", iconoFa: "fa-check", texto: "Terminado" },
                  ]}
                />

                <PortfolioItem
                  imageLogo={logo}
                  customCssRootClass={"rootClassEstrellaPequenya"}
                  titulo={"Blog personal"}
                  descripcionApp={`Este mismo blog que estas leyendo ahora mismo tambien tuvo su desarrollo. Nació como un pequeño proyecto de paginas estaticas que usaban bootstrap y su enrutamiento consistia en navegar de sección en sección, a convertirse en un blog mantenido en ReactJs, con un backend encargado de guardar y mostrar los posts en NodeJs, Dockerizado y actualmente funcionando en una instancia EC2 de AWS.`}
                  repositorioGithub={[
                    "https://github.com/tihomir22/personal-blog-tss-front",
                    "https://github.com/tihomir22/personal-blog-tss-BACK",
                  ]}
                  tecnologiasInvolucradas={["react-original", "amazonwebservices-original", "docker-plain", "nodejs-plain"]}
                  configBadges={[
                    { color: "secondary", iconoFa: "fa-user", texto: "Personal" },
                    { color: "warning", iconoFa: "fa-check", texto: "Terminado , con actualizaciones" },
                  ]}
                />

                <PortfolioItem
                  imageLogo={thepumper}
                  titulo={"ThePumper"}
                  tecnologiasInvolucradas={["angularjs-plain", "ionic-original", "nodejs-plain"]}
                  descripcionApp={`ThePumper conecta al usuario con un mundo de posibilidades con el fin de hacer crecer sus inversiones. Creación de estrategias totalmente personalizadas basadas simplemente en el precio, o en indicadores. La app dispone de más de 50 indicadores tecnicos configurables y con los cuales generar nuestras estrategias personalizadas para el bot.
                  
                  Su simpleza, rapidez y compatibilidad con multitud de exchanges de criptomonedas lo hacen el fiel compañero a la libertad financiera.`}
                  repositorioGithub={["https://github.com/tihomir22/ThePumper", "https://github.com/tihomir22/BadgerAPI-Nestjs"]}
                  configBadges={[
                    { color: "dark", iconoFa: "fa-money-bill-wave", texto: "Finanzas" },
                    { color: "info", iconoFa: "fa-robot", texto: "Trading bot" },
                    { color: "secondary", iconoFa: "fa-check", texto: "En progreso" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Premios y Certificaciones</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mejor expediente año 2019 - SIMARRO
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ContenidoLandingPage;
