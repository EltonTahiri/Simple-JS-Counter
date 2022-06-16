let count = 0;
let number = document.querySelector("#number");

document.getElementById('decrease').onclick = function (){
    count--;
    document.getElementById('number').innerHTML = count
    number.style.color = "red"
}

document.getElementById('increase').onclick = function () {
    count++;
    document.getElementById('number').innerHTML = count;
    number.style.color = "green"
}

document.getElementById('reset').onclick = function() {
    count = 0;
    document.getElementById('number').innerHTML = count 
}


