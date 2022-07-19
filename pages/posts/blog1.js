import { Heading, Box, Image, Container, Badge, Link, Title, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, MoonIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Meta } from '../../components/work'
import styled from 'styled-components'
import Footer from '../../components/footer'

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    

    h1 {
        font-size: 30px;
        font-weight: 700;
        color: #A501EB;
    }

`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 28px;
        text-indent: 30px;
        text-align: left;
    }
`

const Backgrounds = (props) => {
    return (
        <Layout title="Backgrounds">
            <Container>
                <TitleContainer>
                    <h1> 🌟  From E-Boy To Engineer <Badge colorScheme="blue"> 2022</Badge></h1> 
                </TitleContainer>
                <BodyContainer>
                        <h1>
                            The Pandemic had just struck Japan in April of 2020. 
                            I was currently living in Japan at the time with my Fiance, and 
                            we were both teaching English and cosplaying. I was also working at a bar in downtown Osaka. 
                        </h1>
                    <br />
                    <br />
                        <h1>
                            However, once Japan started shutting down we had to decide to stay through the onset of the pandemic, 
                            or fly home before lockdown. We decided to fly home, but as soon as I got back I wanted more than anything
                            to build a career that would allow me to make regular trips back to Japan. That's when I decided to learn how to code.
                        </h1>
                    <br />
                    <br />
                        <h1>
                            I immediately stumbled upon FreeCodeCamp and CodeAcademy, and thus began my journey learning 
                            HTML, CSS, and JS. Before I knew it, I was making websites for my friends and family for fun. I was still involved in cosplaying,
                            and making videos for TikTok and instagram. But I also poured time and energy into developing a skill set that has allowed me 
                            to launch my own freelance company.    
                        </h1>
                    {/* <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Link1</Meta>
                            <Link href="">
                            
                                <ExternalLinkIcon mx="2px"/>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Link2</Meta>
                            <Link href="">
                            
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List> */}
                </BodyContainer>
            </Container>
            <Footer />
        </Layout>
    )
}

export default Backgrounds;