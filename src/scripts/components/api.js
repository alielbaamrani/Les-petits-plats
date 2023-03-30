const axios = require('axios')

export const url = 'src/scripts/data/recipes.json'
export const getRecipes = () => axios.get(url).then(res => res.data)
