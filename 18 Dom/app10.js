let btn = document.getElementById('btn')

// btn.onclick = function (e) {
//   console.log('i clicked')
// }

// btn.addEventListener('click', function (e) {
//   alert('hello')
// })

let box = document.getElementById('box')

box.addEventListener('mousemove', function (e) {
  document.getElementById('x').innerHTML = e.offsetX
  document.getElementById('y').innerHTML = e.offsetY
  if (e.offsetX == e.offsetY) {
    alert('50,50')
  }
})
//

let list = document.getElementById('list')

btn.addEventListener('click', function (e) {
  let clone = list.lastElementChild.cloneNode(true)
  clone.innerHTML = 'new created item'
  list.appendChild(clone)
})