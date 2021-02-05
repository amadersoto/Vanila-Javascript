let list = document.getElementById('list')

list.addEventListener('dblclick', function (event) {
  if (this.contains(event.target)) {
    let innertext = event.target.innerText
    event.target.innerText = ''
    let inputBox = createElements(innertext)
    event.target.appendChild(inputBox)

    inputBox.addEventListener('keypress', function (e) {
      if (e.key == 'Enter') {
        event.target.innerHTML = e.target.value
      }
    })
  }
})

function createElements(value) {
  let inp = document.createElement('input')
  inp.type = 'text'
  inp.className = 'form-controal'
  inp.value = value
  return inp
}