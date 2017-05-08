function fizzBuzz(number){
  if (number % 15 === 0 ) {return 'fizzbuzz'};
  if (number % 3 === 0) {return 'fizz'};
  if (number % 5 === 0) {return 'buzz'};
  return number;
}

for (var i = 1; i < 100; i++) {
  console.log(fizzBuzz(i));
};
