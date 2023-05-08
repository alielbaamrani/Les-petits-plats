/**
 * returns the first element in the provided array that satisfies the provided testing function (isIncluded function).
 * If no values satisfy the testing function, undefined is returned.
 * @param {Array} array - Array of object (recipes)
 * @param {String} property - Object property by example: 'description' or 'name'
 * @param {String} value - String to search
 * @returns Object || undefined
 */
const isFound = (array, property, value) => array.find(item => isLowerCaseIncluded(item[property], value))

export const mainSearch = (recipes, value) => recipes.filter(el => el.name.toLowerCase().includes(value) || el.description.toLowerCase().includes(value) || isFound(el.ingredients, 'ingredient', value))

export const isLowerCaseIncluded = (value1, value2) => value1.toLowerCase().includes(value2.toLowerCase())

const isRecipeIncludesEveryTagIngredient = (recipe, tags) => tags.ingredients.every(ingredient => recipe.ingredients.map(elem => elem.ingredient).includes(ingredient))
const isRecipeIncludesEveryTagAppliance = (recipe, tags) => tags.appliances.every(appliance => recipe.appliance.includes(appliance))
const isRecipeIncludesEveryTagUstensil = (recipe, tags) => tags.ustensils.every(ustensil => recipe.ustensils.includes(ustensil))

/**
 * Get recipes which include every tag in param
 * @param {Array} recipes - Array of object (recipes)
 * @param {Object} tags - tags to search
 * @returns Array of object of recipes
 */
export const filterByTags = (recipes, tags) => recipes.filter(recipe =>
  isRecipeIncludesEveryTagIngredient(recipe, tags) &&
  isRecipeIncludesEveryTagAppliance(recipe, tags) &&
  isRecipeIncludesEveryTagUstensil(recipe, tags))
