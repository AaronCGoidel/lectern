import { Container, Controls, Courses } from "./styles";
import {
  Select,
  Heading,
  FormLabel,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import CourseCard from "../../components/CourseCard";

const FindClass = () => {
  return (
    <Container>
      <Controls>
        <Heading mb={4}>Let's find the perfect course for you</Heading>
        <FormLabel>Subject matter</FormLabel>
        <Select placeholder="Pick a subject" mb={4}>
          <option value="math">Mathematics</option>
          <option value="cs">Computer Science</option>
          <option value="english">English</option>
          <option value="language">Foreign Language</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="other">Other</option>
        </Select>
        <FormLabel>Level of study</FormLabel>
        <Select placeholder="What level are you looking to learn?" mb={4}>
          <option value="primary">Primary School</option>
          <option value="middle">Middle School</option>
          <option value="high">High School</option>
          <option value="uni">University</option>
        </Select>
        <Button>Find Classes</Button>
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
