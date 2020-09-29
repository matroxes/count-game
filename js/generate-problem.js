

function generateProblem() {

    if (state.level == 1) {
        console.log('level ' + state.level);
        r = 30
        g = 200
        b = 150
        rm = 0
        gm = 100
        bm = 0
        return {
        randNumbOne: generateNumber(10, 0),
        randNumbTwo: generateNumber(10, 0),
        operator: ['+', '-'][generateNumberInt(1)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 2) {
        console.log('level ' + state.level);
        r = 30
        g = 200
        b = 150
        rm = 0
        gm = 100
        bm = 0
        return {
        randNumbOne: generateNumber(10, 0),
        randNumbTwo: generateNumber(10, 0),
        operator: ['+', '-', 'x'][generateNumberInt(2)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 3) {
        console.log('level ' + state.level);
        r = 30
        g = 150
        b = 220
        rm = 0
        gm = 0
        bm = 100
        return {
        randNumbOne: generateNumber(15, 0),
        randNumbTwo: generateNumber(12, 0),
        operator: ['+', '-', 'x', '-'][generateNumberInt(3)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 4) {
        console.log('level ' + state.level);
        r = 150
        g = 30
        b = 220
        rm = 0
        gm = 0
        bm = 100
        return {
        randNumbOne: generateNumber(15, 0),
        randNumbTwo: generateNumber(15, 0),
        operator: ['+', '-', 'x', '+', '-'][generateNumberInt(4)],
        r, g, b, rm, gm, bm
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
        randNumbOne: generateNumber(15, 0),
        randNumbTwo: generateNumber(15, 0),
        operator: ['+', 'x', '+', '-'][generateNumberInt(3)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 6) {
        console.log('level ' + state.level);
        r = 200
        g = 30
        b = 30
        rm = 50
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(15, -10),
        randNumbTwo: generateNumber(15, 0),
        operator: ['+', '+', 'x', '+', '-'][generateNumberInt(4)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 7) {
        console.log('level ' + state.level);
        r = 200
        g = 200
        b = 200
        rm = 0
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(15, -15),
        randNumbTwo: generateNumber(15, 0),
        operator: ['+', '-', 'x', '+'][generateNumberInt(3)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 8) {
        console.log('level ' + state.level);
        r = 200
        g = 200
        b = 200
        rm = 0
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(20, -15),
        randNumbTwo: generateNumber(15, 0),
        operator: ['+', '-', 'x', '+'][generateNumberInt(3)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 9) {
        console.log('level ' + state.level);
        r = 200
        g = 200
        b = 200
        rm = 0
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(20, -20),
        randNumbTwo: generateNumber(15, 0),
        operator: ['+', '-', 'x', '+' ][generateNumberInt(3)],
        r, g, b, rm, gm, bm
    }
    }
    if (state.level == 10) {
        console.log('level ' + state.level);
        r = 200
        g = 200
        b = 200
        rm = 0
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(15, -15),
        randNumbTwo: generateNumber(15, 0),
        operator: ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '+'][generateNumberInt(9)],
        r, g, b, rm, gm, bm

    }
    }
    if (state.level > 10) {
        console.log('level ' + state.level);
        r = 200
        g = 200
        b = 200
        rm = 0
        gm = 0
        bm = 0
        return {
        randNumbOne: generateNumber(20, -20),
        randNumbTwo: generateNumber(25, 0),
        operator: ['+', '-', 'x', '+' ][generateNumberInt(3)],
        r, g, b, rm, gm, bm
    }
    }

}
