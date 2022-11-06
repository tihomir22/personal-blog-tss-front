import React from "react";
import "./ExperienceItem.scss";

export interface ExperienceItemProps {
  positionName: string;
  companyName: string;
  companyLogoUrl: string;
  descriptionJob: string;
  workingDate: string;
}

function ExperienceItem(props: ExperienceItemProps) {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{props.positionName}</h3>
        <div className="subheading mb-3">
          {props.companyName}
          <img src={props.companyLogoUrl} alt="" className="imageSizes ml-2" />
        </div>
        <p>{props.descriptionJob}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{props.workingDate}</span>
      </div>
    </div>
  );
}
export default ExperienceItem;
