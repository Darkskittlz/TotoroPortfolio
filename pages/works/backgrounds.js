import { Heading, Box, Image, Container, Badge, Link, Title, List, ListItem, DrawerFooter } from '@chakra-ui/react'
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
        font-size: 35px;
    }

`

const BodyContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20%;
overflow: hidden;
h1 {
    font-size: 20px;
}
`

const Spacer = styled.div`
    height: 50px;
`

const Backgrounds = (props) => {

    return (
        <Layout title="Backgrounds">
            <Container>
                <TitleContainer>
                    <h1>3D Backgrounds <Badge colorScheme="green"> 2022</Badge></h1> 
                </TitleContainer>
                <BodyContainer>
                    <P>
                        <h1>
                        React Web Application displaying the various backgrounds in tsParticles and threeJS I like to employ on my web applications
                        </h1>
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Platform</Meta>
                            <span>AntD, Redux, Three, Sass, React-Three-Fiber, Axios </span>
                        </ListItem>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://react-backgrounds.netlify.app/">
                            https://react-backgrounds.netlify.app/
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Source</Meta>
                            <Link href="https://github.com/Darkskittlz/DarkMeow-Backgrounds">
                            https://github.com/Darkskittlz/DarkMeow-Backgrounds
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    </List>
                </BodyContainer>
            </Container>
          <Footer />
         <Spacer />
        </Layout>
    )
}

export default Backgrounds;