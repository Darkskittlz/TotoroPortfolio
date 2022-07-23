import { Container, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'


import postIMG from "../../public/images/postThumb.jpg"
import Footer from '../components/footer'


const Posts = () => {
    return (
        <Layout title="Posts">
            <Container style={{marginBottom: "100px"}}>
                <Heading as="h4" fontSize={20} mb={4}>
                    Popular Posts 
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>

                    <Section delay={0.2}>
                        <NextLink href={`/posts/blog1`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={postIMG}
                                    alt="Emo-Boy"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`posts/blog1`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>From E-Boy To Engineer</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    </SimpleGrid>
                </Section>
            </Container>
          {/* <Footer /> */}
        </Layout>
    )
}

export default Posts;