import React from "react";
import data from "./Api";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import "../App.css";

const Main = () => {
  const eyeball = (event) => {
    const eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = "rotate(" + rotation + "deg)";
    });
  };
  const { aboutus, resumeLink } = data.persondata;

  return (
    <div
      className="py-20 sm:py-0 min-w-full flex justify-center bg-gradient-to-r from-purple-800 to-purple-900 text-white font-mono p-8 min-h-screen"
      onMouseMove={(e) => {
        eyeball(e);
      }}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <div className=" gap-5 flex justify-center items-center rounded-full ">
          <div className="eye-container eye relative w-[120px] h-[120px] block rounded-full bg-white"></div>
          <div className="eye-container eye relative w-[120px] h-[120px] block rounded-full bg-white"></div>
        </div>
        <div className="text-center">
          <h2 className="mb-3 text-3xl md:text-4xl hover:text-gray-900">
            Hello I'm <br />{" "}
            <span className="font-bold">{aboutus[0].Name}</span>
          </h2>
          <div className="mb-4 uppercase flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <span className="text-lg">let's connect</span>
            <span className="hidden sm:block font-bold text-4xl text-yellow-500">
              >
            </span>
            <div className="flex space-x-6 sm:justify-center sm:mt-0 text-center">
              <a target="_blank" href={aboutus[0].Personallinks[0]}>
                <Icon icon="logos:google-gmail" color="red" />
              </a>
              <a target="_blank" href={aboutus[0].Personallinks[1]}>
                <Icon icon="logos:linkedin-icon" />
              </a>

              <a target="_blank"
                href={aboutus[0].Personallinks[2]}
                className="hover:text-gray-900 dark:hover:text-white"
              >
                <Icon icon="logos:github-icon" color="red" />

                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
          <motion.button className="hover:border-yellow-500 text-black bg-gray-200  rounded-full hover:bg-purple-400 hover:font-bold hover:shadow-xl px-12 py-2 mt-2">
            <a target="_blank" href={resumeLink} download>
              Download Resume
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Main;
