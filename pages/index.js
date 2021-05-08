import Head from "next/head";
import { Button, Stack } from "@chakra-ui/react"
import {
  Container,
  Main,
  Hero,
  HeroText,
  HeroImage,
  About,
  AboutImage,
  AboutText,
  Educators,
  FooterImage,
  Footer
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Lectern - Global Education</title>
        <meta
          name="description"
          content="Sign up for Lectern and learn online, your way"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Hero> 
          <HeroText>
            <h1>Learning, gone <br></br>borderless</h1>
            <p>
              We connect educators and pupils across the globe to take the politics out of pedagogy.
            </p>
            <Stack spacing={4} direction="row" align="center">
              <Button colorScheme="yellow" size="md">
                I'm a student
              </Button>
              <Button colorScheme="purple" size="md">
                I'm a tutor
              </Button>
            </Stack>
          </HeroText>
          <HeroImage src="images/HeroImg.png" alt="hero image"/>
        </Hero>
        <About>
          <AboutImage src="images/AboutImage.png" alt="about image"/>
          <AboutText>
            <h2>For students, young and old</h2>
            <p>We’re building a platform which allows students from anywhere to connect with teachers anywhere on their time using a decentralized token. This is the first step in our journey to use the blockchain to verify education and provide tools so that anyone, anywhere, can learn and have their studies recognized by employers and higher learning institutions. </p>
            <a href="youtube.com">Learn With Us → </a>
          </AboutText>
        </About>
        <Educators>
          <h2>
            For educators
          </h2>
          <p>
            We want you to get paid fairly because we value knowledge and know the impact a great teacher can have. Teach students from anywhere and receive KnowledgeCredits, a decentralized token which will power our platform. Teach what you want, when you want and have the impact that drove you to become an educator.
          </p>
        </Educators>
        <FooterImage src="images/FooterImage.png" alt="lightbulbs">

        </FooterImage>
        <Footer>
          <h1>
            Join us for the next generation of education
          </h1>
          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="yellow" size="lg">
              Start Learning
            </Button>
            <Button colorScheme="purple" size="lg">
              Start Teaching
            </Button>
          </Stack>
        </Footer>
      </Main>
    </Container>
  );
}
