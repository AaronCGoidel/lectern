import {
    Select,
    Heading,
    FormLabel,
    Button,
    Input
  } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";


export const CreateCourse = () => {
  return (
    <>
      <Heading mb={4}>Manage courses</Heading>
      <FormLabel>Course title</FormLabel>
      <Input placeholder="Title your course" mb={4}/>

      <FormLabel>Subject matter</FormLabel>
      <Select placeholder="Subject of this course" mb={4}>
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
      <Select placeholder="The level of this course" mb={4}>
        <option value="primary">Primary School</option>
        <option value="middle">Middle School</option>
        <option value="high">High School</option>
        <option value="uni">University</option>
      </Select>

      <Button
        rightIcon={<AddIcon />}
        colorScheme="teal"
        variant="outline"
        marginBottom={2}
      >
        New Course
      </Button>
    </>
  );
};

export const FindCourse = () => {
  return (
    <>
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
    </>
  );
};
