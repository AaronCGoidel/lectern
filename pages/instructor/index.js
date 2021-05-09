import { Container, Controls, Courses } from "./styles";
import { CreateCourse } from "../../components/CourseForm";
import CourseCard from "../../components/CourseCard";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MyCourses = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
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
  );
};

export default MyCourses;
