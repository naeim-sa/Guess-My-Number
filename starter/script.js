'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';

document.querySelector('.number').textContent = 9;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess').value);
