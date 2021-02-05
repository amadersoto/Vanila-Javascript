let title = document.getElementById('title')
title.style.fontSize = '40px'
title.style.color = 'red'
title.style.background = 'black'


let styleObj = {
  background: '#222',
  color: '#fff',
  fontSize: '40px'
}

let list = document.getElementById('list');

[...list.children].forEach(li => Object.assign(li.style, styleObj))

Object.assign(list.style, styleObj)