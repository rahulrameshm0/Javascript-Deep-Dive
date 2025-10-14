let screen = document.getElementById('input');

function clickbtn(value){
    screen.value += value
}

function clearscreen(){
    screen.value = "";
}

function findresult(){
    let result = eval(screen.value);
    screen.value = result;
};