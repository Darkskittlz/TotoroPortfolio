import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import styled from 'styled-components'
import Footer from '../components/footer'


import thumbProject from '../public/images/works/bg (1).png'
import thumbBandingo from '../public/images/works/bandingo.png'
import thumbAidanPaul from '../public/images/works/apmusic.png'
import thumbCollab from '../public/images/works/devShop.png'
import thumbDarkMeowFi from '../public/images/works/darkMeowFi.png'
import thumbDarkMeowShop from '../public/images/works/darkMeowShop.png'
import thumbEcommerce from '../public/images/works/tanjiroScreenshot.png'
import thumbThreeJS from '../public/images/works/ThreeJSPortfolio.png'
import thumbMatiasSanes from '../public/images/works/4.png'

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
                        <WorkGridItem id="bandingo" title="Bandingo PWA" thumbnail={thumbBandingo}>
                            {/* PWA That consumes several APIs to deliver transactional email to each user. */}
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="apMusic" title="Aidan Paul" thumbnail={thumbAidanPaul}>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem id="devShop" title="Collaboration" thumbnail={thumbCollab}>

                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem id="backgrounds" title="React-Backgrounds" thumbnail={thumbProject}>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem id="darkMeowFi" title="DarkMeow Fi" thumbnail={thumbDarkMeowFi}>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.7}>
                        <WorkGridItem id="darkMeowShop" title="DarkMeow Shop" thumbnail={thumbDarkMeowShop}>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.8}>
                        <WorkGridItem id="eCommerce" title="E-Commerce" thumbnail={thumbEcommerce}>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.9}>
                        <WorkGridItem id="threejsPortfolio" title="ThreeJS Portfolio" thumbnail={thumbThreeJS}>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.10}>
                        <WorkGridItem id="matiasSanes" title="Matias Sanes Hub" thumbnail={thumbMatiasSanes}>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
              <Footer />
            </Container>
        </Layout>
    )
}

export default Works; 