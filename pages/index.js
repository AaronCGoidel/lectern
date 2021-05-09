import Head from "next/head";
import ForStudents from "../components/ForStudents";
import Hero from "../components/Hero";
import TechStack from "../components/Stack";
import ForTeachers from "../components/ForTeachers"



const Landing = () => {
  return (
    <>
      <Head>
        <title>Lectern - Global Education</title>
        <meta
          name="description"
          content="Sign up for Lectern and learn online, your way"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
              
      <TechStack />
      <ForStudents />
      <ForTeachers />
    </>
  );
};

export default Landing;
