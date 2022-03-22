import React from 'react'
import { Box,  Flex, Text, Heading } from '@chakra-ui/react'
const Header = () => {
  return (
    <Flex
 
    height="140px"
    left="0px"
    rigth="0px"
    bgColor="#292929"
    >
<Box 
width= "193px"
left="77px"
top="40px"
position="absolute"
height="60px"

>
    <Box
    border="1px solid white"
    boxSizing="border-box"
    position='absolute'

    >
    <Heading
as="h1"
height="32.94px"
width="156.7px"
color="white"
fontSize="2xl"
left="96px"
top="54px"
align="center"

>
MyTestApp
</Heading>
    </Box>

</Box>

    </Flex>
  )
}

export default Header