import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react';
import Donut from '../donut'


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Darkskittlz - Homepage </title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
              <NoSsr>
                  <Donut />
              </NoSsr>
              {children}
            </Container>
      </Box>
    )
}

export default Main;