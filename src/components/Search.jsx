import React from 'react'
import { Stack, Text, Input, Container } from '@chakra-ui/react'
const Search = ({ searchTerm, setSearchTerm}) => {
  return (
    <Container
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    padding="0px"
   width="container.sm"
    height="89px"
    left="77px"
    top="751px"
    >
<Text
lineHeight="31px"
fontSize="24px"
fontStyle="normal"
fontWeight="400 Regular"
color="black"
left="0"
top="0"
onClick={() => searchMovies(searchTerm)}

>
    Search
</Text>
<Input
height="54px"
border="1px solid black"
margin="4px 0px"
order="1"
flexGrow="0"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>

    </Container>
  )
}

export default Search