const hex = document.querySelector('.hexadecimal')
const generate = document.querySelector('.generate')

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8)

  document.body.style.backgroundColor = `#${randomColor}`

  hex.innerHTML = `#${randomColor.toUpperCase()}`
}

generate.addEventListener('click', generateColor)

document.body.style.color.backgroundColor = '#ff8888'
console.log(hex)
