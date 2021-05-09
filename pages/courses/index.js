import Head from "next/head";
import { Container, Controls, Courses } from "./styles";
import {
  Select,
  Heading,
  FormLabel,
  Button,
  SimpleGrid,
  Spinner
} from "@chakra-ui/react";
import { FindCourse } from "../../components/CourseForm";
import CourseCard from "../../components/CourseCard";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/userContext";
import { useRouter } from "next/router";

const FindClass = () => {
  const [ready, setReady] = useState(false);
  const user = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    console.log(user)
    if (!user.uid) {
      router.push("/login");
    }
    setReady(true);
  }, []);

  return (
    <>
    <Head>
        <title>Courses | Lectern</title>
        <meta
          name="description"
          content="Find an instructor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Container>
      <Controls>
        <FindCourse />
      </Controls>
      <Courses>
        {ready ? (
          <SimpleGrid spacing={4} minChildWidth="250px">
            <CourseCard
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
              instructor={"Ethan Lam"}
              tags={["mathematics", "advanced"]}
              img={"/images/HeroImg.png"}
              title={"foo bar hhhhhhhhhhiuhiuhiuhuidhaosiuhdoaisuhdioahsu"}
              rating={4}
              revCount={10}
            />
            <CourseCard
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

export default FindClass;
