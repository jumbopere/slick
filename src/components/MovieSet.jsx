import React from 'react'
import { Container, Box, Text, Stack } from '@chakra-ui/react'
import Movie from './Movie'

const MovieSet = ({
    movies
}) => {
  return (
    <Container
    maxW="1552px"
    height="349px"
    left="67px"
    top="888px"
    position="absolute"
    >
     <Text
        width="279px"
        height="31px"
        left="67px"
        top="1285px"
        fontSize="24px"
        lineHeight="31px"
        fontWeight="400"
        fontStyle="normal"
        color="black"
        fontFamily="DM sans"
        >

        </Text>

    {
        movies?.length > 0 &&(
            <Stack
            display="flex"
            flexDirection="row"
            padding="0px"
            alignItems="flex-start"
            top="1334px"
            height="300px"
            left="67px"
            maxW="1552px"
    
            >
                {
                    movies.map((movie, index)=> (
<Movie movie={movie} key={index} />
                    ))
                }
    
    
            </Stack>

        )
    }

    
      
        
        

    </Container>
  )
}

export default MovieSet