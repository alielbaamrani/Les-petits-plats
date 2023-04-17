const state = require('../components/state')
const { getRecipes, getIngredients, getUstensils, getAppliances } = require('../components/api')
const factoryRecipe = require('../factory/createDataRecipes')
const searchBar = document.getElementById('input-search-bar')
const row = (document.querySelector('#recipesRow'))

const displayData = async recipes => {
  // supprimer toute les elements dans row
  while (row.firstChild) {
    row.removeChild(row.firstChild)
  }

  if (recipes.length === 0) {
    while (row.firstChild) {
      row.removeChild(row.firstChild)
    }
    const recipesNone = document.createElement('p')
    recipesNone.textContent = 'aucune recette trouvé'
    row.appendChild(recipesNone)
  } else {
    // Creation des recipes Card
    recipes.forEach(recipe => {
      const recipeModel = factoryRecipe.create(recipe)
      const recipeCardDOM = recipeModel.getRecipeCardDOM()
      row.appendChild(recipeCardDOM)
    })
  }
}
searchBar.addEventListener('input', e => filterRecipe(e.target.value))

const searchInputIngredient = document.getElementById('input-search-bar-ingredient')
const searchInputAppliance = document.getElementById('input-search-bar-appliance')
const searchInputUstensils = document.getElementById('input-search-bar-ustensil')

/// //////////////////////////////////////////////////////////////////////
const displayIngredients = async value => {
  const ingredients = await getIngredients(value, searchInputIngredient.value)

  const dropdownIngredients = document.querySelector('.list-group-ingredient')

  // ingredient

  while (dropdownIngredients.firstChild) {
    dropdownIngredients.removeChild(dropdownIngredients.firstChild)
  }
  ingredients.forEach(ingredient => {
    const listIngredients = document.createElement('li')
    listIngredients.classList.add('itemIngredient')
    listIngredients.textContent = ingredient
    listIngredients.addEventListener('click', () => {
      state.tags.ingredients.push(ingredient)
      state.tags.ingredients = [...new Set(state.tags.ingredients)]
      console.log(state.tags)

      displayTagsIngredients()
    })

    dropdownIngredients.appendChild(listIngredients)
  })
}

const displayTagsIngredients = () => {
  const badgeListIngredients = document.querySelector('.badgeListIngredients')
  const tableau = state.tags.ingredients

  while (badgeListIngredients.firstChild) {
    badgeListIngredients.removeChild(badgeListIngredients.firstChild)
  }

  for (let i = 0; i < tableau.length; i++) {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-ingredient')
    const close = document.createElement('i')
    close.classList.add('bi-x-circle')
    button.appendChild(document.createTextNode(tableau[i]))
    button.appendChild(close)
    badgeListIngredients.appendChild(button)
    close.addEventListener('click', () => {
      // delete tag inside array
      state.tags.ingredients = state.tags.ingredients.filter(item => item !== tableau[i])
      displayTagsIngredients()
      console.log(state.tags)
    })
  }
  filterRecipe(searchBar.value)
}
/// //////////////////////////////////////////////////////

const displayAppliances = async value => {
  const appliances = await getAppliances(value, searchInputAppliance.value)

  const dropdownAppliances = document.querySelector('.list-group-appliance')

  // ingredient

  while (dropdownAppliances.firstChild) {
    dropdownAppliances.removeChild(dropdownAppliances.firstChild)
  }
  appliances.forEach(ingredient => {
    const listAppliances = document.createElement('li')
    listAppliances.classList.add('itemIngredient')
    listAppliances.textContent = ingredient
    listAppliances.addEventListener('click', () => {
      state.tags.appliances.push(ingredient)
      state.tags.appliances = [...new Set(state.tags.appliances)]
      console.log(state.tags)

      displayTagsAppliances()
    })

    dropdownAppliances.appendChild(listAppliances)
  })
}

const displayTagsAppliances = () => {
  const badgeListAppliances = document.querySelector('.badgeListAppliances')
  const tableau = state.tags.appliances

  while (badgeListAppliances.firstChild) {
    badgeListAppliances.removeChild(badgeListAppliances.firstChild)
  }

  for (let i = 0; i < tableau.length; i++) {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-appliance')
    const close = document.createElement('i')
    close.classList.add('bi-x-circle')
    button.appendChild(document.createTextNode(tableau[i]))
    button.appendChild(close)
    badgeListAppliances.appendChild(button)
    close.addEventListener('click', () => {
      // delete tag inside array
      state.tags.appliances = state.tags.appliances.filter(item => item !== tableau[i])
      displayTagsAppliances()
      console.log(state.tags)
    })
  }
  filterRecipe(searchBar.value)
}
/// //////////////////////////////////////////////////////////////////////

const displayUstensils = async value => {
  const ustensils = await getUstensils(value, searchInputUstensils.value)

  const dropdownUstensils = document.querySelector('.list-group-ustensil')

  // ingredient

  while (dropdownUstensils.firstChild) {
    dropdownUstensils.removeChild(dropdownUstensils.firstChild)
  }
  ustensils.forEach(ustensils => {
    const listAppliances = document.createElement('li')
    listAppliances.classList.add('itemIngredient')
    listAppliances.textContent = ustensils
    listAppliances.addEventListener('click', () => {
      state.tags.ustensils.push(ustensils)
      state.tags.ustensils = [...new Set(state.tags.ustensils)]
      console.log(state.tags)

      displayTagsUstensils()
    })

    dropdownUstensils.appendChild(listAppliances)
  })
}

const displayTagsUstensils = () => {
  const badgeListUstensils = document.querySelector('.badgeListUstensils')
  const tableau = state.tags.ustensils

  while (badgeListUstensils.firstChild) {
    badgeListUstensils.removeChild(badgeListUstensils.firstChild)
  }

  for (let i = 0; i < tableau.length; i++) {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-ustensils')
    const close = document.createElement('i')
    close.classList.add('bi-x-circle')
    button.appendChild(document.createTextNode(tableau[i]))
    button.appendChild(close)
    badgeListUstensils.appendChild(button)
    close.addEventListener('click', () => {
      // delete tag inside array
      state.tags.ustensils = state.tags.ustensils.filter(item => item !== tableau[i])
      displayTagsUstensils()
      console.log(state.tags)
    })
  }
  filterRecipe(searchBar.value)
}

/// /////////////////////////////////////////////////////////////////////
const filterRecipe = async value => {
  const recipes = await getRecipes(value)
  displayData(recipes)

  searchInputIngredient.addEventListener('input', async e => {
    displayIngredients(value)
  })

  searchInputAppliance.addEventListener('input', async e => {
    displayAppliances(value)
  })

  searchInputUstensils.addEventListener('input', async e => {
    displayUstensils(value)
  })

  // ingredient
  displayIngredients(value)
  displayAppliances(value)
  displayUstensils(value)
}
const init = async () => {
  filterRecipe()
}

init()
