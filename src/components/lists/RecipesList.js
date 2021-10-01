import { FlatList, Text, View } from 'native-base'
import React from 'react'
import RecipeCard from '../listItems/RecipeCard'

const RecipesList = ({ navigation }) => {
  const data = [
    {
      image: 'https://www.edamam.com/web-img/3aa/3aa1aace88f3f4d388663b1443ea1d17.jpg',
      label: 'Beef Medallions',
      source: 'Delish',
      url: 'http://www.delish.com/cooking/recipe-ideas/recipes/a32308/beef-medallions-120718/'
    },
    {
      image: 'https://www.edamam.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg',
      label: 'Roast sirloin of beef',
      source: 'BBC Good Food',
      url: 'http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef'
    }
  ]
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RecipeCard
          image={item.image}
          label={item.label}
          navigation={navigation}
          source={item.source}
          url={item.url}
        />
      )}
      keyExtractor={item => item.url}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default RecipesList
