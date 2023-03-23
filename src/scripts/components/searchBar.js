
const searchBar = document.getElementById('input-search-bar')

searchBar.addEventListener('keyup', (e) => {
  console.log(e)
  const searchedLetters = e.target.value
  const cards = document.querySelectorAll('.col-card')
  filterElements(searchedLetters, cards)
})

function filterElements (letters, elements) {
  if (letters.length > 2) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.toLowerCase().includes(letters)) {
        elements[i].style.display = 'block'
      } else {
        elements[i].style.display = 'none'
      }
    }
  } else {
    for (let i = 0; i < elements.length; i++) { elements[i].style.display = 'block' }
  }
}
