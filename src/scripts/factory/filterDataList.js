const searchInputIngredient = document.getElementById('input-search-bar-ingredient')
const searchInputAppliance = document.getElementById('input-search-bar-appliance')
const searchInputUstencil = document.getElementById('input-search-bar-ustencil')

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
