'use strict';
//число-ответ
let secretNumber = Math.trunc(Math.random()*20) + 1;
//начальный счет в игре
let score = 20;
//начальный лучший результат
let highestscore = 0;

//метод для переопределения текста в параграфе guess-message
const displayGuessMessage = function(message){
   document.querySelector('.guess-message').textContent = message;
}

//метод для переопредения очков
const changeScore = function(score){
   document.querySelector('.score').textContent = score;
}

//обработка события нажатия на кнопку "проверить"
document.querySelector('.check').addEventListener('click', function(){
   // получаем число из поля
   let inn = Number(document.querySelector('.number-input').value);
   // если поле пустое
   if (!inn){
      displayGuessMessage('Введите число!');
   }
   else if (score > 1){
      // если число не подходит
      if (inn != secretNumber){
         displayGuessMessage(inn > secretNumber ? 'Слишком много!' : 'Слишком мало!');
         score--;
         changeScore(score);
      }
      // число подходит
      else{
         displayGuessMessage('Правильно!');
         document.body.style.backgroundColor = 'green';
         document.querySelector('.question').textContent = secretNumber;
         if (score > highestscore){
            highestscore = score;
            document.querySelector('.highscore').textContent = score;
         }
      }
   }
   // очки < 1
   else {
      displayGuessMessage('Game over!');
      changeScore(0);
   }
})

// обработка события нажатия на кнопку "сначала"
document.querySelector('.again').addEventListener('click', function(){
   document.body.style.backgroundColor = 'black';
   score = 20;
   changeScore(score);
   displayGuessMessage('Начни угадывать');
   document.querySelector('.question').textContent = '???';
   secretNumber = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.number-input').value = '';
})