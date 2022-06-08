const number = document.querySelector('.number')
const generate = document.querySelector('.generate')

const generateNumber = () => {
  //Generate number btn 1 and 100
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  number.innerHTML = randomNumber
}

generate.addEventListener('click', generateNumber)
