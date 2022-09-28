import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import React, { useEffect, useRef } from "react";
// import Footer from './Footer'
import data from "./Api";
import AOS from "aos";
import "aos/dist/aos.css";

let oldScrollY = 1;

const Good_At = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const checkWheel = (e) => {
    const { scrollTop } = e.currentTarget;
    const { x } = e.currentTarget.getBoundingClientRect();
    if (x === 0 && oldScrollY === 0 && scrollTop === 0) {
      e.currentTarget.style.overflowY = "scroll";
      return;
    }
    oldScrollY = scrollTop;
    if (x === 0) {
      e.stopPropagation();
      e.currentTarget.style.overflowY = "scroll";
    } else if (x > 0) {
      e.currentTarget.style.overflowY = "hidden";
    }
    if (x < 0) {
      e.stopPropagation();
      e.currentTarget.style.overflowY = "scroll";
    }
  };

  return (
    <div
      className="min-h-full flex flex-col items-center py-10 overflow-x-hidden md:h-screen text-center p-8 min-w-[100vw] w-full"
      id="projectsSec"
      onWheel={(e) => (window.innerWidth >= 768 ? checkWheel(e) : null)}
    >
      <h1 className="uppercase text-3xl sm:text-4xl font-medium text-purple-800">
        HERE'S WHAT I'M GOOD AT
      </h1>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center pb-6 py-8">
        {data.persondata.projects.map(({livelink, imageLink, Name, shortdescription}) => (
          <Tilt className="h-full">
            <a
              target="_blank"
              href={livelink}
            >
              <div className="h-full flex justify-center items-center flex-col p-6 max-w-sm  bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-100 ">
                <img
                  className="mb-2 w-[80px] h-[80px] text-gray-500 dark:text-gray-400 rounded-full"
                  src={imageLink}
                />

                <h5 className="mb-2 text-2xl tracking-tight text-purple-900 hover dark:text-white">
                  {Name}
                </h5>

                <p className="mb-3 text-base text-gray-600  dark:text-gray-400">
                  {shortdescription}
                </p>
              </div>
            </a>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Good_At;
