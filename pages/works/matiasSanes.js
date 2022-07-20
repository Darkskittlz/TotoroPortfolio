import { Heading, Box, Image, Container, Badge, Link, Title, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, MoonIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Meta } from '../../components/work'
import styled from 'styled-components'
import { CardContainer, SkillBadge, SkillBadgeContainer, Grid2Container, SkillText } from './styles/backgroundStyles';
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

const Ecommerce = (props) => {
    return (
        <Layout title="Matias Sanes">
            <Container>
                <TitleContainer>
                    <h1> Matias Sanes Musician Hub <Badge colorScheme="green"> 2022</Badge></h1> 
                </TitleContainer>
                <BodyContainer>
                    <P></P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>HTML, CSS, JS, Mailchimp </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://matias-sanes.netlify.app/">
                            https://matias-sanes.netlify.app/
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source</Meta>
                            <Link href="https://github.com/Darkskittlz/matiasSite">
                            https://github.com/Darkskittlz/matiasSite
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>
                </BodyContainer>
            </Container>
          <Footer />
        </Layout>
    )
}

export default Ecommerce;