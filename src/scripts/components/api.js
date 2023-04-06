
const axios = require('axios')
const { mainSearch } = require('./search')

export const url = 'src/scripts/data/recipes.json'
export const getRecipes = (value = '') => axios.get(url).then(res => value.length > 2 ? mainSearch(res.data, value) : res.data)

/**
 * Get Ingredients filtered
 * @param {*} main - String searched into main search bar
 * @param {*} value - String to search from input search bar ingredients
 * @returns Array of String (ingredients)
 */
export const getIngredients = (main = '', value = '') => getRecipes(main)
  .then(recipes => {
    let ingredients = []
    // Get all unique ingredients
    recipes.forEach(recipe => {
      ingredients = [...new Set([...ingredients, ...recipe.ingredients.map(item => item.ingredient)])]
    })
    // return filter.length >= 3 ? ingredients.filter(item => isLowerCaseIncluded(item, filter)) : ingredients
    return ingredients
  })

export const getAppliance = (main = '', value = '') => getRecipes(main)
  .then(recipes => {
    let appliance = []
    // Get all unique ingredients
    recipes.forEach(recipe => {
      appliance = [...new Set([...appliance, recipe.appliance])]
    })
    // return filter.length >= 3 ? ingredients.filter(item => isLowerCaseIncluded(item, filter)) : ingredients
    return appliance
  })

export const getUstensils = (main = '', value = '') => getRecipes(main)
  .then(recipes => {
    let ustensils = []
    // Get all unique ingredients
    recipes.forEach(recipe => {
      ustensils = [...new Set([...ustensils, ...recipe.ustensils])]
    })
    // return filter.length >= 3 ? ingredients.filter(item => isLowerCaseIncluded(item, filter)) : ingredients
    return ustensils
  })
