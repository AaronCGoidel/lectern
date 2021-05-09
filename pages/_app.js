import { ChakraProvider } from "@chakra-ui/react";
import LoginProvider from "../contexts/userContext";
import { DrizzleProvider } from "drizzle-react";
import KnowledgeCredit from "../build/contracts/KnowledgeCredit.json"

console.log(KnowledgeCredit);

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545"
    }
  },
  contracts: [KnowledgeCredit],
  events: {}
};

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <DrizzleProvider options = {options}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </DrizzleProvider>
    </LoginProvider>
  )
}
export default MyApp;