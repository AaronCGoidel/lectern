import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Main,
  Hero,
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
          <h1>Landing page here</h1>
        </Hero>
      </Main>
    </Container>
  );
}
