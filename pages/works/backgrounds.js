import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Backgrounds">
            <Container>
                <Title>
                    React-Backgrounds <Badge>2022</Badge>
                </Title>
                <P> A PWA to showcase the different ThreeJS Backgrounds I use with clients</P>
                <List ml={4} my={4}>
                    <ListItem>
                        
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work;