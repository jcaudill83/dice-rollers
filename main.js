const rollButton = document.querySelector('#roll-button')
const showButton =document.querySelector('#show-button')
let rolls = document.querySelector("#rolls")
let position = 0
const dieRolls = []

rollButton.addEventListener("click" , function() {
let input = rolls.value
let index = 0

while (index < input) {
let potato = Math.floor(Math.random(0) * 6) + 1
dieRolls.push(potato)
index += 1
}
console.log(dieRolls)
})

showButton.addEventListener("click" , function() {


while (condition) {
}

console.log(showButton)
})




