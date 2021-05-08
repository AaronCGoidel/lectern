import { Container, Controls, Courses } from "./styles";
import {
  Select,
  Heading,
  FormLabel,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import {FindCourse} from "../../components/CourseForm"
import CourseCard from "../../components/CourseCard";

const FindClass = () => {
  return (
    <Container>
      <Controls>
        <FindCourse/>
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

export default FindClass;
