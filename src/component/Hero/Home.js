import React from "react";
import "./Home.css";
import HTML5 from "../pic/HTML5.png";
import CSS3 from "../pic/CSS3.png";
import js from "../pic/js.png";
import Reactjs from "../pic/Reactjs.png";
import bootstrap from "../pic/bootstrap.png";
import Handcoding from "../pic/Handcoding.svg";
import { Typewriter } from "react-simple-typewriter";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container top">
          <div className="top_hero">
            <div className="left">
              <h3>WELCOME TO MY PORTFOLIO</h3>
              <h1>
                I’m <span>Elliott Csipkes</span>
              </h1>
              <h2>
                <span>
                  <Typewriter
                    words={[
                      " Front-end Developer.",
                      " React Enthusiast.",
                      " Supersonic Legend.",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>

              <p>
                I'm a self-taught front-end developer with a passion for
                learning new technologies. Combining coding with my background
                in marketing gives me a unique perspective and distinct
                advantage in both understanding and solving user problems.
              </p>
              <a href="#portfolio">
                <button className="btn_shadow to_port_btn">
                  VIEW PORTFOLIO
                </button>
              </a>
              <a href="#resume">
                <button className="btn_shadow to_port_btn">VIEW RESUME</button>
              </a>
            </div>
            <div className="img-container">
              <img src={Handcoding} alt="" />
            </div>
          </div>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>WHERE TO FIND ME</h4>
              <div className="button">
                <a
                  href="https://github.com/elliottcsipkes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn_shadow">
                    <i>
                      <BsGithub />
                    </i>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/elliottcsipkes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn_shadow">
                    <i>
                      <BsLinkedin />
                    </i>
                  </button>
                </a>
              </div>
            </div>
            <div className="col_1">
              <h4>TECHNICAL SKILLS</h4>
              <button className="tech">
                <img src={HTML5} alt="" />
              </button>
              <button className="tech">
                <img src={CSS3} alt="" />
              </button>
              <button className="tech">
                <img src={js} alt="" />
              </button>
              <button className="tech">
                <img src={Reactjs} alt="" />
              </button>
              <button className="tech">
                <img src={bootstrap} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
