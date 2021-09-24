import { FlatList, Text, View } from 'native-base'
import React from 'react'
import RecipeCard from '../listItems/RecipeCard'

const RecipesList = () => {
  const data = [
    {
      image: 'https://www.edamam.com/web-img/3aa/3aa1aace88f3f4d388663b1443ea1d17.jpg',
      label: 'Beef Medallions',
      source: 'Delish',
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_5cc235e2ae6319b854f0ecadae1c8105'
    },
    {
      image: 'https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg',
      label: 'Roast sirloin of beef',
      source: 'BBC Good Food',
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_7eb3edfc916ebf0e4b028c8e5c04b81a'
    }
  ]
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RecipeCard image={item.image} label={item.label} source={item.source} uri={item.uri} />
      )}
      keyExtractor={item => item.uri}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default RecipesList
