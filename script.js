let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let gameOver = document.getElementById('end-game-screen')
let temp = 0;

one.onclick = () => {
    if (temp == 0 || temp == 'O'){
        one.innerHTML = 'X'
        temp = one.innerHTML
        one.onclick = null
    } else {
        one.innerHTML = 'O'
        temp = one.innerHTML
        one.onclick = null

    }
    if (((one.innerHTML == 'X' && two.innerHTML == 'X' && three.innerHTML == 'X') || (one.innerHTML == 'O' && two.innerHTML == 'O' && three.innerHTML == 'O')) || ((one.innerHTML == 'X' && four.innerHTML == 'X' && seven.innerHTML == 'X') || (one.innerHTML == 'O' && four.innerHTML == 'O' && seven.innerHTML == 'O')) || ((one.innerHTML == 'X' && five.innerHTML == 'X' && nine.innerHTML == 'X') || (one.innerHTML == 'O' && five.innerHTML == 'O' && nine.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${one.innerHTML} has won!`
    }
}
two.onclick = () => {
    if (temp == 0 || temp == 'O'){
        two.innerHTML = 'X'
        temp = two.innerHTML
        two.onclick = null
    } else {
        two.innerHTML = 'O'
        temp = two.innerHTML
        two.onclick = null

    }
    if (((one.innerHTML == 'X' && two.innerHTML == 'X' && three.innerHTML == 'X') || (one.innerHTML == 'O' && two.innerHTML == 'O' && three.innerHTML == 'O')) || ((two.innerHTML == 'X' && five.innerHTML == 'X' && eight.innerHTML == 'X') || (two.innerHTML == 'O' && five.innerHTML == 'O' && eight.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${two.innerHTML} has won!`
    }
}
three.onclick = () => {
    if (temp == 0 || temp == 'O'){
        three.innerHTML = 'X'
        temp = three.innerHTML
        three.onclick = null
    } else {
        three.innerHTML = 'O'
        temp = three.innerHTML
        three.onclick = null

    }
    if (((one.innerHTML == 'X' && two.innerHTML == 'X' && three.innerHTML == 'X') || (one.innerHTML == 'O' && two.innerHTML == 'O' && three.innerHTML == 'O')) || ((three.innerHTML == 'X' && five.innerHTML == 'X' && seven.innerHTML == 'X') || (three.innerHTML == 'O' && five.innerHTML == 'O' && seven.innerHTML == 'O')) || ((three.innerHTML == 'X' && six.innerHTML == 'X' && nine.innerHTML == 'X') || (one.innerHTML == 'O' && five.innerHTML == 'O' && nine.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${three.innerHTML} has won!`
    }
}
four.onclick = () => {
    if (temp == 0 || temp == 'O'){
        four.innerHTML = 'X'
        temp = four.innerHTML
        four.onclick = null
    } else {
        four.innerHTML = 'O'
        temp = four.innerHTML
        four.onclick = null

    }
    if (((four.innerHTML == 'X' && five.innerHTML == 'X' && six.innerHTML == 'X') || (four.innerHTML == 'O' && five.innerHTML == 'O' && six.innerHTML == 'O')) || ((one.innerHTML == 'X' && four.innerHTML == 'X' && seven.innerHTML == 'X') || (one.innerHTML == 'O' && four.innerHTML == 'O' && seven.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${four.innerHTML} has won!`
    }
}
five.onclick = () => {
    if (temp == 0 || temp == 'O'){
        five.innerHTML = 'X'
        temp = five.innerHTML
        five.onclick = null
    } else {
        five.innerHTML = 'O'
        temp = five.innerHTML
        five.onclick = null

    }
    if (((one.innerHTML == 'X' && five.innerHTML == 'X' && nine.innerHTML == 'X') || (one.innerHTML == 'O' && five.innerHTML == 'O' && nine.innerHTML == 'O')) || ((three.innerHTML == 'X' && five.innerHTML == 'X' && seven.innerHTML == 'X') || (three.innerHTML == 'O' && five.innerHTML == 'O' && seven.innerHTML == 'O')) || ((two.innerHTML == 'X' && five.innerHTML == 'X' && eight.innerHTML == 'X') || (two.innerHTML == 'O' && five.innerHTML == 'O' && eight.innerHTML == 'O')) || ((four.innerHTML == 'X' && five.innerHTML == 'X' && six.innerHTML == 'X') || (four.innerHTML == 'O' && five.innerHTML == 'O' &&  six.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${five.innerHTML} has won!`
    }
}
six.onclick = () => {
    if (temp == 0 || temp == 'O'){
        six.innerHTML = 'X'
        temp = six.innerHTML
        six.onclick = null
    } else {
        six.innerHTML = 'O'
        temp = six.innerHTML
        six.onclick = null

    }
    if (((six.innerHTML == 'X' && five.innerHTML == 'X' && four.innerHTML == 'X') || (six.innerHTML == 'O' && five.innerHTML == 'O' && four.innerHTML == 'O')) || ((three.innerHTML == 'X' && six.innerHTML == 'X' && nine.innerHTML == 'X') || (three.innerHTML == 'O' && six.innerHTML == 'O' && nine.innerHTML == 'O')) || ((three.innerHTML == 'X' && six.innerHTML == 'X' && nine.innerHTML == 'X') || (one.innerHTML == 'O' && five.innerHTML == 'O' && nine.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${six.innerHTML} has won!`
    }
}
seven.onclick = () => {
    if (temp == 0 || temp == 'O'){
        seven.innerHTML = 'X'
        temp = seven.innerHTML
        seven.onclick = null
    } else {
        seven.innerHTML = 'O'
        temp = seven.innerHTML
        seven.onclick = null
    }
    if (((seven.innerHTML == 'X' && four.innerHTML == 'X' && one.innerHTML == 'X') || (seven.innerHTML == 'O' && four.innerHTML == 'O' && one.innerHTML == 'O')) || ((seven.innerHTML == 'X' && five.innerHTML == 'X' && three.innerHTML == 'X') || (seven.innerHTML == 'O' && five.innerHTML == 'O' && three.innerHTML == 'O')) || ((seven.innerHTML == 'X' && eight.innerHTML == 'X' && nine.innerHTML == 'X') || (seven.innerHTML == 'O' && eight.innerHTML == 'O' && nine.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${seven.innerHTML} has won!`
    }
}
eight.onclick = () => {
    if (temp == 0 || temp == 'O'){
        eight.innerHTML = 'X'
        temp = eight.innerHTML
        eight.onclick = null
    } else {
        eight.innerHTML = 'O'
        temp = eight.innerHTML
        eight.onclick = null

    }
    if (((seven.innerHTML == 'X' && eight.innerHTML == 'X' && nine.innerHTML == 'X') || (seven.innerHTML == 'O' && eight.innerHTML == 'O' && nine.innerHTML == 'O')) || ((two.innerHTML == 'X' && five.innerHTML == 'X' && eight.innerHTML == 'X') || (two.innerHTML == 'O' && five.innerHTML == 'O' && eight.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${eight.innerHTML} has won!`
    }
}
nine.onclick = () => {
    if (temp == 0 || temp == 'O'){
        nine.innerHTML = 'X'
        temp = nine.innerHTML
        nine.onclick = null
    } else {
        nine.innerHTML = 'O'
        temp = nine.innerHTML
        nine.onclick = null

    }
    if (((nine.innerHTML == 'X' && six.innerHTML == 'X' && three.innerHTML == 'X') || (nine.innerHTML == 'O' && six.innerHTML == 'O' && three.innerHTML == 'O')) || ((nine.innerHTML == 'X' && five.innerHTML == 'X' && one.innerHTML == 'X') || (nine.innerHTML == 'O' && five.innerHTML == 'O' && one.innerHTML == 'O')) || ((seven.innerHTML == 'X' && eight.innerHTML == 'X' && nine.innerHTML == 'X') || (seven.innerHTML == 'O' && eight.innerHTML == 'O' && nine.innerHTML == 'O'))){
        gameOver.style.backgroundColor = '#000'
        gameOver.style.width = '300px'
        gameOver.style.height = '300px'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '1'

        gameOver.innerHTML = `${nine.innerHTML} has won!`
    }
}

