export const mainSearch = (recipes, value) => recipes.filter(el => el.name.toLowerCase().includes(value) || el.description.toLowerCase().includes(value) || el.appliance.toLowerCase().includes(value))

export const ingredientSearch = (el, value) => el.filter(el => el.name.toLowerCase().includes(value))
