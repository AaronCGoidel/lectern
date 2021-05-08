import { Container, Controls, Courses } from "./styles";
import {CreateCourse} from "../../components/CourseForm"
import CourseCard from "../../components/CourseCard";
import {SimpleGrid} from "@chakra-ui/react"

const MyCourses = () => {
  return (
    <Container>
      <Controls>
        <CreateCourse onSubmit={()=>console.log("foo")}/>
      </Controls>
      <Courses>
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
      </Courses>
    </Container>
  );
};

export default MyCourses;
