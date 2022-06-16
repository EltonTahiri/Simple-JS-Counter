let count = 0;
let colors = ["red" , "green"]

document.getElementById('decrease').onclick = function (){
    count--;
    document.getElementById('number').innerHTML = count
}

document.getElementById('increase').onclick = function () {
    count++;
    document.getElementById('number').innerHTML = count;
}

document.getElementById('reset').onclick = function() {
    count = 0;
    document.getElementById('number').innerHTML = count
}


