let closeBtn = document.querySelector('.close-btn')
let label = document.querySelector('.form-label')
let input = document.querySelector('.form-input')
let errorText = document.querySelector('.input-span')

closeBtn.onclick = () => {
  label.style.display = 'none'
  input.style.display = 'block'
}
