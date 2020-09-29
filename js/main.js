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


function rainbow (item, score) {
    if (score == 1) {item.style.color = '#ec008c'}
    if (score == 2) {item.style.color = '#68217a'}
    if (score == 3) {item.style.color = '#00188f'}
    if (score == 4) {item.style.color = '#00bcf2'}
    if (score == 5) {item.style.color = '#00b294'}
    if (score == 6) {item.style.color = '#009e49'}
    if (score == 7) {item.style.color = '#bad80a'}
    if (score == 8) {item.style.color = '#ff8c00'}
    if (score == 9) {item.style.color = '#e81123'}
    if (score == 10) {item.style.color = '#ec008c'}
}
var r
var g
var b
var rm
var gm
var bm


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

function generateNumber(numb , minNumb) {

    return Math.floor(Math.random() * (numb - minNumb) + minNumb)
}
function generateNumberInt(numb) {

    return Math.floor(Math.random() * (numb + 1))
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

        rainbow(item, state.score)

        isEnd()
    } else {
        state.fails++
        let failItem = document.getElementById(state.fails + '-fail')
        failItem.style.color = 'white'
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
            sign.innerHTML = `Уровень <div class="level-number level-number-end">${state.level - 1}</div> пройден!`
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

    var box

    resetPoints(1)

    if (state.level >= 5) {
        console.log('level ' + state.level);
        blackHearts(1)
    } if (state.level > 10) {
        burgundyHearts(1)
    }
     if (state.level < 5) {
       resetHeatrs(1)
    }

}


function resetHeatrs (i) {
    while (i < 4) {
        box = document.getElementById(i + '-fail'); box.style.color = 'red';
        i++
    }
}
function resetPoints (i) {
    while (i < 11) {
        box = document.getElementById(i); box.style.color = 'white';
        i++
    }
}


function blackHearts (i) {
    if (state.fails == 0) {
        while (i < 4) {
        console.log('black - ' + i)
        box = document.getElementById(i + '-fail'); box.style.color = '#190033';
        i++
        }
    }
    if (state.fails == 1) {
        i = 3
        while (i > 1) {
        console.log('black - ' + i)
        box = document.getElementById(i + '-fail'); box.style.color = '#190033';
        i--
        }
    }
    if (state.fails == 2) {
        i = 3
        while (i > 2) {
        console.log('black - ' + i)
        box = document.getElementById(i + '-fail'); box.style.color = '#190033';
        i--
        }
    }
}


function burgundyHearts (i) {
    if (state.fails == 0) {
        while (i < 4) {
        console.log('black - ' + i)
        box = document.getElementById(i + '-fail'); box.style.color = '#900C3F';
        i++
        }
    }
    if (state.fails == 1) {
        i = 3
        while (i > 1) {
        console.log('black - ' + i)
        box = document.getElementById(i + '-fail'); box.style.color = '#900C3F';
        i--
        }
    }
    if (state.fails == 2) {
        i = 3
        while (i > 2) {
        console.log('black - ' + i)
        box = document.getElementById(i + '-fail'); box.style.color = '#900C3F';
        i--
        }
    }
}
