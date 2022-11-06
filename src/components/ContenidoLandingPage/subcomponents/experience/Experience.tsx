import React from "react";
import "./Experience.scss";
import ExperienceItem, { ExperienceItemProps } from "./subcomponents/ExperienceItem";

function Experience(props: any) {
  var posiciones: Array<ExperienceItemProps> = [
    {
      positionName: "Senior Frontend Developer",
      companyName: "Ineo Innovative Technologies SA",
      companyLogoUrl:
        "https://www.tecnoempleo.com/logotipos/201213.png",
      descriptionJob: `Empezando una nueva aventura.`,
      workingDate: "Noviembre 2022 - Presente",
    },
    {
      positionName: "Senior Frontend Developer",
      companyName: "Ecovium",
      companyLogoUrl:
        "https://ecovium.com/fileadmin/user_upload/ecovium_Logo.jpg",
      descriptionJob: `Trabajé como desarrollador web principalmente enfocado al frontend realizando las siguientes tareas:

      *Desarrollo de aplicaciones IOT desde 0 desarrollando PWA's con Angular +v11.
      *Mantenimiento de aplicaciones ya creadas.
      *Implementacion de comunicación en tiempo real con GraphQL.
      *Desarrollo de sistemas de testeo de la aplicación con Cypress, Jest entre otros.
      *Contacto y reuniones de negocio con el cliente en un entorno internacional.
      *Mentoring a diferentes compañeros más junior.
      *Entrevistas tecnicas a compañeros entrantes.
      *Trabajo en un entorno multidisciplinar, multidioma y internacional.
      
      Tecnologias usadas: Angular, Angular PWA, Ionic, SCSS, CSS3, JS ECMA 5,6, React, Spring Boot, ExpressJs + GraphQL, PrimeNg, Crypress, Jest, Jasmine.`,
      workingDate: "Octubre 2021 - Noviembre 2022",
    },
    {
      positionName: "Senior Frontend Developer",
      companyName: "Aratech",
      companyLogoUrl:
        "https://pbs.twimg.com/profile_images/1575423226804568065/3WEraihx_400x400.jpg",
      descriptionJob: `En este empresa comencé mi aventura como senior developer por primera vez, con más responsabilidades que nunca y además en un entorno mucho más dinamico y sobretodo internacional, tratando con clientes de todo el mundo con proyectos y ideas desafiantes!`,
      workingDate: "Junio 2021 - Octubre 2021",
    },
    {
      positionName: "MEAN FullStack developer + DevOps",
      companyName: "PFS Group",
      companyLogoUrl:
        "https://viterbit-careers-site.cdn.viterb.it/56kh3rdy3gt/617bae9ff308c777233236.png",
      descriptionJob: `Si en la anterior empresa empecé mi aventura como desarrollador de software, en esta crecí y sigo creciendo exponencialmente. Soy el encargado de mantener varios de sus proyectos, y empezar otros desde 0. Desde la parte de front usando tecnologias como Angular,RxJS,ES6-Beyond JS, entre otras tantas junto a tecnologias del backend como NodeJs, con frameworks como Loopback3/4 y tambien soy el encargado del despliegue de contenedores con Docker + Docker Compose y demás tareas DevOps.`,
      workingDate: "Agosto 2020 - Agosto 2021",
    },
    {
      positionName: "Frontend Developer",
      companyName: "Geinfor S.L.",
      companyLogoUrl: "https://storage.googleapis.com/media.helloumi.com/channels/0_wn3tHWt.png?time=1527598522.557061",
      descriptionJob: `El desarollo de un ERP es un trabajo laborioso, el aprendizaje esta asegurado y la progresión tanto profesional como personal
        esta asegurada. En Geinfor di mis primeros pasos como programador y más en concreto en el front, desarollando en las ultimas
        tecnologias como Angular 9, Node , Ts, Rxjs , Git, HTML5,SCSS y metodologias agiles con SCRUM.`,
      workingDate: "Marzo 2019 - Agosto 2020",
    },
    {
      positionName: "Contable y atención al cliente",
      companyName: "ITV Xativa",
      companyLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/ITV_logo.svg/1200px-ITV_logo.svg.png",
      descriptionJob: ` Me formó para un entorno de trabajo dinamico y intrepido. Me sirvió para comprender las dinamicas de una de las industrias más
        grandes. Mis tareas se basaban en simple ofimatica como access,word,excel... Manejo de caja y atención al cliente.`,
      workingDate: "Marzo 2014 - Febrero 2016",
    },
  ];

  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experencia</h2>
        {posiciones.map((entry, index) => {
          return (
            <ExperienceItem
              key={index}
              positionName={entry.positionName}
              companyName={entry.companyName}
              companyLogoUrl={entry.companyLogoUrl}
              descriptionJob={entry.descriptionJob}
              workingDate={entry.workingDate}
            ></ExperienceItem>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
