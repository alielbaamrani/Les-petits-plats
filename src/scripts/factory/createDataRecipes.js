
module.exports = {

  create (data) {
    const { id, name, servings, ingredients, time, description, appliance, ustencils } = data

    // creation des profils des photographes avec leurs données

    const getRecipeCardDOM = () => {
      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')
      const cardBodyTitleTime = document.createElement('div')
      cardBodyTitleTime.classList.add('cardBody__Title_Time')
      const pTime = document.createElement('p')
      pTime.classList.add('time')
      pTime.textContent = `${time} Min `
      const clock = document.createElement('i')
      clock.classList.add('fa-clock')
      clock.classList.add('fa-regular')
      const h5 = document.createElement('h5')
      h5.classList.add('card-title')
      h5.textContent = `${name}`
      const cardInfo = document.createElement('div')
      cardInfo.classList.add('cardInfo')
      const cardIngredients = document.createElement('ul')
      const cardIngredient = document.createElement('li')
      cardIngredient.textContent = `${ingredients}`
      const cardDesc = document.createElement('p')
      cardDesc.classList.add('cardDesc')
      cardDesc.textContent = `${description}`
      cardBody.appendChild(cardBodyTitleTime)
      cardBodyTitleTime.appendChild(h5)
      cardBodyTitleTime.appendChild(pTime)
      pTime.appendChild(clock)
      cardBody.appendChild(cardInfo)
      cardIngredients.appendChild(cardIngredient)
      cardInfo.appendChild(cardIngredients)
      cardInfo.appendChild(cardDesc)

      return (cardBody)
    }

    return { id, name, servings, ingredients, time, description, appliance, ustencils, getRecipeCardDOM }
  }
}
