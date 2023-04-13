const state = require('../components/state')
const { getRecipes, getIngredients, getUstensils, getAppliance } = require('../components/api')
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
const filterRecipe = async value => {
  const recipes = await getRecipes(value)
  displayData(recipes)
  const ingredients = await getIngredients(value)
  const appliance = await getAppliance(value)
  const ustencils = await getUstensils(value)

  const dropdownIngredients = document.querySelector('.list-group-ingredient')
  const dropdownUstencils = document.querySelector('.list-group-ustencil')
  const dropdownAppliance = document.querySelector('.list-group-appliance')

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
      const badgeListIngredients = document.querySelector('.badgeListIngredients')
      console.log(state.tags)

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
      }
    })

    dropdownIngredients.appendChild(listIngredients)
  })

  //  appliance

  while (dropdownAppliance.firstChild) {
    dropdownAppliance.removeChild(dropdownAppliance.firstChild)
  }
  appliance.forEach(appliance => {
    const listAppliance = document.createElement('li')
    listAppliance.textContent = appliance
    listAppliance.addEventListener('click', () => {
      state.tags.appliances.push(appliance)
      state.tags.appliances = [...new Set(state.tags.appliances)]
      const badgeListAppliances = document.querySelector('.badgeListAppliances')
      console.log(state.tags)

      const tableau = state.tags.appliances

      while (badgeListAppliances.firstChild) {
        badgeListAppliances.removeChild(badgeListAppliances.firstChild)
      }
      // Parcourez chaque élément du tableau et créez un élément <li> pour chaque élément
      for (let i = 0; i < tableau.length; i++) {
        // Créez un nouvel élément <li>
        const button = document.createElement('button')
        button.classList.add('btn')
        button.classList.add('btn-appliance')
        const close = document.createElement('i')
        close.classList.add('bi-x-circle')

        // Ajoutez le texte de l'élément du tableau à l'élément <li>
        button.appendChild(document.createTextNode(tableau[i]))
        button.appendChild(close)
        badgeListAppliances.appendChild(button)
      }
    })
    dropdownAppliance.appendChild(listAppliance)
  })

  // ustencils

  while (dropdownUstencils.firstChild) {
    dropdownUstencils.removeChild(dropdownUstencils.firstChild)
  }
  ustencils.forEach(ustencils => {
    const listUstencils = document.createElement('li')
    listUstencils.textContent = ustencils
    listUstencils.addEventListener('click', () => {
      state.tags.ustensils.push(ustencils)
      state.tags.ustensils = [...new Set(state.tags.ustensils)]
      console.log(state.tags)
      const badgeListUstencils = document.querySelector('.badgeListUstencils')

      const tableau = state.tags.ustensils

      while (badgeListUstencils.firstChild) {
        badgeListUstencils.removeChild(badgeListUstencils.firstChild)
      }
      for (let i = 0; i < tableau.length; i++) {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.classList.add('btn-ustencils')
        const close = document.createElement('i')
        close.classList.add('bi-x-circle')
        button.appendChild(document.createTextNode(tableau[i]))
        button.appendChild(close)
        badgeListUstencils.appendChild(button)
      }
    })

    dropdownUstencils.appendChild(listUstencils)
  })
}

const init = async () => {
  filterRecipe()
}

init()
