let screen = document.getElementById('input');

function clickbtn(value){
    // console.log("Button clicked:", value);
    // console.log("Before update, screen.value:", screen.value);
    screen.value += value
}

function clearscreen(){
    screen.value = "";
}

function findresult(){
    let result = eval(screen.value);
    screen.value = result;
};
