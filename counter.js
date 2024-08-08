let countlabel = 0;

document.getElementById(`love`).onclick=function(){
    countlabel ++;
    document.getElementById(`count`).textContent = countlabel;
}

document.getElementById(`resetBtn`).onclick = function(){
    countlabel = 0;
    document.getElementById(`count`).textContent = countlabel;
}

document.getElementById(`decreaseBtn`).onclick = function(){
    countlabel--;
    document.getElementById(`count`).textContent = countlabel
}