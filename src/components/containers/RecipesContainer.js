import { Center, Container } from 'native-base'
import React, { useState } from 'react'
import Form from '../forms/Form'
import Loading from '../layout/Loading'
import RecipesList from '../lists/RecipesList'
import { getRecipes } from '../services/api'

const RecipesContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [ingredient, setIngredient] = useState(null)

  const fetchRecipes = () => {
    setIsLoading(true)

    // getRecipes(ingredient).then(
    //   recipes => {
    //     setRecipes(recipes)
    //     setIsLoading(false)
    //     console.log('recipes', recipes)
    //   },
    //   error => {
    //     alert('Error', `Something went wrong! ${error}`)
    //   }
    // )
  }

  const handleInputChange = ingredient => {
    setIngredient(ingredient)
  }

  return (
    <Container>
      <Center px={4}>
        <Form onInputChange={handleInputChange} fetchRecipes={fetchRecipes} />
        {isLoading ? <Loading /> : <RecipesList />}
      </Center>
    </Container>
  )
}

export default RecipesContainer
