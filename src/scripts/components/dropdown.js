const displayIngredients = require('../pages/index')

const inputIngredient = document.querySelector('.accordion-button-ingredients')
const accordionIngredient = document.querySelector('#ingredients')

const inputAppareils = document.querySelector('.accordion-button-appareils')
const accordionAppareils = document.querySelector('#appareils')

const inputUstensibles = document.querySelector('.accordion-button-ustensibles')
const accordionUstensibles = document.querySelector('#ustensibles')

inputIngredient.addEventListener('click', () => {
  displayIngredients()

  if (inputIngredient.type === 'button') {
    accordionIngredient.style.maxWidth = '45vw'
    inputIngredient.type = 'text'
    inputIngredient.value = ''
  } else {
    inputIngredient.type = 'button'
    inputIngredient.value = 'ingredients'
    accordionIngredient.style.maxWidth = ''
  }
})

inputAppareils.addEventListener('click', () => {
  if (inputAppareils.type === 'button') {
    accordionAppareils.style.maxWidth = '45vw'
    inputAppareils.type = 'text'
    inputAppareils.value = ''
  } else {
    inputAppareils.type = 'button'
    inputAppareils.value = 'appareils'
    accordionAppareils.style.maxWidth = ''
  }
})

inputUstensibles.addEventListener('click', () => {
  if (inputUstensibles.type === 'button') {
    accordionUstensibles.style.maxWidth = '45vw'
    inputUstensibles.type = 'text'
    inputUstensibles.value = ''
  } else {
    inputUstensibles.type = 'button'
    inputUstensibles.value = 'ustensibles'
    accordionUstensibles.style.maxWidth = ''
  }
})
