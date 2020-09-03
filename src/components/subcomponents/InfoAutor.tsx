import React from "react";
import "./InfoAutor.scss";
import moment from "moment";
function InfoAutor(props: { autorImage: string; autorName: string; postDate: string; enfocable: boolean }) {
  return (
    <div className="d-flex informacionAutor">
      <div>
        <img src={props.autorImage} alt="" className="avatar " />
      </div>

      <div className={`textosAutor px-3 ${props.enfocable ? "enfocarColorBlanco" : ""}`}>
        <span>
          <strong>{props.autorName}</strong>
        </span>
        <p className={`${props.enfocable ? "enfocarColorBlanco" : ""}`}>
          <i className="fa fa-calendar" aria-hidden="true"></i> {moment(props.postDate).format("DD-MM-YYYY")}
        </p>
      </div>
    </div>
  );
}

export default InfoAutor;
