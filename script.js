/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

GOOD LUCK 😀
*/

// 1. Store Mark's and John's mass and height in variables

var hMark = 174;
var mMark = 74;

var hJohn = 184;
var mJohn = 93;

console.log(mMark);
console.log(mJohn);

// 2. Calculate both their BMIs

var bmiMark = mMark / (hMark * 2);
var bmiJohn = mJohn / (hJohn * 2);

console.log(bmiMark);
console.log(bmiJohn);

// 3. Create a boolean variable containing information about whether 
//Mark has a higher BMI than John.


var bmi = bmiMark > bmiJohn;

console.log(bmi);

// 4. Print a string to the console containing the variable from step 3. 
// (Something like "Is Mark's BMI higher than John's? true"). 


console.log("Is Mark's BMI higher than John's? " + bmi);


// ***************************************************************************

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

GOOD LUCK 😀
*/

// 1. Calculate the average score for each team.

var firstJohn = 89;
var secondJohn = 120;
var thirdJohn = 103;

var firstMike = 116;
var secondMike = 94;
var thirdMike = 123;

var averageJohn = (firstJohn + secondJohn + thirdJohn ) / 3;
var averageMike = (firstMike + secondMike + thirdMike ) / 3;

console.log('The average score of John\s team is: ' + averageJohn);
console.log('The average score of Mike\s team is: ' + averageMike);


// 2. Decide which teams wins in average (highest average score), 
// and print the winner to the console. Also include the average score 
// in the output.

if (averageJohn > averageMike ) {
    console.log('John wins with an average score of ' + averageJohn);
} else if (averageJohn < averageMike ) {
    console.log('Mike wins with an average score of ' + averageMike);
} else {
    console.log('TIE: John\s team: ' + averageJohn + ' Mike\s team: ' + averageMike);
}

// 3. Then change the scores to show different winners. 
// Don't forget to take into account there might be a draw 
// (the same average score)

var firstJohn = 116;
var secondJohn = 123;
var thirdJohn = 94;

var firstMike = 116;
var secondMike = 94;
var thirdMike = 123;

var averageJohn = (firstJohn + secondJohn + thirdJohn ) / 3;
var averageMike = (firstMike + secondMike + thirdMike ) / 3;

console.log('The average score of John\s team is: ' + averageJohn);
console.log('The average score of Mike\s team is: ' + averageMike);

if (averageJohn > averageMike ) {
    console.log('John wins with an average score of ' + averageJohn);
} else if (averageJohn < averageMike ) {
    console.log('Mike wins with an average score of ' + averageMike);
} else {
    console.log('TIE: John\s team: ' + averageJohn + ' | Mike\s team: ' + averageMike);
}

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
// Like before, log the average winner to the console. HINT: you will need the 
// && operator to take the decision. If you can't solve this one, just watch
// the solution, it's no problem :)

var firstMary = 97;
var secondMary = 134;
var thirdMary = 105;

var averageMary = (firstMary + secondMary + thirdMary ) / 3;

console.log('The average score of Mary\s team is: ' + averageMary);


if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John wins with an average score of ' + averageJohn);
} else if (averageJohn < averageMike && averageJohn < averageMary ) {
    console.log('Mike wins with an average score of ' + averageMike);
} else if (averageMary > averageMike && averageMary > averageJohn ) {
    console.log('Mary wins with an average score of ' + averageMary);
} else {
    console.log('TIE: John\s team: ' + averageJohn + ' | Mike\s team: ' 
    + averageMike + ' | Mary\s team: ' + averageMary);
}


// 5. Like before, change the scores to generate different winners, 
// keeping in mind there might be draws.

var firstMary = 97;
var secondMary = 134;
var thirdMary = 102;

var averageMary = (firstMary + secondMary + thirdMary ) / 3;

console.log('The average score of Mary\s team is: ' + averageMary);


if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John wins with an average score of ' + averageJohn);
} else if (averageJohn < averageMike && averageJohn < averageMary ) {
    console.log('Mike wins with an average score of ' + averageMike);
} else if (averageMary > averageMike && averageMary > averageJohn ) {
    console.log('Mary wins with an average score of ' + averageMary);
} else {
    console.log('TIE: John\'s team: ' + averageJohn + ' | Mike\'s team: ' 
    + averageMike + ' | Mary\'s team: ' + averageMary);
}