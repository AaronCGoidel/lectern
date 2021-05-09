import { auth, db } from "../../components/firebase.js";
import {
  Heading,
  FormLabel,
  Button,
  Input,
  FormControl,
  HStack,
  Divider,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Container } from "./styles";
import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/userContext";
import { useRouter } from "next/router";




const Form = styled.form`
  background-color: white;
  width: 60vw;
  justify-self: center;
`;

async function authenticateUser(email, password) {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    alert(err.message);
  }
}

export const LogIn = ({ onSubmit }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const router = useRouter();

  const doRedirect = (type) => {
    if (type === "student") {
      router.push("courses");
    } else {
      router.push("instructor");
    }
  };

  const handleSubmit = async (event, mutate) => {
    event.preventDefault();
    let authed = await authenticateUser(email, password);

    var userRef = db.collection("users").doc(authed.user.uid);

    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const { type, name, email, courses } = doc.data();
          mutate.setType(type);
          mutate.setName(name);
          mutate.setEmail(email);
          mutate.setCourses(courses || []);
          mutate.setUid(authed.user.uid);
          doRedirect(type);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  return (
    <LoginContext.Consumer>
      {({ user, mutate }) => (
        <Container>
          <Box boxShadow="md" p={10} rounded="md" backgroundColor={"white"}>
          <Stack spacing={4}>
            <Form onSubmit={(e) => handleSubmit(e, mutate)}>
              <Heading mb={4}>Log In</Heading>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  mb={4}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  pr="4.5rem"
                  type="password"
                  placeholder="Enter password"
                />
              </FormControl>

              <Button
                colorScheme="cyan"
                variant={"outline"}
                marginBottom={2}
                type="submit"
                onClick={() => authenticateUser(email, password)}
              >
                Get Learning!
              </Button>
            </Form>
            <Divider />
            <Button
              colorScheme="purple"
              variant="outline"
              marginBottom={2}
              onClick={() => router.push("signup")}
            >
              Sign Up!
            </Button>
          </Stack>
          </Box>
        </Container>
      )}
    </LoginContext.Consumer>
  );
};
export default LogIn;
