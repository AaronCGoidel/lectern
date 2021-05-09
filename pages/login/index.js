import {auth} from "../../components/firebase.js";
import {
  Heading,
  FormLabel,
  Button,
  Input,
  FormControl,
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



async function authenticateUser(email, password, setError) {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password)
    console.log(user);
  } catch (err) {
    alert(err.message);
  }
}


export const LogIn = ({onSubmit}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (event) => {
    authenticateUser(email, password);
    event.preventDefault();
  }
  return (
      <Container>

        <Form onSubmit={handleSubmit}>
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
            colorScheme="teal"
            variant="outline"
            marginBottom={2}
            type="submit"
            onClick={() => authenticateUser(email, password)}
            >
            Get Learning!
        </Button>
        </Form>
    </Container>
  );
};
export default LogIn;