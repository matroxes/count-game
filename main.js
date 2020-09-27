/* For Andrey
-----------------*/
var date

/*-------------*/

const placeForProblem = document.querySelector('.problem')
const ourForm = document.querySelector('.form')
const field = document.querySelector('.field')
const points = document.querySelector('.points')
const sign = document.querySelector('.sign')
const next = document.querySelector('.continue')


let btn = document.getElementById('btn')
btn.onclick = pressButton

let state = {
    score: 0,
    fails: 0
}

function updateProblem () {
    state.currentProblem = generateProblem()

    placeForProblem.innerHTML = `${state.currentProblem.randNumbOne} ${state.currentProblem.operator} ${state.currentProblem.randNumbTwo}`

    var x = Math.floor(Math.random() * 200);
    var y = Math.floor(Math.random() * 200);
    var z = Math.floor(Math.random() * 200);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    if (window.date == 8) {
    document.body.style.backgroundImage = 'url("kx8MT.gif")'
    document.body.style.backgroundSize = '100%;'
} else {
    document.body.style.background = bgColor;
}
}

updateProblem()

function generateNumber(numb) {

    return Math.floor(Math.random() * (numb + 1))
}

function generateProblem() {
    window.date = generateNumber(8)
    console.log(date);
    if (date == 8) {
    return {
        randNumbOne: 27,
        randNumbTwo: "09",
        operator: ['+', '-', 'x'][generateNumber(2)]
    }
  } else {
    return {
        randNumbOne: generateNumber(10),
        randNumbTwo: generateNumber(10),
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
        points.innerHTML = `${10 - state.score}`
        let item = document.getElementById(state.score)
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
            resetGame()
            sign.innerHTML = 'Уровень пройден!'
            next.innerHTML = 'Далее'
        }

        if (state.fails == 3) {
            resetGame()
            sign.innerHTML = 'Ты проиграл!'
            next.innerHTML = 'Заново'

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
    let items =  document.getElementById('1'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('2'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('3'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('4'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('5'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('6'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('7'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('8'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('9'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('10'); items.style.backgroundColor = '#fff';

    items =  document.getElementById('1' + '-fail'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('2' + '-fail'); items.style.backgroundColor = '#fff';
    items =  document.getElementById('3' + '-fail'); items.style.backgroundColor = '#fff';
}
