import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { db } from "../../components/firebase";
import axios from "axios";
import { useStopwatch } from 'react-timer-hook';


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
  const [ipr, setIpr] = useState(false);
  const { course_id } = router.query;

  useEffect(() => {
    axios
      .post("/api/sendMail", {
        recipient_id: props.instructor.uid,
        to: props.instructor.email,
        class: props.title,
        meet_link: props.link,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <Container>
      <Box boxShadow="md" p={10} rounded="md" backgroundColor={"white"}>
        <Heading mb={2}>{props.title || "Class"}</Heading>
        <Text color={"gray.800"} mb={10}>
          Taught by {props.instructor?.name}
        </Text>

        <Heading as="h2" size="lg" mb={4}>
          Important info
        </Heading>
        <Heading as="h4" size="md">
          Instructor email{" "}
        </Heading>
        <Text mb={4} color={"purple"}>
          {props.instructor?.email || "support@lectern.tech"}
        </Text>

        <Heading as="h4" size="md">
          Conference link:{" "}
        </Heading>
        <Text
          target="_blank"
          as="a"
          href={props.link || "https://lectern.tech"}
          color={"purple"}
        >
          {props.link || "https://lectern.tech"}
        </Text>
        <br />
        
        <Heading mt={10}><span>{hours}</span>hr <span>{minutes}</span>min <span>{seconds}</span>sec</Heading>
        {!ipr ? (
          <Button onClick={()=>{setIpr(true); start()}} marginTop={3} color={"green.400"}>
            Start Session
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIpr(false);
              pause();
            }}
            marginTop={3}
            color={"red.400"}
          >
            End Session
          </Button>
        )}
      </Box>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.course_id;

  let doc = await db.collection("courses").doc(slug).get();
  let course_data = doc.data();

  return {
    props: {
      ...course_data,
    },
  };
};

export default Course;
