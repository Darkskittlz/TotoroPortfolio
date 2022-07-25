import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import styled from 'styled-components'
import Footer from '../components/footer'
import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

import thumbProject from '../../public/images/works/bg (1).png'
import thumbBandingo from '../../public/images/works/bandingo.png'
import thumbAidanPaul from '../../public/images/works/apmusic.png'
import thumbCollab from '../../public/images/works/devShop.png'
import thumbDarkMeowFi from '../../public/images/works/darkMeowFi.png'
import thumbDarkMeowShop from '../../public/images/works/darkMeowShop.png'
import thumbEcommerce from '../../public/images/works/tanjiroScreenshot.png'
import thumbThreeJS from '../../public/images/works/ThreeJSPortfolio.png'
import thumbMatiasSanes from '../../public/images/works/4.png'

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
                        <NextLink href={`/works/bandingo`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbBandingo}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/bandingo`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>Bandingo</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.3}>
                        <NextLink href={`/works/backgrounds`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbProject}
                                    alt="Backgrounds"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/backgrounds`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>Backgrounds</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.4}>
                        <NextLink href={`/works/collab`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbCollab}
                                    alt="Collab"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/collab`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>Collaboration</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.5}>
                        <NextLink href={`/works/darkMeowFi`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbDarkMeowFi}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/darkMeowFi`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>DarkMeowFi</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.6}>
                        <NextLink href={`/works/darkMeowShop`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbDarkMeowShop}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/darkMeowShop`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>DarkMeowShop</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.7}>
                        <NextLink href={`/works/eCommerce`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbEcommerce}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/eCommerce`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>E-Commerce Shop</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.8}>
                        <NextLink href={`/works/apMusic`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbAidanPaul}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/apMusic`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>Aidan Paul</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.9}>
                        <NextLink href={`/works/threejsPortfolio`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbThreeJS}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/threejsPortfolio`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>ThreeJS Portfolio</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>

                    <Section delay={0.10}>
                        <NextLink href={`/works/matiasSanes`} passHref scroll={false}>
                            <LinkBox cursor='pointer'>
                                <Image 
                                    src={thumbMatiasSanes}
                                    alt="Bandingo"
                                    className="grid-item-thumbnail"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                                <LinkOverlay href={`works/matiasSanes`} target="_blank">
                                    <Text style={{textAlign: "center"}} fontSize={20}>Matias Sanes</Text>
                                </LinkOverlay>
                            </LinkBox>
                        </NextLink>
                    </Section>
                </SimpleGrid>
            </Container>
          {/* <Footer /> */}
        </Layout>
    )
}

export default Works; 