
const axios = require('axios')
const { mainSearch, filterByTags, isLowerCaseIncluded } = require('./search')
const state = require('./state')

export const url = 'src/scripts/data/recipes.json'

export const getRecipes = (value = '') => axios.get(url)
  .then(res => {
    const result = value.length > 2 ? mainSearch(res.data, value) : res.data
    return filterByTags(result, state.tags)
  })

/**
 * Get Ingredients filtered
 * @param {*} main - String searched into main search bar
 * @param {*} value - String to search from input search bar ingredients
 * @returns Array of String (ingredients)
 */
export const getIngredients = (main = '', value = '') => getRecipes(main)
  .then(recipes => {
    const filter = value === 'Ingrédients' ? '' : value
    let ingredients = []
    // Get all unique ingredients
    recipes.forEach(recipe => {
      ingredients = [...new Set([...ingredients, ...recipe.ingredients.map(item => item.ingredient)])]
    })
    return filter.length >= 3 ? ingredients.filter(item => isLowerCaseIncluded(item, filter)) : ingredients
    // return ingredients
  })

export const getAppliances = (main = '', value = '') => getRecipes(main)
  .then(recipes => {
    const filter = value === 'appliance' ? '' : value

    let appliance = []
    // Get all unique appliances
    recipes.forEach(recipe => {
      appliance = [...new Set([...appliance, recipe.appliance])]
    })
    return filter.length >= 3 ? appliance.filter(item => isLowerCaseIncluded(item, filter)) : appliance
  })

export const getUstensils = (main = '', value = '') => getRecipes(main)

  .then(recipes => {
    const filter = value === 'ustensils' ? '' : value

    let ustensils = []
    // Get all unique ustensils
    recipes.forEach(recipe => {
      ustensils = [...new Set([...ustensils, ...recipe.ustensils.map(item => item)])]
    })
    return filter.length >= 3 ? ustensils.filter(item => isLowerCaseIncluded(item, filter)) : ustensils
  })
