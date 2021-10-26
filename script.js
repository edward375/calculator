const buttons = document.querySelectorAll("button")
let result =document.querySelector('.result');
buttons.forEach(item => {
    item.addEventListener('click' ,(e) => {
        if (e.target.innerText !== "=" && e.target.innerText !== "C") {
            result.textContent += e.target.textContent
        }
        else if (e.target.innerText==="C"){
            buttons.textContent="";
            result.textContent= "";
        }
        else if(e.target.innerText === "=" && e.target.innerText !== "C"){
            let arr = buttons.textContent.split("");
            calculator(arr[0], arr[1], arr[2]);
        }
    })});

