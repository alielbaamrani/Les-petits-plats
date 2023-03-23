
module.exports = {

  create (data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data
    const getIngredients = ingredients => {
      const cardIngredients = document.createElement('ul')
      ingredients.forEach(item => {
        // collapse-ingredients
        const listIngredients = document.querySelector('.list-group-ingredient')
        const LiIngredient = document.createElement('li')
        LiIngredient.textContent = `${item.ingredient}`
        //  collapse-appareil
        const listAppareil = document.querySelector('.list-group-appareil')
        const LiAppareil = document.createElement('li')
        LiAppareil.textContent = `${appliance}`
        // colapse-ustensil
        const listUstensils = document.querySelector('.list-group-ustencil')
        const liUstensils = document.createElement('li')
        liUstensils.textContent = `${ustensils}`
        const cardIngredient = document.createElement('li')
        const boldName = document.createElement('span')
        boldName.setAttribute('class', 'bold-ingredient')
        boldName.textContent = `${item.ingredient}: ${item.quantity || item.quantite || ''} ${item.unit || ''}`

        listUstensils.append(liUstensils)
        listIngredients.appendChild(LiIngredient)
        listAppareil.appendChild(LiAppareil)
        cardIngredient.appendChild(boldName)
        cardIngredients.appendChild(cardIngredient)
      })
      return cardIngredients
    }

    const getRecipeCardDOM = () => {
      const col = document.createElement('div')
      col.classList.add('col')
      col.classList.add('col-card')

      const card = document.createElement('div')
      card.classList.add('card')
      const bgGrey = document.createElement('div')
      bgGrey.classList.add('background-grey')
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
      const cardDesc = document.createElement('p')
      cardDesc.classList.add('cardDesc')
      cardDesc.textContent = `${description}`
      col.appendChild(card)
      card.appendChild(bgGrey)
      card.appendChild(cardBody)
      cardBody.appendChild(cardBodyTitleTime)
      cardBodyTitleTime.appendChild(h5)
      cardBodyTitleTime.appendChild(pTime)
      pTime.appendChild(clock)
      cardBody.appendChild(cardInfo)
      cardInfo.appendChild(getIngredients(ingredients))
      cardInfo.appendChild(cardDesc)
      return (col)
    }

    return { id, name, servings, ingredients, time, description, appliance, ustensils, getRecipeCardDOM }
  }
}
