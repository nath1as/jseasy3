function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var age = randomBetween(20, 200);
console.log('Teddy is ' + age + ' years old!');
