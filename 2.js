// var first = prompt('Enter the 1st number: ');
// var second = prompt('Enter the 2nd number: ');
// var third = prompt('Enter the 3rd number: ');
// var fourth = prompt('Enter the 4th number: ');
// var fifth = prompt('Enter the 5h number: ');
// var sixth = prompt('Enter the last number: ');

var first = 25;
var second = 15;
var third = 20;
var fourth = 17;
var fifth = 23;
var sixth = 17;
var numbers = [ first, second, third, fourth, fifth ];

if (numbers.indexOf(sixth) >= 0) {
  console.log('The number ' + sixth + ' appears in [' + numbers.join(', ') + '].');
} else {
  console.log('The number ' + sixth + ' does not appear in [' + numbers.join(', ') + '].');
}

