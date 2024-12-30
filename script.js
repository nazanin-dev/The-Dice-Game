const diceBtn = document.querySelector('.dice-stic');
const newBtn =  document.querySelector('.new-game');
let score0El =  document.querySelector('.score--0');
let score1El =  document.querySelector('.score--1');
const winner = document.querySelector('.winer');
const dicePic = document.querySelector('.dice-pic');
dicePic.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
winner.textContent = '';


let round = 0; // راند فعلی
let maxRounds = 6; // تعداد راندها
let scores = [0, 0];
let activePlayer = 0;

diceBtn.addEventListener('click',function(){
    if(round >= maxRounds){
        winner.textContent='Game Over! Please start a new game.'
        diceBtn.classList.add('hidden'); // غیرفعال کردن دکمه تاس
        winnerInt ()
        return
    }else {
    
    // 1-random dice
    const dice = Math.trunc(Math.random()*6 )+ 1;
    console.log('dice',dice);
    
    //2-display the dicePic
    dicePic.classList.remove('hidden');
    dicePic.src = `/pic/dice-${dice}.png`;
    //3-save in one variable
    scores[activePlayer] = scores[activePlayer] + dice;
    document.querySelector(`.score--${activePlayer}`).textContent = scores[activePlayer];
    console.log('active now',activePlayer);
    
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log('active badi:', activePlayer);
    round++;
    console.log('round:',round);
    document.querySelector('.player-first').classList.toggle('turn' , activePlayer === 0);
    document.querySelector('.player-sec').classList.toggle('turn' , activePlayer === 1);
    
    
    } 
})
function winnerInt (){
  if(scores[0] > scores[1]){
    winner.textContent = 'Player 1 Wins!🎉';
    document.querySelector('.player-first').classList.add('green');
  }else if(scores[0] == scores[1]) {
    winner.textContent = "It's a Draw!🤞";
    document.querySelector('.player-first').classList.add('green');
    document.querySelector('.player-sec').classList.add('green');
  }else{
    winner.textContent = 'Player 2 Wins!🎉';
    document.querySelector('.player-sec').classList.add('green');
  }
}

newBtn.addEventListener('click' , function(){
    round = 0;
    scores = [0, 0];
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    winner.textContent = '';
    dicePic.classList.add('hidden');
    diceBtn.classList.remove('hidden');
    document.querySelector('.player-first').classList.remove('green');
    document.querySelector('.player-sec').classList.remove('green');
})

//Modal part
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay =document.querySelector('.overlay');
const showModal=document.querySelector('.show-modal');


   //FUNCTIONS
const openingModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
}
const closingModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

showModal.addEventListener('click',openingModal);
closeModal.addEventListener('click', closingModal);
overlay.addEventListener('click',closingModal);

document.addEventListener('keydown',closingModal)
/////End MODAL