let computer = 0;
let user = 0;

const rock= document.getElementById('rock');
const paper= document.getElementById('paper');
const scissors= document.getElementById('scissors');
const computerScore= document.getElementById('computer-score');
const userScore= document.getElementById('user-score');
const message=document.getElementById('message')
const gameOver=document.getElementById('game-over')
const startAgain=document.getElementById('start-again')
const userLable=document.getElementById('user-label');
const computerLable=document.getElementById('computer-label');
const reset =document.getElementById('reset')






function randomNumber(){
    const choices=['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    return choices[random]
}

function win(u,c){
    user++
    let uUpper = u.toUpperCase()
    let cUpper = c.toUpperCase()

    userScore.innerHTML=user
    message.innerHTML= `Your choice ${uUpper} and computer choice ${cUpper}. You win! 😄` 
    userLable.style='background-color:purple';
    computerLable.style='background-color:beige'

    
    
    if(user==10){
        computer =0;
        user=0;
        gameOver.innerHTML='GAME OVER!!!';
        startAgain.innerHTML='START AGAIN';
    }

}

function lose(u,c){
    computer++
    let uUpper = u.toUpperCase()
    let cUpper = c.toUpperCase()
    computerScore.innerHTML=computer
    message.innerHTML= `Your choice ${uUpper} and computer choice ${cUpper}. Computer win! 😲` 
    userLable.style='background-color:beige';
    computerLable.style='background-color:purple'
    if(computer==0){
        computer =0;
        user=0;
        gameOver.innerHTML='GAME OVER!!!';
        startAgain.innerHTML='START AGAIN';
    }
}


function draw(u,c){
    message.innerHTML= ' DRAW 😓'
    userLable.style='background-color:beige';
    computerLable.style='background-color:beige'


    console.log('draw')
    
}

function game(userchoice){
    const computerChoice = randomNumber();
    switch(userchoice+computerChoice){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userchoice, computerChoice)
            break;
        case 'rockpaper':
        case 'papercissors':
        case 'scissorsrock':
            lose(userchoice, computerChoice)
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userchoice, computerChoice)
        }
}


function playAgain (){
    reset.addEventListener('click', function(){
computer =0;
user=0;
computerScore.innerHTML=0;
userScore.innerHTML=0;
message.innerHTML=""
userLable.style='background-color:beige';
computerLable.style='background-color:beige';

    })

    
}

function main(){
rock.addEventListener('click', function(){
    game('rock')
})

paper.addEventListener('click', function(){
    game('paper')
})

scissors.addEventListener('click', function(){
    game('scissors')
})
}

main()
playAgain()