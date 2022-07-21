import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from "@emotion/react"

export const GridItem = ({ children, id, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/posts/${id}`} passHref scroll={false}>
            <LinkBox cursor='pointer'>
                <Image 
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
                />
                <LinkOverlay href={`posts/${id}`} target="_blank">
                    <Text mt={3}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={24}>{children}</Text>
            </LinkBox>
        </NextLink>

    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image 
                    src={thumbnail} 
                    alt={title} 
                    className="grid-item-thumbnail" 
                    placeholder="blur" 
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)