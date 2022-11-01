import React from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <a href="#home">
          <button className="download">
            <span>
              <IoMdArrowRoundUp />
            </span>
            BACK TO TOP
          </button>
        </a>
        <div className="conatiner text-center top">
          <p>© 2022 by Elliott Csipkes. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
