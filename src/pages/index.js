import { 
	Link,
	Box,
	Button,
	Heading,
	Container, 
	Text, 
	useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import styled from '@emotion/styled'
import Section from '../components/section'
import Paragraph from '../components/paragraph';
import ParticleComponent from "./ParticleBackground";
import Image from 'next/image';
import Footer from '../components/footer'



const BioSection = styled(Box) `
    padding-left: 3.4em;
    text-indent: -3.4em;
`

const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1em; 
`
const TitleContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: black;
    z-index: 999;
`
const Title = styled.div`
    display: flex;
    width: 5%;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin-top: 10px;
    background-color: black;
    background: linear-gradient(90deg, rgba(225,252,255,0.15545243619489557) 0%, rgba(225,252,255,0.17169373549883993) 35%);    

    backdrop-filter: blur(10px);

    h1 {
        margin-top: 10px;
        color: white;
        font-size: 25px;
        z-index:999;
    }
`

const GridContainer = styled.div`
    height: 100%;
    width: 100%;
`

const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    row-gap: 0rem;
    width: 40%;
    top: 10%;
    left: 38.5%;
    z-index: 995;
    position: fixed;
    height: 100%;

    @media (max-width: 860px){
        display: flex;
        flex-direction: column;
        align-content: center;
        left: 2.5%;
        top: 15%;
        row-gap: 0rem;
        width: 95%;
  }
`

const Card = styled.div`
        height: 75%;
        width: 100%;
        flex-direction: column;
        backdrop-filter: blur(4px);
        z-index: 998;
        background-image: url(fadeImage.url),

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            text-align: center;

            @media (max-width: 860px){
            height: 100%;
            }
        }

        h1 {
            font-size: 25px;
            font-family: "notMyType";
            color: white;
            width: 100%;
            text-align: center;
            z-index: 999;
        }

        h2 {
            font-size: 20px;
            font-family: "notMyType";
            color: white;
            width: 100%;
            text-align: left;
            z-index: 999;
        }

        p {
            text-align: center;
            color: white;
            font-size: 20px;
        }

        @media (max-width: 860px){
            height: 100%;
            display: flex;
            justify-content: center;
            align-content: end;
        }
    `

const Page = () => {
	return (
		<Layout>
			<Container maxW='2xl'>
				<Box 
					borderRadius="lg" 
					bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
					css={{ backdropFilter: 'blur(10px)' }}
					align="center" 
					h={12} 
					ml={50} 
					mr={50} 
					mb={10}
					p={3}
				>
					Hello, I'm a developer based in Miami!
				</Box>
				<Box 
				display={{md: 'flex'}}
				style={{flexDirection: "column"}}
				>
					<Box 
					mb={4}
					flexGrow={1}
					>
						<Heading 
						as="h1"
						size='xl'
						textAlign="center"
						variant="page-title"
						>
							Tristan Carlisle
						</Heading>
						<Text 
						textAlign="center"
						>
						Digital Artist, Developer, Designer
						</Text>
					</Box>
					<Box 
					flexShrink={0} 
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
					>
						<Image 
						display="inline-block"
						width="195px"
						height="240px"
						fit="cover"
						src="/images/profilePIC.jpg"
						alt="Profile IMG"							   
						/>
					</Box>
				</Box> 
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work 
					</Heading>
					<Paragraph>
						Tristan is a react developer who specializes in the MERN/PERN stack. He enjoys developing frontend user interfaces that prioritize sleek design, integrate background animations, and consume APIs to display interactive information. 
						As a blockchain engineer, he enjoys connecting frontend web applications with the blockchain via Web3js. 
					</Paragraph>
					<Box align="center" my={4}>
						<Link href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Portfolio
							</Button>
						</Link>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection> 
						<BioYear>1993</BioYear>
						Born in Miami, FL	
					</BioSection>
					<BioSection>
						<BioYear>2020</BioYear>
						Began programming journey with CodeAcademy & FreeCodeCamp
					</BioSection>
				</Section>
				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						I ❤ 
					</Heading>
					<Paragraph>Programming, 
					<Link href="https://www.youtube.com/watch?v=J_eNHNsUKPA"> Youtube, </Link>
					3D Rendering, Drums, Guitar {' '}
					<Link href="https://darkmeowfi.netlify.app/">Lofi, </Link>
					Rock Climbing, Parkour, 
					<Link href="https://beacons.ai/darkskittlz"> Cosplay, </Link>
					Skateboarding, 
					</Paragraph>
				</Section>
				<Section delay={0.4}>
					<Heading as="h3" variant="section-title">
						Inspired By 
					</Heading>
					<Paragraph>{' '}
						<Link href="https://www.craftz.dog/">Takuyama Matsuyama </Link>
					</Paragraph>
				</Section>
			  {/* <Footer /> */}
			</Container>
		</Layout>
	)
}

export default Page;
 