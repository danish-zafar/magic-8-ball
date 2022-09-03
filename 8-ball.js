let userName = 'Danny';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

let userQuestion = 'Will I adopt a new puppy soon?';

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = '';

switch(randomNumber) {
  case 0:
  eightBall = 'I love JavaScript';
  break;

  case 1:
  eightBall = 'JS is Love';
  break;

  case 2:
  eightBall = 'Learn difference between JS & ES6';
  break;

  case 3:
  eightBall = 'Cannot predict now';
  break;

   case 4:
  eightBall = 'Do not count on yourself';
  break;

   case 5:
  eightBall = 'Make new goals';
  break;

  case 6:
  eightBall = 'Realistic goals!!!';
  break;

  case 7:
  eightBall = 'Give yourself rewards';
  break;

}

console.log(`The Magic 8 ball say, ${eightBall}.`);
