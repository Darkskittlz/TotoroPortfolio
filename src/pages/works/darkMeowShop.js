import { Heading, Box, Image, Container, Badge, Link, Title, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, MoonIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Meta } from '../../components/work'
import styled from 'styled-components'
import Footer from '../../components/footer'


const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    

    h1 {
        font-size: 25px;
    }

`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 10px;
    }
`

const Spacer = styled.div`
    height: 200px;
`

const DarkMeowShop = (props) => {
    return (
        <Layout title="DarkMeow Shop">
            <Container>
                <TitleContainer>
                    <h1> DarkMeow Shop <Badge colorScheme="green"> 2022</Badge></h1> 
                </TitleContainer>
                <BodyContainer>
                    <P></P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>React, ReactStrap, MUI, CommerceJS </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://darkmeowshop.com/">
                            https://darkmeowshop.com/
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source</Meta>
                            <Link href="https://github.com/Darkskittlz/React-Art-Shop">
                            https://github.com/Darkskittlz/React-Art-Shop
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>
                </BodyContainer>
            </Container>
          <Spacer />
        </Layout>
    )
}

export default DarkMeowShop;