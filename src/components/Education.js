import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion";
import {LiIcons} from "./LiIcons";

const educationData = [
  {
    type: "Master of Science in Computer Science",
    time: "Feb 2014 - Apr 2015",
    place: "University of Pittsburgh",
    info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and development in Python and AI",
  },
  {
    type: "Bachelor of Science in Computer Science",
    time: "Apr 2007 - March 2011",
    place: "Sun Yat-sen University",
    info: "Relevant courses included Programming Languages including C#, Python, Typescript",
  },
];

const Details = ({type, time, place, info}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first: mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:mt-32 md:mb-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          ref={ref}
          style={{scaleY: scrollYProgress}}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educationData.map((singleData, index) => {
            return (
              <Details
                key={singleData.place + "-" + index}
                type={singleData.type}
                time={singleData.time}
                place={singleData.place}
                info={singleData.info}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
