import React from "react";
import "./Experience.scss";
import ExperienceItem, { ExperienceItemProps } from "./subcomponents/ExperienceItem";

function Experience(props: any) {
  var posiciones: Array<ExperienceItemProps> = [
    {
      positionName: "MEAN FullStack developer + DevOps",
      companyName: "PFS Group",
      companyLogoUrl:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHaTwNFo4_f4w/company-logo_200_200/0?e=2159024400&v=beta&t=cO3ag0mZTqNDNbNx6EBynZNmmSW1vNu3y4vllXzQusw",
      descriptionJob: `Si en la anterior empresa empecé mi aventura como desarrollador de software, en esta crecí y sigo creciendo exponencialmente. Soy el encargado de mantener varios de sus proyectos, y empezar otros desde 0. Desde la parte de front usando tecnologias como Angular,RxJS,ES6-Beyond JS, entre otras tantas junto a tecnologias del backend como NodeJs, con frameworks como Loopback3/4 y tambien soy el encargado del despliegue de contenedores con Docker + Docker Compose y demás tareas DevOps.`,
      workingDate: "Agosto 2020 - Presente",
    },
    {
      positionName: "Frontend Developer",
      companyName: "Geinfor S.L.",
      companyLogoUrl: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5c299493a3ae61d86484b85c/picture",
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
