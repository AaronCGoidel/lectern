import { useRouter } from "next/router";
import { useEffect } from "react";
import { Box, Button, Heading, Spacer, Text } from "@chakra-ui/react"
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/backgrounds/bg1.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
`;

const Course = (props) => {
  const router = useRouter();
  const { course_id } = router.query;

  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <Box boxShadow="md" p={10} rounded="md" backgroundColor={"white"} > 
        <Heading mb={2}>{props.title || "Class"}</Heading>
        <Text color={"gray.800"} mb={10}>Taught by {props.instructor?.name}</Text>
    
        <Heading as="h2" size="lg" mb={4}>Important info</Heading>
        <Heading as="h4" size="md">Instructor email </Heading><Text mb={4} color={"purple"}>{props.instructor?.email || "support@lectern.tech"}</Text>

        <Heading as="h4" size="md">Conference link: </Heading><Text as="a" href={props.link || "https://lectern.tech"} color={"purple"}>{props.link || "https://lectern.tech"}</Text>
        <br/>
        <Button marginTop={10} color={"green.400"}>Start Session</Button>
      </Box>
    </Container>
  );
};

export default Course;
