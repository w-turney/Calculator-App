const display = document.querySelector('.display')
const expression = document.querySelector('.expression')
const answer = document.querySelector('.answer')
const toggleIndicator = document.querySelector('.toggle-indicator')

const body = document.getElementsByTagName('body')[0]
const toggleElement = document.querySelector('.toggle')
const keypad = document.querySelector('.keypad')
const buttons = Array.from(document.getElementsByTagName('button'))
const header = document.querySelector('.header')

const togglePos = [1, 2, 3];
let counter = 1;

document.addEventListener('click', handleClick)

function handleClick(e) {

//pass expression.textContent into functions (default parameter if empty string?)

    if (e.target.matches('.toggle')) {
        toggle()
    }
    if (e.target.matches('[data-number]')) {
        appendNumber(e.target.dataset.number)
    }
    if (e.target.matches('#del')) {
        del()
    }
    if (e.target.matches('[data-operation]')) {
        operate(e.target.dataset.operation)
    }
    if (e.target.matches('#equals')) {
        equals()
    }
    if (e.target.matches('#reset')) {
        reset()
    }
}

function toggle() {
    toggleIndicator.style.gridColumn = `${togglePos[counter]}`
    if (counter == (togglePos.length - 1)) {
        counter = 0
    } else {
        counter++
    }
    let theme = toggleIndicator.style.gridColumn;
    changeTheme(theme)
}

function changeTheme(theme) {
    if (theme == 1) {
        body.style.backgroundColor = 'hsl(222, 26%, 31%)'
        toggleElement.style.backgroundColor = 'hsl(223, 31%, 20%)'
        display.style.backgroundColor = 'hsl(224, 36%, 15%)'
        display.style.color = 'hsl(0, 0%, 100%)'
        keypad.style.backgroundColor = 'hsl(223, 31%, 20%)'
        header.style.color = 'hsl(0, 0%, 100%)'
        buttons.forEach(button => {
            if (button.id === 'equals') {
                button.style.backgroundColor = 'hsl(6, 63%, 50%)'
                button.style.color = 'hsl(0, 0%, 100%)'
            } else
            if (button.id === 'del' || button.id === 'reset') {
                button.style.backgroundColor = 'hsl(225, 21%, 49%)'
                button.style.color = 'hsl(0, 0%, 100%)'
            } else {
                button.style.backgroundColor = 'hsl(30, 25%, 89%)'
                button.style.color = 'hsl(221, 14%, 31%)'
            }
        })
    } else
    if (theme == 2) {
        body.style.backgroundColor = 'hsl(0, 0%, 90%)'
        toggleElement.style.backgroundColor = 'hsl(0, 5%, 81%)'
        display.style.backgroundColor = 'hsl(0, 0%, 93%)'
        display.style.color = 'hsl(60, 10%, 19%)'
        keypad.style.backgroundColor = 'hsl(0, 5%, 81%)'
        header.style.color = 'hsl(60, 10%, 19%)'
        buttons.forEach(button => {
            if (button.id === 'equals') {
                button.style.backgroundColor = 'hsl(25, 98%, 40%)'
                button.style.color = 'hsl(0, 0%, 100%)'
            } else
            if (button.id === 'del' || button.id === 'reset') {
                button.style.backgroundColor = 'hsl(185, 42%, 37%)'
                button.style.color = 'hsl(0, 0%, 100%)'
            } else {
                button.style.backgroundColor = 'hsl(45, 7%, 89%)'
                button.style.color = 'hsl(60, 10%, 19%)'
            }
        })
    } else {
        body.style.backgroundColor = 'hsl(268, 75%, 9%)'
        toggleElement.style.backgroundColor = 'hsl(268, 71%, 12%)'
        display.style.backgroundColor = 'hsl(268, 71%, 12%)'
        display.style.color = 'hsl(52, 100%, 62%)'
        keypad.style.backgroundColor = 'hsl(268, 71%, 12%)'
        header.style.color = 'hsl(52, 100%, 62%)'
        buttons.forEach(button => {
            if (button.id === 'equals') {
                button.style.backgroundColor = 'hsl(176, 100%, 44%)'
                button.style.color = 'hsl(198, 20%, 13%)'
            } else
            if (button.id === 'del' || button.id === 'reset') {
                button.style.backgroundColor = 'hsl(281, 89%, 26%)'
                button.style.color = 'hsl(0, 0%, 100%)'
            } else {
                button.style.backgroundColor = 'hsl(268, 47%, 21%)'
                button.style.color = 'hsl(52, 100%, 62%)'
            }
        })

    }
}

function appendNumber(number) {
    if (number == '.' && expression.textContent.includes('.')) {
        return
    }
    answer.textContent = '';
    expression.textContent += number;
}

function del() {
    if (expression.textContent) {
        expression.textContent = expression.textContent.substring(0, expression.textContent.length -1)
    }
}

function operate(operator) {
    if (expression.textContent) {
        expression.textContent += operator;
    } else
    return;
}

function equals() {
    if (expression.textContent) {
        answer.textContent = `${eval(expression.textContent)}`
        expression.textContent = ''
    }
}

function reset() {
    answer.textContent = ''
    expression.textContent = ''
}



