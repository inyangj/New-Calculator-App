const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const  body = document.querySelector('.container');
const toggle = document.getElementById('toggleDark');
const mainBody = document.querySelector('body');


toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.boxShadow = 'none'
        mainBody.style.background = 'black'
        output.style.color = 'black'
        equalButton.style.background = 'rgb(9, 52, 30)'
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.boxShadow = '5px 5px 10px #b6acac, -5px -5px 10px #ffff';
        mainBody.style.background = 'rgb(9, 52, 30)';
        output.style.color = 'white'
        equalButton.style.background = 'rgb(16, 215, 112)'
        body.style.transition = '2s';
    }
});


buttons.forEach(button => {
button.addEventListener('click', () => {
    const buttonValue = button.innerText;
    if (buttonValue === 'AC') {
    output.textContent = '0';
    } else if (buttonValue === '%') {
        try {
            output.textContent = eval(output.textContent + '/100');
        } catch (error) {
            output.textContent= 'Error';
        }
    } else if (buttonValue === '÷') {
        output.textContent += '/'
    } else if (buttonValue === '×') {
        output.textContent += '*'
    }
    else if (buttonValue === '=') {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = 'Error';
    }
    } else {
    if (output.textContent === '0') {
        output.textContent = buttonValue;
    } else {
        output.textContent += buttonValue;
    }
    }
});
});

clearButton.addEventListener('click', () => {
    output.textContent = output.textContent.slice (0, -1)
});