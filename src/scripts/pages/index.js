const { getRecipes } = require('../components/api')
const factoryRecipe = require('../factory/createDataRecipes')

const displayData = async recipes => {
  const card = Array.from(document.querySelectorAll('.card'))
  // Creation des PhotographerModel
  recipes.forEach((recipe, index) => {
    const recipeModel = factoryRecipe.create(recipe)
    const recipeCardDOM = recipeModel.getRecipeCardDOM()
    console.log(recipeCardDOM)
    card[index].appendChild(recipeCardDOM)
  })
}

const init = async () => {
  // Récupère les datas des photographes
  const recipes = await getRecipes()
  displayData(recipes)
}

init()
