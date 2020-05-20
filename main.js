const rollButton = document.querySelector('#roll-button')
const showButton = document.querySelector('#show-button')
let rolls = document.querySelector("#rolls")
const sum = document.querySelector("#sum")
const list = document.querySelector("#list")
const refresh = document.querySelector("#refresh")
let ferret = 0
let position = 0
const dieRolls = [] //first rubric point

rollButton.addEventListener("click", function () { //second rubric point
    let input = rolls.value
    let index = 0 //third rubric point

    while (index < input) {
        let potato = Math.floor(Math.random(0) * 6) + 1 //fourth rubric point
        dieRolls.push(potato) //fifth rubric point
        ferret += potato
        index += 1
    }
    sum.innerHTML = ferret
    console.log(dieRolls)
})

//need to add something to be able to show the sum of all dice. sixth rubric point

showButton.addEventListener("click", function () {
    let index = 0

    // this event is to show what each die is showing
    //seventh rubric point
    while (index < dieRolls.length) {
        let listItem = document.createElement("li")
        listItem.innerHTML = dieRolls[index]
        list.appendChild(listItem)



        index += 1
    }


})