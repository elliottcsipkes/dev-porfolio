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
        <p className="gpa">{props.gpa}</p>
        <p className="gray">{props.desc}</p>
      </div>
    </>
  );
};

export default Card;
