let btn = document.getElementById('btn')

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
});

// remove element
// this is event delegation problem
[...list.children].forEach(li => {
  li.onclick = function (e) {
    e.target.remove()
  }
})

// we can remove by

list.addEventListener('click', function (e) {
  if (this.contains(e.target)) {
    e.target.remove()
  }
})