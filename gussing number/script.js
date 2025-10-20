'user strict'
/*
console.log(document.querySelector('.message').textContent);
const random_number = Math.random() 
if (document.querySelector('.guess') === random_number){
    document.querySelector('.message').textContent = 'Correct Number 🎉'
}else if (document.querySelector('.guess') < random_number){
    document.querySelector('.message').textContent = 'Too low 🎉'
}else if (document.querySelector('.guess') > random_number){
    document.querySelector('.message').textContent = 'Too High 🎉'
}

document.querySelector('.number').textContent = 13;
document.querySelector('.label-score').textContent = 50;
document.querySelector('.guess').value = 20;
*/

let computer_number = Math.trunc(Math.random() * 20) + 1;
let count = 20;
let highscore = 0;

document.querySelector('.score').textContent = count;
document.querySelector('.highscore').textContent = 0;

function displayMessage(messages){
    document.querySelector('.message').textContent = messages;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        document.querySelector('.message').textContent = "Enter a Number";
    }else if (guess === computer_number){
        displayMessage('Correct Number 🎉')
        document.querySelector('.number').textContent = computer_number
        document.querySelector('body').style.background = 'green';

        if (count > highscore){
            highscore = count;
            document.querySelector('.highscore').textContent = highscore;
        }

    }else if (guess !== computer_number){
        count --
        if (count > 1){
            displayMessage(guess > computer_number ? "Too High" : "Too Low..");
            // document.querySelector('.message').textContent = guess > computer_number ? "Too High" : "Too Low..";
        }else{
             displayMessage('You have lost the game')
            // document.querySelector('.message').textContent = "You have lost the game";
        }
        document.querySelector('.score').textContent = count;
        // document.querySelector('body').style.background = 'black';
    }
});

document.querySelector('.again').addEventListener('click', function(){
    count = 20
    computer_number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guesing');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = 'black';
})

    // }else if (guess > computer_number){
    //     if (count < 1){
    //         document.querySelector('.message').textContent = "You have lost the game";
    //     }else{
    //         count -= 1
    //         document.querySelector('.message').textContent = "Too High";
    //     }
    //     document.querySelector('.score').textContent = count
        
    //     document.querySelector('body').style.background = 'black'
        
    // }else if (guess < computer_number){
    //     if (count < 1){
    //         document.querySelector('.message').textContent = "You have lost the game 💥";
    //         document.querySelector('.message').style.color = "Red";
    //     }else{
    //         count -= 1
    //         document.querySelector('.message').textContent = "Too Low";
    //     }
    //     document.querySelector('.score').textContent = count
    //     document.querySelector('body').style.background = 'black'
    // }
    // });

