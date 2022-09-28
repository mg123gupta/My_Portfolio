import React, { useEffect } from "react";
import data from "./Api";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    // AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="md:h-[100vh] w-full flex-col sm:flex-row flex justify-center items-center  bg-slate-300 py-10 relative">
      <motion.div
        initial={{ scale: 0.5 }}
        // animate={{ scale: 1 }}
        transition={{ delay: 0 }}
        whileInView={{ scale: 1 }}
        onViewportLeave={{ scale: 0.5  }}
        className="flex gap-10 flex-col sm:flex-row px-6 sm:px-10 w-[100vw]"
      >
        <div className="sm:w-[60%] flex gap-5 flex-col justify-center sm:justify-start items-center sm:items-start text-center sm:text-left">
          <h1 className=" uppercase text-5xl text-purple-800 font-bold font-mono">
            who am i?
          </h1>
          <h2 className=" capitalize text-3xl">
            i'm {data ? data.persondata.aboutus[0].Name : null}, a Front end
            developer
          </h2>
          <p className=" text-gray-800 text-lg ">
            {data ? data.persondata.aboutus[0].heading : null}
          </p>
          <p className=" text-gray-600 text-lg">
            {data ? data.persondata.aboutus[0].description : null}
          </p>
          <h3 className="uppercase text-gray-500 text-2xl">connect with me</h3>
          <span className=" text-gray-700">guptamohini251@gmail</span>
          <div className="flex mt-1 space-x-6 sm:justify-center sm:mt-0 text-center">
            <a target="_blank" href={data ? data.persondata.aboutus[0].Personallinks[0] : null}>
              <Icon icon="logos:google-gmail" color="red" />
            </a>
            <a target="_blank" href={data ? data.persondata.aboutus[0].Personallinks[1] : null}>
              <Icon icon="logos:linkedin-icon" />
            </a>

            <a target="_blank"
              href={data ? data.persondata.aboutus[0].Personallinks[2] : null}
              className="hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon="logos:github-icon" color="red" />

              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>

        <div className="sm:w-[40%] flex flex-col gap-3 ">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[0] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[100%] transition-transform duration-150"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[1] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[90%]"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[2] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[85%]"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[3] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[80%]"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[4] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[80%]"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[5] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[80%]"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xl font-medium  dark:text-white">
              {data ? data.persondata.skill[0].name[6] : null}
            </span>
            
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-purple-800 h-2.5 rounded-full w-[70%]"></div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default About;
