'use strict';

console.log('The website is running.');

let userName = prompt('Hello. May I know your name please?');
console.log(userName);
alert('Hello ' + userName + '. Let\'s play a trivia game!');



// Question 1
let einstein = prompt('Question 1: In school Albert Einstein failed most of the subjects except for physics and math. Yes or No?');
let lowercaseEinstein = einstein.toLowerCase();

console.log('The user answered ' + einstein);

if (lowercaseEinstein === 'yes' || lowercaseEinstein === 'y') {
  alert('Bingo ' + userName + ' , You are correct!');
} else if (lowercaseEinstein === 'no' || lowercaseEinstein === 'n') {
  alert('I\'m sorry ' + userName + ' . That is incorrect.');}
  else (alert(userName + ', you do understand the rules of this game, don\'t you?'));
  
// Question 2
let party = prompt('Question 2: The first song ever sung in space was happy birthday. Yes or No?'); 
let lowercaseParty = party.toLowerCase();

console.log('The user answered ' + party);

if (lowercaseParty === 'yes' || lowercaseParty === 'y') {
  alert('Bingo ' + userName + ' , You are correct!');
} else if (lowercaseParty === 'no' || lowercaseParty === 'n') {
  alert('I\'m sorry ' + userName + ' . That is incorrect.');}
  else (alert(userName + ', you do understand the rules of this game, don\'t you?'));

// Question 3
let canary = prompt('Question 3: A male canary tends to have a better singing voice than a female canary. Yes or No?'); 
let lowercaseCanary = canary.toLowerCase();

console.log('The user answered ' + canary);

if (lowercaseCanary === 'yes' || lowercaseCanary === 'y') {
  alert('Bingo ' + userName + ' , You are correct!');
} else if (lowercaseCanary === 'no' || lowercaseCanary === 'n') {
  alert('I\'m sorry ' + userName + ' . That is incorrect.');}
  else (alert(userName + ', you do understand the rules of this game, don\'t you?'));

  // Question 4
let tea = prompt('Question 4: Tea contains more caffeine than coffee or soda. Yes or No?'); 
let lowercaseTea = tea.toLowerCase();

console.log('The user answered ' + tea);

if (lowercaseTea === 'no' || lowercaseTea === 'n') {
  alert('Bingo ' + userName + ' , You are correct!');
} else if (lowercaseTea === 'yes' || lowercaseTea === 'y') {
  alert('I\'m sorry ' + userName + ' . That is incorrect.');}
  else (alert(userName + ', you do understand the rules of this game, don\'t you?'));

  // Question 5
let mice = prompt('Question 5: Mice have more bones than humans. Yes or No?');
let lowercaseMice = mice.toLowerCase();

console.log('The user answered ' + mice);

if (lowercaseMice === 'yes' || lowercaseMice === 'y') {
  alert('Bingo ' + userName + ' , You are correct!');
} else if (lowercaseMice === 'no' || lowercaseMice === 'n') {
  alert('I\'m sorry ' + userName + ' . That is incorrect.')}
  else (alert(userName + ', you do understand the rules of this game, don\'t you?'));
