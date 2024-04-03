import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion";
import {LiIcons} from "./LiIcons";

const experienceData = [
  {
    postion: "Team Lead",
    company: "Xpanse",
    time: "Apr 2020-Present",
    address: "Bellevue, WA",
    companyLink: "https://www.xpanse.com/",
    work: [
      "Led a team of 7 members while performing code reviews, scrum planning, writing technical documentation for newcomers and managing the tickets on the board.",
      "Designed and built robust REST APIs with Python-Django Back-end systems by following the Serverless Architecture based on Amazon Web Services Lambda, S3, API Gateway and SQS.",
      "Developed pixel perfect web and mobile frontend of LMS which processes data visualization and model using TypeScript, React, Apollo, GraphQL, Node.js, Ruby on Rails, Postgres and Material UI.",
      "Spearheaded the transition of social web application from the old Angular application to a new React/Next.js app.",
      "Implemented microservices architecture to upgrade efficiency of CRM system by 40%.",
      "Led marketplace Android and iOS applications using React Native from scratch with develop team.",
      "Mentored junior team members through pair programming to boost the team performance.",
    ],
  },
  {
    postion: "Senior Full Stack Developer",
    company: "Toptal",
    time: "May 2016 - Apr 2020",
    address: "Miami, FL",
    work: [
      "Developed and maintained web applications for internal teams built with Python, PHP, React.js, NextJS and Typescript, NodeJS, Golang, NestJS.",
      "Developed the Front-end for a PaaS solution that connects clients with insurance providers using ReactJS and Redux.",
      "Developed serverless web applications with AWS Services like AWS Lambda, DynamoDB, S3, SNS, EC2, and so on.",
      "Led development of complex key features and moved repositories to the Nx Monorepo.",
      "Participated in Mobile Development and created Android version of existing iOS app.",
      "Created the Desktop App for browsing AWS S3 files using Electron.",
      "Promoted experience with Kubernetes, Docker, Firebase and TDD environment.",
    ],
  },
  {
    postion: "Full Stack Developer",
    company: "AIS",
    time: "Aug 2013 - May 2016",
    address: "Reston, VA",
    companyLink: "https://www.ais.com/",
    work: [
      "Designed and developed Back-end RESTful APIs using Node.JS, Express, Nest.js, PHP, Laravel, Python, Django, Flask, MongoDB, PostgreSQL, MySQL, Redis, AWS and Firebase.",
      "Translated Figma, Adobe XD designs to pixel-perfect and fully responsive design using JavaScript, TypeScript and its libraries React, Vue, Angular and HTML, CSS, SCSS and LESS.",
      "Migrated a healthcare web application from the LAMP stack application to a modern MERN stack app.",
      "Implemented real-time communication functionalities using Web Socket technology.",
      "Implemented Stripe API integration with payment flow, trial periods, monthly and yearly subscriptions, and withdrawals.",
      "Created automated testing framework in Jest, Mocha + Chai + Simon for unit testing and e2e UI testing.",
      "Implemented CI/CD pipelines in each step of the development cycle which improved integration and delivery towards agile methodologies.",
    ],
  },
  {
    postion: "Web Developer",
    company: "Dexian",
    time: "Apr 2012 - Aug 2013",
    address: "Reston, VA",
    companyLink: "https://www.ais.com/",
    work: [
      "Transformed design mock-ups into HTML5/CSS3 layouts and created Responsive Web libraries by utilizing the main styling tools and stuffs in agile development team.",
      "Supported and improved the UI of internal tools to manage the backend of a big Scandinavian telecommunication provider using JavaScript, Angular, and React.",
      "Participated in development of Ecommerce and CRM systems with Drupal, WordPress and OOP, MVC structure, Laravel, SQL, Git and followed Pixel Perfect design and implementation.",
      "Cooperated with the UI/UX department to create a new look and feel for the website, implemented changes with jQuery library extensions, Ajax & CSS.",
    ],
  },
];

const Details = ({postion, company, companyLink, time, address, work}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first: mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {postion}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul>
          {work.map((item) => (
            <li className="font-medium w-full md:text-sm">{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-16 md:mt-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-full mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          ref={ref}
          style={{scaleY: scrollYProgress}}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experienceData.map((companyData, index) => {
            return (
              <Details
                key={companyData.company + "-" + index}
                postion={companyData.postion}
                company={companyData.company}
                companyLink={companyData.companyLink}
                time={companyData.time}
                address={companyData.address}
                work={companyData.work}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
