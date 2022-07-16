import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'


import thumbProject from '../public/images/works/projectDemo.png'
import thumbBandingo from '../public/images/works/bandingo.png'

const Works = () => {
    return (
        <Layout>
            <Container >
                <Heading as="h2" fontSize={30} mb={4}>
                    Works 
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem id="bandingo" title="Bandingo PWA" thumbnail={thumbBandingo}>
                            PWA That consumes several APIs to deliver transactional email to each user.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="backgrounds" title="React-Backgrounds" thumbnail={thumbProject}>
                            A PWA to showcase the different ThreeJS backgrounds I work with.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works; 