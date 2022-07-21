import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import styled from 'styled-components'
import Footer from '../components/footer'


// import thumbProject from '../assets/images/works/bg (1).png'
// import thumbBandingo from '../assets/images/works/bandingo.png'
// import thumbAidanPaul from '../assets/images/works/apmusic.png'
// import thumbCollab from '../assets/images/works/devShop.png'
// import thumbDarkMeowFi from '../assets/images/works/darkMeowFi.png'
// import thumbDarkMeowShop from '../assets/images/works/darkMeowShop.png'
// import thumbEcommerce from '../assets/images/works/tanjiroScreenshot.png'
// import thumbThreeJS from '../assets/images/works/ThreeJSPortfolio.png'
// import thumbMatiasSanes from '../assets/images/works/4.png'

export const FooterContainer = styled.div`
    display: flex;
    align-items: flex-end;

`

const Works = () => {
    return (
        <Layout>
            <Container >
                <Heading as="h2" fontSize={30} mb={4}>
                    Works 
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem id="bandingo" title="Bandingo PWA" >
                            {/* PWA That consumes several APIs to deliver transactional email to each user. */}
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="apMusic" title="Aidan Paul" >
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="devShop" title="Collaboration" >

                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id="backgrounds" title="React-Backgrounds" >
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem id="darkMeowFi" title="DarkMeow Fi" >
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.7}>
                        <WorkGridItem id="darkMeowShop" title="DarkMeow Shop" >
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.8}>
                        <WorkGridItem id="eCommerce" title="E-Commerce" >
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.9}>
                        <WorkGridItem id="threejsPortfolio" title="ThreeJS Portfolio" >
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.10}>
                        <WorkGridItem id="matiasSanes" title="Matias Sanes Hub" >
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
          <Footer />
        </Layout>
    )
}

export default Works; 