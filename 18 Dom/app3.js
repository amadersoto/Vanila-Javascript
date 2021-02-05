let li = create('li', 'js', 'lorem ipsum')
li.setAttribute('title', 'i am title')


append('list', li)


function create(tagname, classname, innerhtml) {
  let tag = document.createElement(tagname)
  tag.classname = classname || ''
  tag.innerHTML = innerhtml || ''
  return tag
}

function append(id, tagname) {
  let select = document.getElementById(id)
  let add = select.appendChild(tagname)
  return add
}
