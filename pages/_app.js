import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import ParticleComponent from "./ParticleBackground"
// import { Suspense } from "react"

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                    <AnimatePresence 
                        exitBeforeEnter 
                        initial={true}
                        />
                    <Component {...pageProps} key={router.route} />
            </Layout>
            <ParticleComponent />
        </ChakraProvider>
    )
}
export default Website;