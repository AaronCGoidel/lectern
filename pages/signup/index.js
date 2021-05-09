import { auth, db } from "../../components/firebase.js";
import {
  Heading,
  FormLabel,
  Button,
  Input,
  FormControl,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Container } from "./styles";
import styled from "styled-components";
import { useState, useContext } from "react";
import { LoginContext } from "../../contexts/userContext.js";
import { useRouter } from 'next/router'


const Form = styled.form`
  background-color: white;
  width: 60vw;
  justify-self: center;
`;

async function authenticateUser(
  event,
  enteredEmail,
  enteredPassword,
  enteredName,
  enteredType
) {
  try {
    const user = await auth.createUserWithEmailAndPassword(
      enteredEmail,
      enteredPassword
    );

    return user;
  } catch (err) {
    console.error(err.message);
  }
}

export const SignUpPage = ({ onSubmit }) => {
  const [password, setPassword] = useState(null);
  const router = useRouter()

  const doRedirect = (type) => {
    if(type === "student") {
      router.push("courses")
    }else{
      router.push("instructor")
    }
  }

  const handleSubmit = async (event, user, mutate) => {
    authenticateUser(event, user.email, password, user.name, user.type)
      .then((authed) => {
        
        db.collection("users")
          .doc(authed.user.uid)
          .set({
            name: user.name,
            email: user.email,
            type: user.type,
          })
          .then(() => {
            console.log("Document successfully written!");
            mutate.setUid(authed.user.uid);
            doRedirect(user.type);
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

      })
      .catch((err) => {
        console.warn(err);
      });

    event.preventDefault();
  };

  return (
    <LoginContext.Consumer>
      {({ user, mutate }) => (
        <Container>
          <Box boxShadow="md" p={10} rounded="md" backgroundColor={"white"}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e, user, mutate);
            }}
          >
            <Heading mb={4}>Sign Up</Heading>

            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                onChange={(e) => {
                  mutate.setName(e.target.value);
                }}
                placeholder="Enter Full Name"
                mb={4}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => mutate.setEmail(e.target.value)}
                placeholder="Enter email"
                mb={4}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                pr="4.5rem"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                mb={4}
              />
            </FormControl>
            <Stack>
              <Button
                colorScheme="teal"
                variant="outline"
                marginBottom={2}
                onClick={(e) => {
                  mutate.setType("student");
                }}
                type="submit"
              >
                Sign Up As a Student!
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                marginBottom={2}
                onClick={(e) => {
                  mutate.setType("instructor");
                }}
                type="submit"
              >
                Sign Up As Tutor!
              </Button>
            </Stack>
          </Form>
          </Box>
        </Container>
      )}
    </LoginContext.Consumer>
  );
};
export default SignUpPage;
