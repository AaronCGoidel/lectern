import { ChakraProvider } from "@chakra-ui/react";
import LoginProvider from "./contexts/userContext";


function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </LoginProvider>
  )
}
export default MyApp;