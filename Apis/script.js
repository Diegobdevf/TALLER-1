const input = document.querySelector('#searchInput')
const userList = document.querySelector('#Cards')

let Cards = []

window.addEventListener('DOMContentLoaded', async () => {
  userList.innerHTML = "<h1>Loading</h1>"
  const data = await loadCards()
  Cards = data.data
  renderCards(Cards)
})

input.addEventListener('keyup', e => {
  const newCards = Cards.filter(Cards => `${Cards.name.toLowerCase()} ${Cards.type.toLowerCase()}`.includes(input.value.toLowerCase()))
  renderCards(newCards)
})


async function loadCards() {
  const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?staple=yes')
  return await response.json()
}


const createCardsItems = Cards => Cards.map(Cards => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${Cards.name} ${Cards.type}</li>`).join(' ')

function renderCards(Cards) {
  const itemsString = createCardsItems(Cards)
  userList.innerHTML = itemsString
}