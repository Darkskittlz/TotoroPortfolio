import Logo from './logo'
import NextLink from 'next/link'
import {
    Container, 
    Box,
    Link, 
    Stack,
    Heading, 
    Flex,
    Menu, 
    MenuItem, 
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue    
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'




const LinkItem = ({ href, path, children, ...props }) => {
    const active = path === href 
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href} passHref scroll={false}>
            <Link 
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}


const Navbar = props => {
    const { path } = props
    return (
        <Container maxW='3xl'>
            <Box
                position="fixed"
                as="nav"
                w="100%"
                bg={useColorModeValue('#ffffff40', '#20202380')}
                css={{ backdropFilter: 'blur(10px)'}}
                wrap="wrap"
                zIndex={2}
                {...props}
            >
                <Container  
                    display="flex" 
                    p={2} 
                    ml={2}
                    alignItems="self-end"
                    w="100%"
                    maxW="container.md" 
                    wrap="wrap" 
                    justify="space-between"
                    align="center" 
                >
                
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" >
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{base: 'column', md: 'column'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{ base: 'full', md: 'auto'}}
                    flexDirection="row"
                    alignContent="baseline"
                    alignItems="end"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Work 
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts 
                    </LinkItem>
                    <LinkItem 
                        target="_blank"
                        href="https://github.com/darkskittlz"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack> 
                <Box 
                    flex={2}
                    align="right"
                    justifyItems="flex-end"
                    display="flex"
                    flexDirection="row-reverse"
                >
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block'}}>
                        <Menu>
                            <MenuButton 
                                as={IconButton} 
                                icon={<HamburgerIcon />} 
                                variant="outline" 
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Work</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
            </Box>
        </Container>
    )
}

export default Navbar;