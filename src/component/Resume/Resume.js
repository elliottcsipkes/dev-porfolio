import React from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-left">
            <h4>EDUCATION AND JOB EXPERIENCE</h4>
            <h1>Resume</h1>
            <a href="/files/ElliottCsipkesResume.pdf" download>
              <button className="download">PDF DOWNLOAD</button>
            </a>
          </div>

          <div className="content-section d_flex">
            <div className="left">
              <div className="heading">
                <h2 className="gray">Education</h2>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        awards1={val.awards1}
                        awards2={val.awards2}
                        gpa={val.gpa}
                      />
                    );
                  } else {
                    return;
                  }
                })}

                {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
              </div>
            </div>
            <div className="right">
              <div className="heading">
                <h2 className="gray">Recent Experience</h2>
              </div>

              <div className="content">
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        desc1={val.desc1}
                        desc2={val.desc2}
                        desc3={val.desc3}
                      />
                    );
                  } else {
                    return;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
