const saveNumbers = [];
const realNumbers = [];
const numbers = document.querySelector(".numbers");
const selectBtn = document.querySelector(".select");
const resetBtn = document.querySelector(".reset");
const highLevelCheck = document.querySelector("#levelSelect");
const count = document.querySelector("#count");

function selectNumbers() {
    if(saveNumbers.length<20) {
        let rand = Math.floor(Math.random()*40)+1;
        while(saveNumbers.includes(rand)){
            rand = Math.floor(Math.random()*40)+1;
        }
        if(rand>30 && rand<40) {
            saveNumbers.push(rand);
            realNumbers.push(rand-20);
        }
        else if(rand===40){
            saveNumbers.push(rand);
            realNumbers.push("⭐");
        }
        else {
            saveNumbers.push(rand);
            realNumbers.push(rand);
        }   
        return realNumbers[realNumbers.length-1];
    }
    else {
        return 0;
    }
    
}

function showNumber(){
    number = selectNumbers();
    let countNumber = realNumbers.length;
    if(number===0) {
        resetNumber();
    }
    else {
        const box = document.createElement("div");
        box.innerText = `${number}`;
        numbers.appendChild(box);
        box.classList.add("numberBox");
        box.classList.add(countNumber);
        count.value = `${countNumber}`;
        if (countNumber === 20) {
            count.classList.add("finish");
        }
    }
   
}

function resetNumber() {

    while(numbers.hasChildNodes()){
        numbers.removeChild(numbers.lastChild);
    }
    saveNumbers.length = 0;
    realNumbers.length = 0;
    count.classList.remove("finish");
    count.value = `${realNumbers.length}`;
}

function highLevel() {
    const high = document.querySelectorAll(".high");
    const normal = document.querySelectorAll(".normal");
    if(highLevelCheck.checked) {
        for(i=0; i<high.length; i++) {
            high[i].style.display = "";
            normal[i].style.display = "none";
        }
    }
    else {
        for(i=0; i<high.length; i++) {
            high[i].style.display = "none";
            normal[i].style.display = "";
        }
    }
}


function init() {
    selectBtn.addEventListener("click",showNumber);
    resetBtn.addEventListener("click",resetNumber);
    highLevelCheck.addEventListener("change",highLevel);
}
init();
