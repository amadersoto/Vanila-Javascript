let div = create('div')

let p1 = create('p', 'para', 'lorem ipsum')
let p2 = create('p', 'para', 'lorem ipsum')

append(div, [p1, p2])

document.getElementsByClassName('container')[0].appendChild(div)

function create(tagname, classname, innerhtml) {
  let tag = document.createElement(tagname)
  tag.classname = classname || ''
  tag.innerHTML = innerhtml || ''
  return tag
}


function append(parent, children) {
  children.forEach(child => parent.appendChild(child))
}