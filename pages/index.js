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
import { GridItem } from '../components/grid-item';
import Image from 'next/image';

const BioSection = styled(Box) `
    padding-left: 3.4em;
    text-indent: -3.4em;
`

const BioYear = styled.span`
    font-weight: bold;
    margin-right: 1em; 
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
					mb={6} 
					p={3}
				>
					Hello, I'm a full-stack developer based in Miami!
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
						width="200px"
						height="240px"
						fit="cover"
						src="/images/darkProfile (2).jpg"
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

			</Container>
		</Layout>
	)
}

export default Page;
 