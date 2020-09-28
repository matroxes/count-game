const placeForProblem = document.querySelector('.problem')
const ourForm = document.querySelector('.form')
const field = document.querySelector('.field')
const points = document.querySelector('.points')
const sign = document.querySelector('.sign')
const next = document.querySelector('.continue')
const level = document.querySelector('.level-number')


let btn = document.getElementById('btn')
btn.onclick = pressButton

var state = {
    score: 0,
    fails: 0,
    level: 1
}

let r
let g
let b

function updateProblem () {
    state.currentProblem = generateProblem()

    placeForProblem.innerHTML = `${state.currentProblem.randNumbOne} ${state.currentProblem.operator} ${state.currentProblem.randNumbTwo}`

    var x = Math.floor(Math.random() * (r - rm) + rm);
    var y = Math.floor(Math.random() * (g - gm) + gm);
    var z = Math.floor(Math.random() * (b - bm) + bm);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
}

updateProblem()

function generateNumber(numb) {

    return Math.floor(Math.random() * (numb + 1))
}

function generateProblem() {
    if (state.level == 1) {
        r = 30
        g = 200
        b = 30
        rm = 0
        gm = 50
        bm = 0
        return {
        randNumbOne: generateNumber(10),
        randNumbTwo: generateNumber(10),
        operator: ['+', '-'][generateNumber(1)]
    }
    }
    if (state.level == 2) {
        r = 30
        g = 220
        b = 150
        rm = 0
        gm = 100
        bm = 0
        return {
        randNumbOne: generateNumber(10),
        randNumbTwo: generateNumber(10),
        operator: ['+', '-', 'x'][generateNumber(2)]
    }
    }
    if (state.level == 3) {
        r = 30
        g = 150
        b = 220
        rm = 0
        gm = 0
        bm = 100
        return {
        randNumbOne: generateNumber(15),
        randNumbTwo: generateNumber(12),
        operator: ['+', '-', 'x', '-'][generateNumber(3)]
    }
    }
    if (state.level == 4) {
        r = 150
        g = 30
        b = 220
        rm = 0
        gm = 0
        bm = 100
        return {
        randNumbOne: generateNumber(15),
        randNumbTwo: generateNumber(15),
        operator: ['+', '-', 'x', '+', '-'][generateNumber(4)]
    }
    }
    if (state.level == 5) {
        r = 220
        g = 30
        b = 150
        rm = 100
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(15),
        randNumbTwo: generateNumber(20),
        operator: ['+', 'x', '+', '-'][generateNumber(3)]
    }
    }
    if (state.level == 6) {
        r = 200
        g = 30
        b = 30
        rm = 50
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(25),
        randNumbTwo: generateNumber(25),
        operator: ['+', '+', 'x', '+', '-'][generateNumber(4)]
    }
    }
    if (state.level > 6) {
        r = 200
        g = 200
        b = 200
        rm = 0
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(25),
        randNumbTwo: generateNumber(25),
        operator: ['+', '-', 'x'][generateNumber(2)]
    }
    }

}




ourForm.addEventListener('submit', submitFunction)

function submitFunction(event) {
    event.preventDefault()

    let correctAnswer
    let p = state.currentProblem
    if (p.operator == "+") correctAnswer = p.randNumbOne + parseInt(p.randNumbTwo, 10)
    if (p.operator == "-") correctAnswer = p.randNumbOne - parseInt(p.randNumbTwo, 10)
    if (p.operator == "x") correctAnswer = p.randNumbOne * parseInt(p.randNumbTwo, 10)

    if (field.value == correctAnswer) {
        updateProblem ()
        field.value = ''
        state.score++
        let item = document.getElementById(state.score)
        points.innerHTML = `${10 - state.score}`
        item.style.backgroundColor = '#2BFE72'
        isEnd()
    } else {
        state.fails++
        let failItem = document.getElementById(state.fails + '-fail')
        failItem.style.backgroundColor = '#ff5d5d'
        isEnd()
        placeForProblem.classList.add('wrong-animation')
        setTimeout(() => placeForProblem.classList.remove('wrong-animation'), 331)
    }
}

    /* check logick */
    function isEnd() {
        if (points.innerHTML == 0) {
            state.level++
            resetGame()
            sign.innerHTML = 'Уровень пройден!'
            next.innerHTML = 'Далее'
            level.innerHTML = state.level
        }

        if (state.fails == 3) {
            state.level = 1
            resetGame()
            sign.innerHTML = 'Ты проиграл!'
            next.innerHTML = 'Заново'
            level.innerHTML = state.level

        }
    }

function pressButton () {
    document.getElementById("send").disabled = false
    document.body.classList.remove("overlay-active");
    document.getElementById("input").focus()
    field.value = ''
}

function resetGame () {
    document.getElementById("send").disabled = true
    document.body.classList.add("overlay-active");

    updateProblem()
    state.score = 0;
    state.fails = 0;
    points.innerHTML = 10;

    let box
    let i = 1
    while (i < 11) {
        box =  document.getElementById(i); box.style.backgroundColor = '#fff';
        i++
    }
    i = 1
    while (i < 4) {
        box = document.getElementById(i + '-fail'); box.style.backgroundColor = '#fff';
        i++
    }

}

