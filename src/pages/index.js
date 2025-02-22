import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Youming Liu | Portfolio</title>
        <meta
          name="description"
          content="Explore Youming's Next.js developer portfolio and  discover the latest webapp projects and software engineering articles.  Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Youming"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Youming Liu"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Youming has over 9 years of experience in ranging from{" "}
                <b>Web</b> and
                <b> Mobile</b> development to{" "}
                <b>Optimization Problems, Machine Learning </b>
                and <b>Data Science</b> with a strong focus on <b>Full-Stack</b>{" "}
                web applications. He specializes in{" "}
                <b>Python, Typescript, Django, Node.js, Express, Nest</b> and
                <b> React, React Native, Vue, Angular</b> with expertise
                deploying to both server and serverless environments on{" "}
                <b> AWS, GCP </b>
                and <b>Azure</b>. He also works with relational databases and
                large datasets. Youming is the type of developer who can quickly
                comprehend business requirements and turn them into valuable
                software.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/YoumingLiuResume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1 "} />
                </Link>
                <Link
                  href="mailto:youmingliu39@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="AncoorBanerjee"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
