import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { LiIcons } from "./LiIcons";

const experienceData = [
  {
    postion: "Senior Full Stack Developer",
    company: "Toptal",
    time: "Jun 2024-Present",
    address: "Ellenton, FL",
    companyLink: "https://www.toptal.com",
    work: [
      "Designed and developed a cross-browser extension with a sophisticated dashboard leveraging Plasmo, T3-stack, and PostgreSQL.",
      "Utilized Shadcn UI for intuitive UI design, Prisma for ORM, tRPC for seamless backend communication, and TurboRepo for efficient management of microservices within a monorepo architecture.",
      "Championed the use of Jest, Vitest, and Cypress for rigorous unit and end-to-end testing, ensuring high-quality code and reliable software delivery.",
    ],
  },
  {
    postion: "Senior Full Stack Developer",
    company: "Fortunes Tech",
    time: "Jan 2024 - July 2024",
    address: "Goffstown, NH",
    companyLink: "https://fortunes.tech",
    work: [
      "Led a team of 7 members while performing code review, scrum planning, writing technical documentation for newcomers and managing the tickets on the board.",
      "Provide the full-stack development services utilizing the Typescript, React.js, MUI, NestJS, PostgreSQL, GraphQL, Docker, AWS and TerraForm.",
      "Led the UI refactoring process utilizing Material-UI, TailwindCSS and Storybook.",
      "Led the seamless migration from an Express backend with REST API to Nest.js with GraphQL, leveraging my advanced expertise to enhance performance, scalability, and maintainability of the application architecture.",
      "Successfully orchestrated the transition from MongoDB to PostgreSQL, demonstrating advanced proficiency in database management and effectively optimizing the application's data storage and retrieval capabilities.",
      "Designed and built robust Nest backend systems by following the Serverless Architecture based on AWS Services like AWS RDS, Lambda, API Gateway, S3, SQS, SNS, Elastic Beanstalk, CloudFormation, CloudFront.",
      "Led Mobile Development including Android and iOS using React Native and Expo from scratch with engineering team.",
    ],
  },
  {
    postion: "Senior Full Stack Developer",
    company: "Emergent Software",
    time: "Oct 2020 - Dec 2023",
    address: "Reston, VA",
    companyLink: "http://www.emergentsoftware.net",
    work: [
      "Assisted over 10 startup companies and projects with extensive knowledge of Blockchain like Ethereum network.",
      "Developed smart contracts for over 20 blockchain-related applications like Defi, NFT, P2E games and Metaverse projects.",
      "Created bot systems for blockchain transaction automation, including trading bots, arbitrage, and liquidations.",
      "Created API and WebSockets endpoints for live data feeds and direct connection to the front end.",
      "Developed pixel-perfect, user-friendly Web3 front end applications utilizing React, Next, Vue and Angular.js based on Figma UI/UX design and integrated with various Solidity smart contracts using web3.js and ethers.js.",
      "Optimized gas costs for a complex multi-layer smart contract replacing solidity code with in-line assembly.",
      "Helped create an upgradable contract system through a proxy contract system.",
      "Oversaw and led the development of a decentralized and distributed team across four different time zones to build a full-stack application.",
    ],
  },
  {
    postion: "Full Stack Developer",
    company: "JOOR",
    time: "Jan 2018 - Sep 2020",
    address: "New York, NY",
    companyLink: "https://www.joor.com",
    work: [
      "Designed and developed backend RESTful APIs with a diverse tech stack, including Node.js, Express, NestJS, PHP, Laravel, Python(Django, Flask), and databases like MongoDB, PostgreSQL, MySQL, and Redis, leveraging AWS and Firebase for scalable cloud solutions.",
      "Translated Figma, Adobe XD designs to pixel-perfect and fully responsive design using JavaScript, TypeScript and its libraries ReactJS, NextJS, Remix, Vue, Angular, HTML, CSS, SCSS, and LESS.",
      "Migrated a healthcare web application from the LAMP stack application to a modern MERN stack app.",
      "Implemented real-time communication functionalities using Web Socket and React-query.",
      "Implemented Stripe API integration with payment flow, trial periods, monthly and yearly subscriptions, and withdrawals.",
      "Created automated testing framework in Jest, Mocha + Chai + Simon for unit testing and e2e UI testing.",
      "Implemented CI/CD pipelines using GitLab Actions in each step of the development cycle which improved integration and delivery towards agile development methodologies.",
    ],
  },
  {
    postion: "Software Engineer",
    company: "Stride",
    time: "Jun 2016 - Dec 2017",
    address: "New York, NY",
    companyLink: "https://www.stride.build",
    work: [
      "Architected and developed robust, cross-browser-compatible health care front-end using JavaScript, TypeScript, React, and Next.js.",
      "Engineered scalable Rest APIs with Express.js, ensuring high performance and reliability.",
      "Implemented advanced state management and UI styling utilizing Redux, redux-saga, and TailwindCSS.",
      "Designed and optimized database operations with PostgreSQL, and enforced high code quality standards using Jest for comprehensive testing.",
      "Spearheaded the acceleration of code delivery by introducing a Continuous Integration (CI) and Continuous Delivery (CD) pipeline, dramatically improving deployment efficiency.",
      "Established and maintained scalable project infrastructures on Google Cloud Platform, ensuring optimal performance and scalability.",
      "Ensured project stability and reduced defects by rigorously applying TypeScript and implementing automated testing strategies with industry standard testing frameworks.",
    ],
  },
  {
    postion: "Web Developer",
    company: "AgileEngine",
    time: "May 2015 - May 2016",
    address: "Boca Raton, FL",
    companyLink: "https://agileengine.com",
    work: [
      "Engineered and deployed robust websites leveraging PHP MVC frameworks such as Laravel and CodeIgniter to ensure maintainable and scalable architecture.",
      "Led the planning and execution of website development, transforming design mockups into fully functional, responsive web interfaces using Angular, HTML5, CSS, JavaScript, AJAX, and JSON.",
      "Implemented critical security maintenance and patching protocols on website interfaces, ensuring post-launch viability and protecting against vulnerabilities.",
      "Developed custom modules and libraries that are highly customizable and easily reusable, enhancing development efficiency and consistency.",
      "Designed and transitioned legacy websites into modern, mobile-friendly platforms, utilizing responsive design techniques to create seamless user experiences across devices.",
    ],
  },
];

const Details = ({ postion, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first: mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
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
  const { scrollYProgress } = useScroll({
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
          style={{ scaleY: scrollYProgress }}
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
