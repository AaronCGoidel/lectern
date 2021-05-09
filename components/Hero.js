import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";



const Hero = () => {
  return (
    <Container maxW={"7xl"}>
      <Image
        style={{ position: "absolute", top: "2rem", left: "2rem" }}
        src="images/logo.png"
        width={40}
      />
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        wrap={"wrap-reverse"}
      >
        <Stack flex={1.2} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text>Learning, gone borderless</Text>
          </Heading>
          <Text color={"gray.500"}>
            Leveraging blockchain technology, we connect educators and pupils across the globe to take the
            politics out of pedegogy.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button size={"lg"} px={6} colorScheme={"purple"}>
              Start Learning
            </Button>
            <Button size={"lg"} px={6} colorScheme={"yellow"}>
              Start Teaching
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={"images/HeroImg.png"}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export default Hero;