import { Grid, GridItem, Container, Heading, Text, Image } from "@chakra-ui/react";

const ForTeachers = () => {
  return (
    <Container maxW={"7xl"} py={12}>
      <Grid
        h="500px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem colSpan={2}>
          <Heading>For educators</Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontSize={"lg"}>
            We want you to get paid fairly because we value knowledge and know
            the impact a great teacher can have. Teach students from anywhere
            and receive KnowledgeCredits, a decentralized token which will power
            our platform. Teach what you want, when you want and have the impact
            that drove you to become an educator.
          </Text>
        </GridItem>
        <GridItem colSpan={4}><Image fit alt={"a row of colored pencils"} src={"images/pencils.jpg"}/></GridItem>
      </Grid>
    </Container>
  );
};

export default ForTeachers;
