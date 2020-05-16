const rollButton = document.querySelector('#roll-button')
const showButton =document.querySelector('#show-button')
let rolls = document.querySelector("#rolls")
let position = 0
const dierolls = []

rollButton.addEventListener("click" , function() {
let input = rolls.value
let index = 0

while (index < input) {
//math.random and math.floor
let potato = Math.floor(Math.random(0) * 6) + 1
dierolls.push(potato)

index += 1

}

console.log(dierolls)


})
showButton.addEventListener("click" , function() {


    
console.log("show button clicked")
})