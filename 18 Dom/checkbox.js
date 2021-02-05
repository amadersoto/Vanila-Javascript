let skills = document.getElementsByName('skills');

let result = document.getElementById('result')
let checkbox = [];

[...skills].forEach(skill => {
  skill.addEventListener('change', function (e) {
    if (e.target.checked) {
      checkbox.push(e.target.value)
      showResult(result, checkbox)
    } else {
      let ind = checkbox.indexOf(e.target.value)
      checkbox.splice(ind, 1)
      showResult(result, checkbox)
    }
  })
})

function showResult(parent, skills) {
  let result = ''
  skills.forEach((skill, index) => {
    result += `${index + 1} ${skill} `
  })
  parent.innerHTML = result
}