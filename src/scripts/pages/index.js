const { getRecipes } = require('../components/api')
const factoryRecipe = require('../factory/createDataRecipes')
const searchBar = require('../components/searchBar')
const dropdown = require('../components/dropdown')
/**
   * Remove all first child from an element quoted in parameter
   *
   * @param {HTMLElement} el - target element html with all first child to remove
   */

const displayData = async recipes => {
  const row = (document.querySelector('#recipesRow'))
  // Creation des recipes Card
  recipes.forEach((recipe, index) => {
    const recipeModel = factoryRecipe.create(recipe)
    const recipeCardDOM = recipeModel.getRecipeCardDOM()
    row.appendChild(recipeCardDOM)
  })
}

const init = async () => {
  // Récupère les datas des recettes

  const recipes = await getRecipes()
  displayData(recipes)
}

init()
