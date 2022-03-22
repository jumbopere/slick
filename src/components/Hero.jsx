import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Container
    maxW="1440px"
   height="550px"
    left="0px"
    top="138px"
    bg="url('https://www.indiewire.com/wp-content/uploads/2020/08/China-Movie-Theater.jpg?w=780')"
    >
        <Box
width="490px"
heigth="282px"
left="77px"
top="247px"
position="absolute"
        >
<Text
fontFamily="DM Sans"
fontStyle="normal"
fontWeight="700 bold"
fontSize="72px"
lineHeight="93.74px"
letterSpacing="-5%"
color="white"

>
Watch something incredible.
</Text>
        </Box>

    </Container>
  )
}

export default Hero