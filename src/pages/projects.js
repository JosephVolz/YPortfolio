import AnimatedText from "@/components/AnimatedText";
import {GithubIcon} from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const projectsData = [
  {
    name: "Shop Monkey | Auto Shop Management Software",
    description: `The all-in-one shop management software.
    Say goodbye to clunky shop management software and the chaos of paper and pen. Work faster and smarter with an all-in-one, cloud-based solution designed to help you grow your business.`,
    image:
      "https://res.cloudinary.com/ductsojqo/image/upload/niag3fzhiuxbumei236d",
    url: "https://www.shopmonkey.io",
    category: ["Typescript", "Node", "React", "MongoDB"],
  },
  {
    name: "Hitask | Easy Project and Task Management for Teams",
    description: `Hitask is a unique project and task manager for teams. It helps to focus on team collaboration, getting tasks done and manage an entire project.`,
    image:
      "https://res.cloudinary.com/ductsojqo/image/upload/d7dpaie4hefm1pickip2",
    url: "https://www.hitask.com",
    category: ["Typescript", "Next", "Supabase", "Stripe"],
  },
  {
    name: "Neolth | Mental Health Support for Students",
    description: `Neolth provides stress and mental health support to students by delivering on-demand, personalized care via our self-guided platform.`,
    image:
      "https://res.cloudinary.com/ductsojqo/image/upload/gpmlrddhfmnrxzh9sfng",
    url: "https://www.neolth.com",
    category: ["Python", "OpenAI", "Django", "React", "WebSockets"],
  },
  {
    name: "Beyrep | Match with a Pro + Manage Your Home Improvement",
    description: `BEYREP is your 'matchmaker' for home improvements. We match you with compatible pros that you can trust with your project. Build or renovate your dream home.`,
    image:
      "https://res.cloudinary.com/ductsojqo/image/upload/udstyglowqivpzhmtqhw",
    url: "https://www.beyrep.com",
    category: ["Typescript", "Nest", "Angular", "Antd"],
  },
  {
    name: "Minute7: Online Time and Expense Tracking",
    description: `Minute7 is a QuickBooks-certified Time Tracking and Expense Reporting solution for just $8 per month, offering a free 30 day no-risk trial.`,
    image:
      "https://res.cloudinary.com/ductsojqo/image/upload/gdape2vpxfrumvyiqlnf",
    url: "https://www.minute7.com",
    category: ["Typescript", "Laravel", "Vue", "MySQL"],
  },
];

const FramerImage = motion(Image);

const FeaturedProject = ({type = [], title, description, image, link}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark
    bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
      dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          width={1000}
          height={1000}
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl capitalize dark:text-primaryDark xs:text-base">
          {type.toString().split(",").join(", ")}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medius text-dark dark:text-light sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
};

const Project = ({type, title, description, image, link}) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
    bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.1rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          width={1000}
          height={1000}
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl capitalize dark:text-primaryDark lg:text-lg md:text-base">
          {type.toString().split(",").join(", ")}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medius text-dark dark:text-light sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Youming Liu | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with  expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={projectsData[0].name}
                description={projectsData[0].description}
                link={projectsData[0].url}
                type={[projectsData[0].category]}
                image={projectsData[0].image}
              />
            </div>
            {projectsData.slice(1).map((item) => (
              <div className="col-span-6 sm:col-span-12">
                <Project
                  title={item.name}
                  description={item.description}
                  link={item.url}
                  type={[item.category]}
                  image={item.image}
                />
              </div>
            ))}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[4].name}
                link={projectsData[4].deployed_url}
                github={projectsData[4].github_url}
                type={[projectsData[4].category]}
                image={projectsData[4].image}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[2].name}
                link={projectsData[2].deployed_url}
                github={projectsData[2].github_url}
                type={[projectsData[2].category]}
                image={projectsData[2].image}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={projectsData[1].name}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={projectsData[1].deployed_url}
                github={projectsData[1].github_url}
                type={[projectsData[1].category]}
                image={projectsData[1].image}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[3].name}
                link={projectsData[3].deployed_url}
                github={projectsData[3].github_url}
                type={[projectsData[3].category]}
                image={projectsData[3].image}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[6].name}
                link={projectsData[6].deployed_url}
                github={projectsData[6].github_url}
                type={[projectsData[6].category]}
                image={projectsData[6].image}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
