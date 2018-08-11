// var age = parseInt(prompt('What is your age?'), 10);
// var retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

var age = 34;
var retirementAge = 70;
var today = new Date();

var currentYear = today.getFullYear();
var workYearsToGo = retirementAge - age;
var retirementYear = currentYear + workYearsToGo;

console.log('It\'s ' + currentYear + '. You will retire in ' + retirementYear + '.');
console.log('You have only ' + workYearsToGo + ' years of work to go!');
