

const buttons = document.querySelectorAll("button")

buttons.forEach(item => {
    item.addEventListener('click' ,(e) => {
        let result =document.querySelector('.rezultat').value;
        const one = document.querySelector(".input1").value
        const two = document.querySelector(".input2").value

        if (e.target.innerHTML === "+" ) {
            result = plus(one,two)
            console.log(result)
        }
        else if (e.target.innerHTML==="-"){
            result=minus(one,two)
            console.log(result)
        }
        else if (e.target.innerHTML==="/"){
            result=devide(one,two)
            console.log(result)
        }
        else if (e.target.innerHTML==="*"){
            result=multiply(one,two)
            console.log(result)
        }

    })});

const plus = (num1, num2) =>  num1 + num2


const minus = (num1, num2) =>num1 - num2


