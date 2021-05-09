import {
  Select,
  Heading,
  FormLabel,
  Button,
  Input,
  FormControl,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  background-color: white;
  border-radius: 6px;
  padding: 1rem;

  z-index: -1;

  @media (max-width: 840px) {
    width: 100vw;
  }
`;

export const CreateCourse = ({onSubmit}) => {
  const handleSubmit = (event) => {
    onSubmit();
    event.preventDefault();
  };

  const [subject, setSubject] = useState(null);
  const [level, setLevel] = useState(null);
  const [link, setLink] = useState(null);
  const [title, setTitle] = useState(null);

  return (
    <Form onSubmit={handleSubmit}>
      <Heading mb={4}>Manage courses</Heading>
      <FormControl isRequired>
        <FormLabel>Course title</FormLabel>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title your course"
          mb={4}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Subject matter</FormLabel>
        <Select
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject of this course"
          mb={4}
        >
          <option value="math">Mathematics</option>
          <option value="cs">Computer Science</option>
          <option value="english">English</option>
          <option value="language">Foreign Language</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Level of study</FormLabel>
        <Select
          onChange={(e) => setLevel(e.target.value)}
          placeholder="The level of this course"
          mb={4}
        >
          <option value="primary">Primary School</option>
          <option value="middle">Middle School</option>
          <option value="high">High School</option>
          <option value="uni">University</option>
        </Select>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Course location</FormLabel>
        <InputGroup>
          <InputLeftAddon children="https://" />
          <Input
            onChange={(e) => setLink("https://" + e.target.value)}
            placeholder="Link to meeting (e.g. zoom)"
            mb={4}
          />
        </InputGroup>
      </FormControl>

      <Button
        rightIcon={<AddIcon />}
        colorScheme="teal"
        variant="outline"
        marginBottom={2}
        type="submit"
      >
        New Course
      </Button>
    </Form>
  );
};

export const FindCourse = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [subject, setSubject] = useState(null);
  const [level, setLevel] = useState(null);
  return (
    <Form onSubmit={handleSubmit}>
      <Heading mb={4}>Let's find the perfect course for you</Heading>
      <FormLabel>Subject matter</FormLabel>
      <Select
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Pick a subject"
        mb={4}
      >
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
      <Select
        onChange={(e) => setLevel(e.target.value)}
        placeholder="What level are you looking to learn?"
        mb={4}
      >
        <option value="primary">Primary School</option>
        <option value="middle">Middle School</option>
        <option value="high">High School</option>
        <option value="uni">University</option>
      </Select>
      <Button onClick={handleSubmit}>Find Classes</Button>
    </Form>
  );
};
