document.getElementById('click').addEventListener('click', newfunction)

let first = 0
let second = 0
let total = 0

function newfunction () {
  first = document.getElementById('first-box').value
  first = parseInt(first)
  second = document.getElementById('second-box').value
  second = parseInt(second)
  for (let i = 0; i < second; i++) {
    total = total + first
  }
  alert(total)
}