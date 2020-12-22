import React from "react";
import "./IconSkill.scss";
import ReactTooltip from "react-tooltip";

export interface PropsSkills {
  habilidades: Array<SkillIcon>;
}

export interface SkillIcon {
  nombreTecnologia: string;
  iconoTecnologia: string;
}
function IconSkill(props: PropsSkills) {
  return (
    <ul className="list-inline dev-icons">
      <ReactTooltip />
      {props.habilidades.map((entry, index) => {
        return (
          <div className="list-inline-item" data-tip={entry.nombreTecnologia}>
            <i className={`devicon-${entry.iconoTecnologia}`}></i>
          </div>
        );
      })}
    </ul>
  );
}

export default IconSkill;
