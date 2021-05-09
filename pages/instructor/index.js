import Head from "next/head";
import { Container, Controls, Courses } from "./styles";
import { CreateCourse } from "../../components/CourseForm";
import CourseCard from "../../components/CourseCard";
import { SimpleGrid, Spinner, useRadio } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/userContext";
import { useRouter } from "next/router";

const MyCourses = () => {
  const [ready, setReady] = useState(false);
  const { user } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (!user.uid) {
      router.push("/login");
    }
    setReady(true);
  }, []);

  return (
    <>
    <Head>
        <title>Manage Courses | Lectern</title>
        <meta
          name="description"
          content="Find an instructor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container>
      <Controls>
        <CreateCourse onSubmit={() => console.log("foo")} />
      </Controls>
      <Courses>
        {ready ? (
          <SimpleGrid spacing={4} minChildWidth="250px">
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              small
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
          </SimpleGrid>
        ) : (
          <Spinner size="xl" />
        )}
      </Courses>
    </Container>
    </>
  );
};

export default MyCourses;
