import { Heading, Box, Image, Container, Badge, Link, Title, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon, MoonIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Meta } from '../../components/work'
import styled from 'styled-components'
import { reactSkill } from '../../components/constants/constants'
import { CardContainer, SkillBadge, SkillBadgeContainer, Grid2Container, SkillText } from './styles/backgroundStyles';
import Footer from '../../components/footer'

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    

    h1 {
        font-size: 35px;
    }

`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6%;
    overflow: hidden;
    h1 {
        font-size: 20px;
    }
`

const Bingo = (props) => {

    return (
        <Layout title="Backgrounds">
            <Container>
                <TitleContainer>
                {reactSkill.map(({ id, image }) => (
                    <SkillBadgeContainer key={id}>
                        <SkillBadge src={image} />
                    </SkillBadgeContainer>
                ))}
                <h1> Bingo PWA <Badge colorScheme="green"> 2022</Badge></h1> 
                </TitleContainer>
                <BodyContainer>
                    <P>
                        <h1>
                            React progressive web application that generates a unique bingo card and triggers a transactional email to be sent to the user upon registration
                        </h1>
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>Netlify, Redux, tsParticles, Styled-Components, Axios, AntD, Sendgrid, CoutAPI</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://www.playoriginalbandingo.com/">
                            https://www.playoriginalbandingo.com/
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source</Meta>
                            <Link href="https://github.com/hyperridetech/Bandingo-PWA">
                            hhttps://github.com/hyperridetech/Bandingo-PWA
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

export default Bingo;