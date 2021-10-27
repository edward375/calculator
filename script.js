const buttons = document.querySelectorAll("button");

let resultOutput = document.querySelector('.result');

buttons.forEach(item => {
    item.addEventListener('click' ,(e) => {

        const one = +document.querySelector(".input1").value;
        const two = +document.querySelector(".input2").value;

        if (e.target.innerHTML === "+" ) {
            resultOutput.textContent = `reusltatul adunarii este: ${plus(one, two)}`;
        }

        else if (e.target.innerHTML==="-"){
            resultOutput.textContent = `reusltatul scaderii este: ${minus(one, two)}`;
        }
        else if (e.target.innerHTML==="/"){
            resultOutput.textContent = `reusltatul inpartirii este: ${devide(one, two)}`;
        }
        else if (e.target.innerHTML==="*"){
            resultOutput.textContent = `reusltatul inmultirii este: ${multiply(one, two)}`;
        }

    })});


const plus = (num1, num2) =>  num1 + num2;

const minus = (num1, num2) => num1 - num2;

const devide = (num1, num2) => num1 / num2;

const multiply = (num1,num2) => num1 * num2;



