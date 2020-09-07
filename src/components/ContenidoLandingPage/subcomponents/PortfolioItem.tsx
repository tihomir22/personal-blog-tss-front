import React from "react";
import "./PortfolioItem.scss";

export type BootstrapColors = "dark" | "light" | "info" | "warning" | "success" | "danger" | "primary" | "secondary";

export interface ConfiguracionBadges {
  color: BootstrapColors;
  texto: string;
  iconoFa: string;
}

export interface ConfiguracionPlayStore {
  link: string;
}

export interface PortfolioItemProps {
  imageLogo: any;
  titulo: string;
  configBadges: Array<ConfiguracionBadges>;
  descripcionApp: string;
  tecnologiasInvolucradas: Array<string>;
  customCssRootClass?:string;
  repositorioGithub?: Array<string>;
  configPlayStore?: ConfiguracionPlayStore;
}

function PortfolioItem(props: PortfolioItemProps) {
  function playStoreInfo(props: PortfolioItemProps) {
    if (props.configPlayStore != undefined) {
      return (
        <div className="d-inline">
          <a href={props.configPlayStore.link}>
            <img
              alt="Disponible en Google Play"
              className="googleChip"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
            />
          </a>
        </div>
      );
    }
    return null;
  }
  function repositorioGithub(props: PortfolioItemProps) {
    if (props.repositorioGithub) {
      return props.repositorioGithub.map((repositorio) => {
        return (
          <a className="repositorioGit mx-2" href={repositorio} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        );
      });
    }
    return null;
  }

  return (
    <div className={"list-group-item" + props.customCssRootClass ? props.customCssRootClass : ""}>
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="d-inline-block">
            <img src={props.imageLogo} className="icon-img" />
          </div>
          <div className="d-inline-block">
            <div className="mb-0">
              <p className="m-0">{props.titulo}</p>
              {props.configBadges.map((entry, index) => {
                return (
                  <span key={index} className={`mx-1 badge badge-${entry.color}`}>
                    <i className={`fas ${entry.iconoFa}`}></i> {entry.texto}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        {repositorioGithub(props)}
      </div>
      <p>{props.descripcionApp}</p>
      <div className="d-flex">
        {playStoreInfo(props)}
        <ul className="dev-icons dev-icons-inline">
          {props.tecnologiasInvolucradas.map((entry, index) => {
            return (
              <div className="list-inline-item" key={index}>
                <i className={`devicon-${entry}`}></i>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioItem;
