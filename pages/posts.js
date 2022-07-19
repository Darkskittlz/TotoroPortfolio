import { Container, Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import postIMG from "../public/images/postThumb.jpg"
import Footer from '../components/footer'
import ParticleComponent from './ParticleBackground'

const Posts = () => {
    return (
        <Layout title="Posts">
            <Container style={{marginBottom: "100px"}}>
                <Heading as="h4" fontSize={20} mb={4}>
                    Popular Posts 
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem 
                            title="From E-Boy to Engineer"
                            thumbnail={postIMG}
                            id="blog1"
                        />
                    </SimpleGrid>
                </Section>
            </Container>
          <Footer />
        </Layout>
    )
}

export default Posts;