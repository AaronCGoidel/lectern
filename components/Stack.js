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
  Link
} from "@chakra-ui/react";
import { SiEthereum, SiReact, SiFirebase, SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const TechStack = () => {
  return (
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex alignItems="flex-start">
          <Image rounded={"md"} alt={"ethereum blockchain illustration"} src={"images/eth.png"} />
        </Flex>
        <Stack spacing={4}>
          <Heading>We're building the future of online learning</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Our lean, modern tech stack allows us to rapidly build and deploy
            next-gen educational software at scale. That, combined with our token{" "}
            <Text as={"span"} color="purple">
              KnowledgeCredit (KCR)
            </Text>
            , we're looking to rethink the way we learn.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={SiReact} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"React and NextJS for a fast, interactive UI"}
            />
            <Feature
              icon={<Icon as={SiFirebase} color={"cyan.500"} w={5} h={5} />}
              iconBg={useColorModeValue("cyan.100", "cyan.900")}
              text={"Firebase for scalable, dependable, serverless backend"}
            />
            <Feature
              icon={<Icon as={SiEthereum} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Ethereum blockchain for bringing education to the world"}
            />
          </Stack>
          <HStack>
          <Link target="_blank" href="https://github.com/AaronCGoidel/lectern" _hover={{ textDecoration: "none" }}>
            <Button rightIcon={<SiGithub />}>Github</Button>
          </Link>
          <Link target="_blank" href="https://devpost.com/software/lectern-hezyqc" _hover={{ textDecoration: "none" }}>
            <Button rightIcon={<HiOutlineExternalLink />}>DevPost</Button>
          </Link>
          </HStack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default TechStack;
