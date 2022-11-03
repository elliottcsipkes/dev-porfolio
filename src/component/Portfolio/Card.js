import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow " onClick={toggleModal}>
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <div>
                <span>{props.category}</span>
                <h1>{props.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate distinctio assumenda explicabo veniam temporibus
                  eligendi.
                </p>
                <p>
                  Consectetur adipisicing elit. Cupiditate distinctio assumenda.
                  dolorum alias suscipit rerum maiores aliquam earum odit, nihil
                  culpa quas iusto hic minus!
                </p>
              </div>
              <div className="button f_flex modal-btn">
                <a href={props.github} target="_blank">
                  <button className="btn_shadow">GITHUB REPO</button>
                </a>
                <a href={props.demo} target="_blank">
                  <button className="btn_shadow">
                    PROJECT DEMO <IoMdArrowRoundForward />
                  </button>
                </a>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
