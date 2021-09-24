import { Box, Center, Divider, Heading, Image, Text, VStack } from 'native-base'
import React from 'react'

const RecipeCard = props => {
  const { image, label, source, uri } = props
  return (
    <Box borderWidth={1} borderRadius='md' pb={5} mb={10}>
      <VStack space={4} divider={<Divider />}>
        <Center>
          <Heading size='xs'>{label}</Heading>
          <Text>{source}</Text>
        </Center>
        <Box>
          <Image alt={label} source={{ uri: image }} size={'2xl'} />
        </Box>
      </VStack>
    </Box>
  )
}

export default RecipeCard
