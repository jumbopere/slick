import React from 'react'
import { Box, Text } from '@chakra-ui/react'


const Movie = ({movie: {Title, Type, Poster}}) => {
  return (
    <Box
    display="flex"
    flexDirection="row"
    alignItems="flex-start"
    padding="10px"
    width="300px"
    height="300px"
    left="626px"
    bg="black"
    borderRadius="12px"
    top="0px"
    flex="none"
    flexGrow="0"
    order="2"
    position="static"
margin="0px 13px"
    >
      <Text
      fontFamily="DM Sans"
      fontStyle="normal"
      fontWeight="400"
      fontSize="24px"
      alignItems="center"
      textAlign="center"
      display="flex"
      flex="none"
      alignSelf="stretch"
      flexGrow="1"
      margin="0px 10px"
      position="static"
      color="white"
      >
{Title}
      </Text>
        </Box>
  )
}

export default Movie