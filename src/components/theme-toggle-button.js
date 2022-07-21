import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <AnimatePresence >
            <motion.div 
                style={{display: 'inline-block'}}
                key={useColorModeValue('light', 'dark')}
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 0, opacity: 0}}
                transition={{duration: 0.2}}
            >
                <IconButton 
                    aria-label='Toggle theme'
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    css={{marginLeft: "10px"}}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
        )
}

export default ThemeToggleButton