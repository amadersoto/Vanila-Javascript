let li = create('li', 'list-item', 'four')
li.setAttribute('title', 'i am title')

let list = document.getElementById('list')
list.appendChild(li)


let div = create('div')
let p1 = create('p', 'para', 'lorem ipsum')
let p2 = create('p', 'para', 'lorem ipsum')

append(div, [p1, p2])

let container = document.getElementsByClassName('container')[0]
container.appendChild(div)

container.insertAdjacentElement('beforebegin', div) // this is new line in this file

function create(tagname, classname, innerhtml) {
  let tag = document.createElement(tagname)
  tag.classname = classname || ''
  tag.innerHTML = innerhtml || ''
  return tag
}


function append(parent, children) {
  children.forEach(child => parent.appendChild(child))
}

let firstChild = list.firstElementChild

setTimeout(() => {
  firstChild.innerHTML = firstChild.innerHTML + '(updated)'
  firstChild.style.background = 'black'
  firstChild.classList.add('text-success')
}, 5000)

setTimeout(() => {
  firstChild.firstChild.remove()
}, 2000)

let lastElement = list.lastElementChild.cloneNode(true)
lastElement.innerHTML = 'five'
list.appendChild(lastElement)