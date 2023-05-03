
const isLowerCaseIncludedBis = (value1, value2) => value1.toLowerCase().indexOf(value2.toLowerCase()) > -1

const isFound = (array, property, value) => {
  for (const item of array) {
    if (isLowerCaseIncludedBis(item[property], value)) {
      return true
    }
  }
  return false
}

export const secondSearch = (recipes, value) => {
  const result = []
  for (const recipe of recipes) {
    if (isLowerCaseIncludedBis(recipe.description, value) ||
      isLowerCaseIncludedBis(recipe.name, value) ||
      isFound(recipe.ingredients, 'ingredient', value)) {
      result.push(recipe)
    }
  }
  return result
}
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
