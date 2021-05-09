import {auth, db} from "../../components/firebase.js";
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
import { useState, useContext } from "react";
import { LoginContext } from "../contexts/userContext";
 

const Form = styled.form`
  background-color: white;
  width: 60vw;
  justify-self: center;
`;

async function authenticateUser(event, enteredEmail, enteredPassword, enteredName, enteredType, setLogin) {
  try {
    const user = await auth.createUserWithEmailAndPassword(enteredEmail, enteredPassword);
    console.log(user);
    setLogin(true);
    db.collection("users").doc(user).set({
      name: enteredName,
      email: enteredEmail,
      type: enteredType,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    event.preventDefault();
  } catch (err) {
    alert(err.message);
  };
};

export const SignUpPage = ({onSubmit}) => {
  
  const [password, setPassword] = useState(null);

  const [isLoggedIn, setLogin] = useContext(LoginContext);
  const [type, setType] = useContext(LoginContext); // "student" or "instructor"
  const [name, setName] = useContext(LoginContext);
  const [email, setEmail] = useContext(LoginContext);

  const handleSubmit = (event) => {
    authenticateUser(event, email, password, name, type, setLogin);
    event.preventDefault();
  };

  return (
      <Container>
        <Form onSubmit={handleSubmit}>
        <Heading mb={4}>Sign Up</Heading>

        <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
            mb={4}
            />
        </FormControl>
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
              onClick={() => {setType("student")}}
              >
              Sign Up As a Student!
          </Button>
          <Button
              colorScheme="teal"
              variant="outline"
              marginBottom={2}
              onClick={() => {setType("instructor")}}
              >
              Sign Up As Tutor!
          </Button>
        </Stack>
        </Form>
    </Container>
  );
};
export default SignUpPage;