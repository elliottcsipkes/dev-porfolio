import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="box exp btn_shadow">
        <div className="title_content d_flex">
          <div className="title">
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
        </div>
        <hr />
        <p className="gpa">{props.gpa ? `GPA: ${props.gpa}` : null}</p>
        <p className="gray">{props.awards1}</p>
        <p className="gray">{props.awards2}</p>
        <p className="job">{props.desc1}</p>
        <p className="job">{props.desc2}</p>
        <p className="job">{props.desc3}</p>
      </div>
    </>
  );
};

export default Card;
