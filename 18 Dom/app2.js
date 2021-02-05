let li = create('li', 'selim', 'hello devil')
li.setAttribute('title', 'i am title')

let select = document.getElementById('list')
select.appendChild(li)


function create(tagname, classname, innerhtml) {
  let tag = document.createElement(tagname)
  tag.className = classname
  tag.innerHTML = innerhtml
  return tag
}
