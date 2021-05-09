import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";

const ForStudents = () => {
  return (
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>For students, young and old</Heading>
          <Text fontSize={"lg"}>
            We’re building a platform which allows students from anywhere to
            connect with teachers anywhere on their time using a decentralized
            token. This is the first step in our journey to use the blockchain
            to verify education and provide tools so that anyone, anywhere, can
            learn and have their studies recognized by employers and higher
            learning institutions.
          </Text>
          <a style={{ "font-size": "1.3rem", color: "#8C31F5" }}>
            Learn With Us →{" "}
          </a>
        </Stack>
        <Flex alignItems="flex-start">
          <Image rounded={"md"} alt={"feature image"} src={"images/student.jpg"} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default ForStudents;
