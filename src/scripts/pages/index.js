const { getRecipes, getIngredients, getUstensils, getAppliance } = require('../components/api')
const factoryRecipe = require('../factory/createDataRecipes')
const searchBar = document.getElementById('input-search-bar')
const searchInputIngredient = document.getElementById('input-search-bar-ingredient')
const searchInputAppliance = document.getElementById('input-search-bar-appliance')
const searchInputUstencil = document.getElementById('input-search-bar-ustencil')

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

 // list du dropdown ingredient
  while (dropdownIngredients.firstChild) {
    dropdownIngredients.removeChild(dropdownIngredients.firstChild)
  }
  ingredients.forEach(ingredient => {
    const listIngredients = document.createElement('li')
    listIngredients.classList.add('itemIngredient')
    listIngredients.textContent = ingredient
    dropdownIngredients.appendChild(listIngredients)
  })
  // list du dropdown appliance
  while (dropdownAppliance.firstChild) {
    dropdownAppliance.removeChild(dropdownAppliance.firstChild)
  }
  appliance.forEach(appliance => {
    const listAppliance = document.createElement('li')
    listAppliance.textContent = appliance
    dropdownAppliance.appendChild(listAppliance)
  })
  // list du dropdown ustencils
  while (dropdownUstencils.firstChild) {
    dropdownUstencils.removeChild(dropdownUstencils.firstChild)
  }
  ustencils.forEach(ustencils => {
    const listUstencils = document.createElement('li')
    listUstencils.textContent = ustencils
    dropdownUstencils.appendChild(listUstencils)
  })
}
// FILTRE INGREDIENT

searchInputIngredient.addEventListener('keyup', e => filterIngredient(e.target.value))
const filterIngredient = async value => {
  console.log('filterIngredient')
  const list = document.querySelector('.list-group-ingredient')
  const items = list.querySelectorAll('li')

  searchInputIngredient.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase()

    items.forEach(function (item) {
      const text = item.textContent.toLowerCase()

      if (text.includes(searchTerm)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  })
}
// Filter Appliance
searchInputAppliance.addEventListener('keyup', e => filterAppliance(e.target.value))
const filterAppliance = async value => {
  console.log('filterAppliance')
  const list = document.querySelector('.list-group-appliance')
  const items = list.querySelectorAll('li')

  searchInputAppliance.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase()

    items.forEach(function (item) {
      const text = item.textContent.toLowerCase()

      if (text.includes(searchTerm)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  })
}

// Filter ustencils
searchInputUstencil.addEventListener('keyup', e => filterUstensils(e.target.value))
const filterUstensils = async value => {
  console.log('filterUstensils')
  const list = document.querySelector('.list-group-ustencil')
  const items = list.querySelectorAll('li')

  searchInputUstencil.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase()

    items.forEach(function (item) {
      const text = item.textContent.toLowerCase()

      if (text.includes(searchTerm)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  })
}

const getTag = () => {
  const listIngredients = document.getElementById('list-group-ingredient')
  const badgeList = document.querySelector('.badgeList')

  // Initialise un tableau pour stocker les données
  const listTag = []

  // Ajoute un écouteur d'événement 'click' sur chaque élément <li> de la liste
  listIngredients.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', () => {
      console.log('test')
      const ingredient = element.textContent // Récupère le texte de l'élément cliqué
      listTag.push(ingredient) // Ajoute les données au tableau
      console.log(listTag)
      const button = document.createElement('button')
      button.classList.add('btn')
      button.classList.add('btn-primary')
      button.textContent = element.listTag
      badgeList.appendChild(button)
    })
  })
}
// Récupère la liste avec l'id 'maListe'

const init = async () => {
  filterRecipe()
  getTag()
}

init()
