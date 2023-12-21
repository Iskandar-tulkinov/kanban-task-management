const optionMenu = document.querySelector('.dropdown-menu'),
  selectBtn = optionMenu.querySelector('.dropdown-btn'),
  options = optionMenu.querySelectorAll('.dropdown-option'),
  sBtnText = optionMenu.querySelector('.dBtn-text')

selectBtn.addEventListener('click', () => optionMenu.classList.toggle('active'))

options.forEach((option) => {
  option.addEventListener('click', () => {
    let selectedOption = option.querySelector('.option-text').innerText
    sBtnText.innerText = selectedOption

    optionMenu.classList.toggle('active')
  })
})
