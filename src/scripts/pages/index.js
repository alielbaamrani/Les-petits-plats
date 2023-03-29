const { getRecipes } = require('../components/api')
const factoryRecipe = require('../factory/createDataRecipes')
const searchBar = document.getElementById('input-search-bar')
const row = (document.querySelector('#recipesRow'))

/**
   * Remove all first child from an element quoted in parameter
   *
   * @param {HTMLElement} el - target element html with all first child to remove
   */

const displayData = async recipes => {
  // supprimer toute les elements dans row
  while (row.firstChild) {
    row.removeChild(row.firstChild)
  } // Creation des recipes Card
  recipes.forEach((recipe, index) => {
    const recipeModel = factoryRecipe.create(recipe)
    const recipeCardDOM = recipeModel.getRecipeCardDOM()
    row.appendChild(recipeCardDOM)
  })
}

searchBar.addEventListener('input', (e) => {
  const result = e.target.value
  if (result.length > 2) {
    filterElement(result)
  } else {
    filterElement()
  }
})

async function filterElement (result) {
  const recipes = await getRecipes()
  const filterArray = recipes.filter(el => el.name.toLowerCase().includes(result) || el.description.toLowerCase().includes(result) || el.appliance.toLowerCase().includes(result))
  if (row.innerHTML === '') {
    console.log('emplty')
    displayData(recipes)
  } else {
    displayData(filterArray)
  }
}

filterElement()
