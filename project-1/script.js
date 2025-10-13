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

const computer_number = Math.trunc(Math.random() * 20) + 1;
let count = 20;
document.querySelector('.score').textContent = count;
document.querySelector('.highscore').textContent = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        document.querySelector('.message').textContent = "Enter a Number";
    }else if(guess === computer_number){
        document.querySelector('.message').textContent = "Correct Number";
        document.querySelector('.number').textContent = computer_number
        count += 1
        document.querySelector('.score').textContent = count
        document.querySelector('.highscore').textContent = count
        document.querySelector('body').style.background = 'green'
       

    }else if (guess > computer_number){
        if (count < 1){
            document.querySelector('.message').textContent = "You have lost the game";
        }else{
            count -= 1
            document.querySelector('.message').textContent = "Too High";
        }
        document.querySelector('.score').textContent = count
        
        document.querySelector('body').style.background = 'black'
        
    }else if (guess < computer_number){
        if (count < 1){
            document.querySelector('.message').textContent = "You have lost the game 💥";
            document.querySelector('.message').style.color = "Red";
        }else{
            count -= 1
            document.querySelector('.message').textContent = "Too Low";
        }
        document.querySelector('.score').textContent = count
        document.querySelector('body').style.background = 'black'
        }
    });
