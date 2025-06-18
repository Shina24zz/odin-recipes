let circumferance;

const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");

const countLabel = document.getElementById("countLabel")

let count = 0;

increaseButton.onclick = function (){
    count = count +1;
    countLabel.textContent = count;
}

decreaseButton.onclick = function(){
    count = count -1;
    countLabel.textContent = count;
}

resetButton.onclick = function(){
    countLabel.textContent = 0;
}


//learning javascript properly