import {auth} from "../../components/firebase.js";
import {
  Heading,
  FormLabel,
  Button,
  Input,
  FormControl,
  Stack
} from "@chakra-ui/react";
import {
  Container,
} from "./styles";
import styled from "styled-components";
import { useState } from "react";

const Form = styled.form`
  background-color: white;
  width: 60vw;
  justify-self: center;
`;

async function authenticateUser(email, password) {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
  } catch (err) {
    alert(err.message);
  }
}

export const SignUpPage = ({onSubmit}) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (event) => {
    authenticateUser(email, password);
    event.preventDefault();
  };

  return (
      <Container>
        <Form onSubmit={handleSubmit}>
        <Heading mb={4}>Sign Up</Heading>

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
                pr="4.5rem"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormControl>
        <Stack>          
          <Button
              colorScheme="teal"
              variant="outline"
              marginBottom={2}
              type="submit"
              onClick={() => authenticateUser(email, password)}
              >
              Sign Up As a Student!
          </Button>
          <Button
              colorScheme="teal"
              variant="outline"
              marginBottom={2}
              type="submit"
              onClick={() => authenticateUser(email, password)}
              >
              Sign Up As Tutor!
          </Button>
        </Stack>
        </Form>
    </Container>
  );
};
export default SignUpPage;