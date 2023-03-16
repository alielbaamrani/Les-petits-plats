const axios = require('axios')

const url = 'src/scripts/data/recipes.json'

export const getRecipes = () => axios.get(url).then(res => res.data)
