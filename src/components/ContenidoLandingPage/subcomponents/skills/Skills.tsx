import React from "react";
import "./Skills.scss";
import IconSkill, { PropsSkills } from "./subcomponents/IconSkill";

function Skills(props: any) {
  var habilidadesWrapper: PropsSkills = {
    habilidades: [
      {
        iconoTecnologia: "html5-plain",
        nombreTecnologia: "HTML5",
      },
      {
        iconoTecnologia: "css3-plain",
        nombreTecnologia: "CSS3",
      },
      {
        iconoTecnologia: "javascript-plain",
        nombreTecnologia: "Javascript",
      },
      {
        iconoTecnologia: "angularjs-plain",
        nombreTecnologia: "Angular+2",
      },
      {
        iconoTecnologia: "bootstrap-plain",
        nombreTecnologia: "Bootstrap+3",
      },
      {
        iconoTecnologia: "git-plain",
        nombreTecnologia: "Git",
      },
      {
        iconoTecnologia: "github-original",
        nombreTecnologia: "Github",
      },
      {
        iconoTecnologia: "gitlab-plain",
        nombreTecnologia: "Gitlab",
      },
      {
        iconoTecnologia: "android-plain",
        nombreTecnologia: "Android",
      },
      {
        iconoTecnologia: "bitbucket-plain",
        nombreTecnologia: "Bitbucket",
      },
      {
        iconoTecnologia: "cplusplus-plain",
        nombreTecnologia: "C++",
      },
      {
        iconoTecnologia: "csharp-plain",
        nombreTecnologia: "C#",
      },
      {
        iconoTecnologia: "react-original",
        nombreTecnologia: "ReactJs",
      },
      {
        iconoTecnologia: "nodejs-plain",
        nombreTecnologia: "NodeJs",
      },
      {
        iconoTecnologia: "sass-original",
        nombreTecnologia: "SASS",
      },
      {
        iconoTecnologia: "wordpress-plain",
        nombreTecnologia: "Wordpress",
      },
      {
        iconoTecnologia: "npm-original-wordmark",
        nombreTecnologia: "Node Package Manager",
      },
      {
        iconoTecnologia: "java-plain",
        nombreTecnologia: "Java",
      },
      {
        iconoTecnologia: "mongodb-plain",
        nombreTecnologia: "MongoDb",
      },
      {
        iconoTecnologia: "mysql-plain",
        nombreTecnologia: "MySQL",
      },
      {
        iconoTecnologia: "php-plain",
        nombreTecnologia: "PHP",
      },
      {
        iconoTecnologia: "typescript-plain",
        nombreTecnologia: "Typescript",
      },
      {
        iconoTecnologia: "heroku-original",
        nombreTecnologia: "Heroku",
      },
      {
        iconoTecnologia: "docker-plain",
        nombreTecnologia: "Docker",
      },
      {
        iconoTecnologia: "amazonwebservices-original",
        nombreTecnologia: "AWS",
      },
    ],
  };
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Habilidades</h2>

        <div className="subheading mb-3">Lenguajes de programación y Herramientas</div>
        <IconSkill habilidades={habilidadesWrapper.habilidades}></IconSkill>

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
  );
}

export default Skills;
