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
console.log('**************************************************************');
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

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/


// 1) Containing all three tips (one for each bill)

var bills = [124, 48, 268];

console.log(bills);


// 2) Containing all three final paid amounts (bill + tip).

function tipCalculator(amount) {
    if (amount < 50) {
        return amount + (amount * 0.20);
    } else if (amount >= 50 && amount <= 200) {
        return amount + (amount * 0.15);
    } else if (amount > 200) {
        return amount + (amount * 0.10);
    }
} 

//var paidAmounts = [];
var paidAmounts = new Array;

paidAmounts.push(tipCalculator(bills[0]));
paidAmounts.push(tipCalculator(bills[1]));
paidAmounts.push(tipCalculator(bills[2]));

console.log(paidAmounts);

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

// 1. For each of them, create an object with properties for their full name, 
// mass, and height

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95
}

var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69
}

console.log(john);
console.log(mark);

// 2. Then, add a method to each object to calculate the BMI. 
// Save the BMI to the object and also return it from the method.

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john);
console.log(mark);

// 3. In the end, log to the console who has the highest BMI, 
// together with the full name and the respective BMI. 
// Don't forget they might have the same BMI.


if(john.bmi > mark.bmi) {
    console.log(john.firstName + ' ' + john.lastName + ' has the higest BMI with: ' +
    john.bmi);
} else if(john.bmi < mark.bmi) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has the higest BMI with: ' +
    mark.bmi);
} else {
    console.log('They both have the same BMI!');
}

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version 
using everything we learned!
This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the 
bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:

GOOD LUCK 😀
*/

// 1. Create an object with an array for the bill values

var john = {
    bills: [124, 48, 268, 180, 42]
}

console.log(john);

// 2. Add a method to calculate the tip

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * .2;
            } else if (this.bills[i] > 50 && this.bills[i] <= 200) {
                this.tips[i] = this.bills[i] * .15;
            } else {
                this.tips[i] = this.bills[i] * .1;
            }
        } 
    }
}

john.calcTip();

console.log(john);

// -----------------------------

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i] * .2);
            } else if (this.bills[i] > 50 && this.bills[i] <= 200) {
                this.tips.push(this.bills[i] * .15);
            } else {
                this.tips.push(this.bills[i] * .1);
            }
        }
    }
}

john.calcTip();

console.log(john);

// 3. This method should include a loop to iterate over all the paid bills 
// and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 
// 2) an array containing final paid amounts (bill + tip). 
// HINT: Start with two empty arrays [] as properties and then fill them up 
// in the loop.

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    amounts: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * .2;
            } else if (bills[i] > 50 && bills[i] <= 200) {
                this.tips[i] = this.bills[i] * .15;
            } else {
                this.tips[i] = this.bills[i] * .1;
            }
        } 
    },
    calcAmount: function () {
        for (var i = 0; i < this.bills.length; i++) {
            this.amounts[i] = this.bills[i] + this.tips[i];
        }
    }
}

john.calcTip();
john.calcAmount();

console.log(john);

// -----------------------------

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    amounts: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i] * .2);
            } else if (this.bills[i] > 50 && bills[i] <= 200) {
                this.tips.push(this.bills[i] * .15);
            } else {
                this.tips.push(this.bills[i] * .1);
            }
        } 
    },
    calcAmount: function () {
        for (var i = 0; i < this.bills.length; i++) {
            this.amounts.push(this.bills[i] + this.tips[i]);
        }
    }
}

john.calcTip();
john.calcAmount();

console.log(john);

/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, 
going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 
10% when the bill is between $100 and $300, and 25% if the bill is more than $300
 (different than John). */



// 5. Implement the same functionality as before, 
// this time using Mark's tipping rules

var mark = {
    bills: [77, 475, 110, 45],
    tips: [],
    amounts: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * .2;
            } else if (this.bills[i] > 100 && this.bills[i] <= 300) {
                this.tips[i] = this.bills[i] * .1;
            } else {
                this.tips[i] = this.bills[i] * .25;
            }
        } 
    },
    calcAmount: function () {
        for (var i = 0; i < this.bills.length; i++) {
            this.amounts[i] = this.bills[i] + this.tips[i];
        }
    }
}

mark.calcTip();
mark.calcAmount();

console.log(mark);

// -----------------------------

var mark = {
    bills: [77, 475, 110, 45],
    tips: [],
    amounts: [],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips.push(this.bills[i] * .2);
            } else if (this.bills[i] > 100 && this.bills[i] <= 300) {
                this.tips.push(this.bills[i] * .1);
            } else {
                this.tips.push(this.bills[i] * .25);
            }
        } 
    },
    calcAmount: function () {
        for (var i = 0; i < this.bills.length; i++) {
            this.amounts.push(this.bills[i] + this.tips[i]);
        }
    }
}

mark.calcTip();
mark.calcAmount();

console.log(mark);


// 6. Create a function (not a method) to calculate the average of 
// a given array of tips. HINT: Loop over the array, and in each 
// iteration store the current sum in a variable (starting from 0). 
// After you have the sum of the array, divide it by the number of elements in it
//  (that's how you calculate the average)

function calcAverage (tips) {
        var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

// 7. Calculate the average tip for each family

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

// 8. Log to the console which family paid the highest tips on average

if (john.average > mark.average) {
    console.log('John\'s family paid the higest tips with an amount of $' +
    john.average);
} else if (john.average < mark.average) {
    console.log('Mark\'s family paid the higest tips with an amount of $' +
    mark.average);
}

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

// Another method of completing the 5th challenge


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************


/*****************************
* CODING CHALLENGE 6
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. 
A question should include:
a) question itself
b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
GOOD LUCK 😀
*/


/*
var Question = function (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};


Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
        questions.push(i + ': ' + this.answers[i]);
    }
}


var question1 = new Question('What is the best programming language?', ['JAVA','JS', 'Python'], 1);
var question2 = new Question('What is the color of my pet?', ['Red', 'Blue', 'White'], 2);
var question3 = new Question('How bad do I want to become a developer?', ['Really fkin bad', 'Meh', 'I do'], 1);

var questions = [];

question1.displayQuestion();
question2.displayQuestion();
question3.displayQuestion();


questions.push(question1);
questions.push(question2);
questions.push(question3);

console.log(questions);

*/

////////////////////////////

function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong Answer! Try again.');
    }
}

var q1 = new Question('Is Javascript the cooles programming language in the world?',['Yes', 'No'], 0);

var q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);

var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);


questions[n].displayQuestion();

// var answer = parseInt(prompt('Please select the correct answer.'));

// questions[n].checkAnswer(answer);


/////////// 7.

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer! Try again.');
        }
    }
    
    var q1 = new Question('Is Javascript the cooles programming language in the world?',['Yes', 'No'], 0);
    
    var q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    
    questions[n].displayQuestion();
    
    // var answer = parseInt(prompt('Please select the correct answer.'));
    
    // questions[n].checkAnswer(answer);
    
})();


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 7

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/


(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);
    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);
    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    // nextQuestion();
    
})();


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 8

/*
Write a JavaScript function that reverse a string.
*/

// 1. Reverse a String With Built-In Functions


function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
console.log(reverseString("hello"));


// For a number & Compact version

function reverseString(str2) {
    return parseInt(str2.split("").reverse().join(""));
}


console.log(reverseString("0987654321"));





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 9

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Park {
    constructor (name, buildYear, numTree, parkArea, age) {
        this.name = name;
        this.buildYear = buildYear;
        this.numTree = numTree;
        this.parkArea = parkArea;
        this.age = age;
    }

    calcTreeDensity() {
        var treeDensity = this.numTree / this.parkArea;
        console.log(`The tree density of ${this.name} is ${treeDensity}.`);
    }

    calcAge() {
        this.age = new Date().getFullYear() - this.buildYear;
        console.log(`The age of ${this.name} is ${this.age}.`);
    }

    calcAvgAge() {

    }

    treeRecord() {
        if(this.numTree > 1000) {
            console.log(`${this.name} has more than 1000 trees! It has ${this.numTree} trees!`);
        }
    }
}

class Street {
    constructor (name, buildYear, roads, size = 'normal') {
        this.name = name;
        this.buildYear = buildYear;
        this.roads = roads;
    }

}


const park1 = new Park('Central Park', 1972, 2475, 10445);
const park2 = new Park('Cismigiu', 1955, 4322, 7655);
const park3 = new Park('Herastrau', 1942, 1223, 7565);

// console.log(park1);
// console.log(park2);
// console.log(park3);
park1.calcTreeDensity();
park2.calcTreeDensity();
park3.calcTreeDensity();

console.log('----');


park1.calcAge();
park2.calcAge();
park3.calcAge();

console.log('----');


park1.treeRecord();
park2.treeRecord();
park3.treeRecord();

var parks = [];

parks.push(park1);
parks.push(park2);
parks.push(park3);

// console.log(parks);

var totalAge = 0;
var avgAge = 0


for (var i = 0; i < parks.length; i++) {

    totalAge += parks[i].age;
}

console.log('----');

// console.log(totalAge);
console.log(`The total age of all town's park is ${totalAge}.`);


avgAge = totalAge / parks.length;

// console.log(parseInt(avgAge));
console.log(`The average age of each town's park is ${parseInt(avgAge)}.`);





console.log('----');

const street1 = new Street('Dorobanti', 1992, 43244);
const street2 = new Street('Colentina', 2001, 53433, 'huge');
const street3 = new Street('Obor', 1988, 27644, 'tiny');

// console.log(street1);
// console.log(street2);
// console.log(street3);

var streets = [];

streets.push(street1);
streets.push(street2);
streets.push(street3);

// console.log(streets);

var totalStr = 0;
var avgStr = 0;

for(var i = 0; i < streets.length; i++) {
    totalStr += streets[i].roads;
}

// console.log(totalStr);
console.log(`The total length of the town's streets is ${totalStr}.`);

avgStr = totalStr / streets.length;

console.log(`The average length of the town's streets is ${parseInt(avgStr)}.`);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 9 v2


class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parkk extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; // km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${parseFloat(density).toFixed(2)} trees per square km.`);
    }


}

class Streett extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Parkk('Green Park', 1987, 0.2, 215), new Parkk('National Park', 1894, 2.9, 3541), new Parkk('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Streett('Ocean Avenue', 1999, 1.1, 4), new Streett('Evergreen Street', 2008, 2.7, 2), new Streett('4th Street', 2015, 0.8), new Streett('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

function reportParks(p) {

    console.log('-----PARKS REPORT-----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);

    console.log(`Our ${p.length} parks have an average of ${parseFloat(avgAge).toFixed(2)} years.`)

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);

    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {

    console.log('-----STREETS REPORT-----');

    // Total and average length of the streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${parseFloat(totalLength).toFixed(2)} km, with an average of ${parseFloat(avgLength).toFixed(2)} km.`);


    // Classify sizes
    s.forEach(el => el.classifyStreet());

}


reportParks(allParks);
reportStreets(allStreets);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 10


/*
Write a JavaScript function that generates all combinations of a string.
*/


function combString(str) {
    //String length
    var lenStr = str.length;
    //Initially empty, where the results will be stored
    var result = [];
    //Currently selected letter
    var indexCurrent = 0;

    //Looping from 0 to the length of the string
    //var char is selecting the character at this index. Ex: "a", then "b", then "c"
    while (indexCurrent < lenStr) {
        //Get the character at the index position. 
        var char = str.charAt(indexCurrent);

        var x;
        var arrTemp = [char];
        //For each previous result
        for (x in result) {
            //Add the current character to the index

            arrTemp.push("" + result[x] + char);

            /*
             * Ex: "abc"
             * First round: result is empty, so this code doesn't execute
             * Second round: result contains "a". Adds "ab" to the result array
             *  - Then. result array will contain "a","b" and "ab"
             * Third round: result contains "a","b","ab"
             *     For all of these results, add "c" to the resulting array
             *     Ex: "ac","bc", "abc"
             *  - Then add "c"
             */
        }
        result = result.concat(arrTemp);

        //Increment the current index to go to the next character 
        indexCurrent++;
    }

    return result;
}

console.log(combString("zxc"));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 11


/*
Clean up user-entered phone numbers so that they can be sent SMS messages.
*/


'use strict';

var PhoneNumber = function(number) {
  this.digits = this.normalize(number);
};

PhoneNumber.prototype.number = function () {
  return this.digits;
};

PhoneNumber.prototype.areaCode = function () {
  return this.digits.substring(0,3);
};

PhoneNumber.prototype.localNumber = function () {
  return this.digits.substring(3,6) + '-' + this.digits.substring(6,10);
};

PhoneNumber.prototype.toString = function () {
  return '(' + this.areaCode() + ') ' + this.localNumber();
};

PhoneNumber.prototype.relevantDigits = function (number) {
  return number.substring(number.length - 10, number.length)
};

PhoneNumber.prototype.isValid = function (number) {
  return ((number.length === 10) ||
          ((number.length === 11) && (number.charAt(0) === '1')));
};

PhoneNumber.prototype.normalize = function (numberString) {
  var digits = this.stripFormatting(numberString);
  if (this.isValid(digits)) {
    return this.relevantDigits(digits);
  } else {
    return '0000000000';
  }
};

PhoneNumber.prototype.stripFormatting = function (numberString) {
  return numberString.replace(/\D/ig, '');
}

// module.exports = PhoneNumber;



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 12


/*
From a unsorted array of numbers 1 to 100 excluding one number, how will you find that number?
*/

function missingNumber(arr) {
    var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
}


// console.log(missingNumber(12));

// Multiple missing numbers

var someArr = [2, 5, 3, 1, 4, 7, 10, 15]

function findMissingNumbers(arr) {
    var missingNumbersCount;
    var missingNumbers = [];
    arr.sort(function(a, b) {
        return a - b;
    })  
    for(var i = 0; i < arr.length; i++) {
        if(arr[i+1] - arr[i] != 1 && arr[i+1] != undefined) {
            missingNumbersCount = arr[i+1] - arr[i] - 1;
            for(j = 1; j <= missingNumbersCount; j++) {
                missingNumbers.push(arr[i] + j)
            }
        }
    }
    return missingNumbers
}

findMissingNumbers(someArr) // [6, 8, 9, 11, 12, 13, 14]

console.log(findMissingNumbers(someArr));



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 13

// Remove Duplicates from an Array

// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

/////////////////////////////////
console.log('Version 1');
// Uniq reduce while keeping existing order

var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

var uniq = names.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

console.log(uniq, names) // [ 'Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl' ]



/////////////////////////////////
console.log('Version 2');
// Update 2015: ES6 version

var uniq = [ ...new Set(names) ]

console.log(uniq, names)



/////////////////////////////////
console.log('Version 3');
// Sort based on occurrence

var uniq = names
  .map((name) => {
    return {count: 1, name: name}
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})

var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])

console.log(sorted, names)



/////////////////////////////////
console.log('Version 4');
// Vanilla JS

function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}

console.log(remove_duplicates(names));
console.log(names);




/////////////////////////////////
console.log('Version 5');
// Another alternative of the Version one using the filter method

var rmvDuplicates = names.filter((v,i) => names.indexOf(v) == i);

console.log(rmvDuplicates);
console.log(names);

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 14

// Create an algorithm to find the biggest perfect square in an array

/////////////////////////////////

let perfectSquare = (e) => {
    //sort the array
     e.sort((a, b) => b - a);
    
    //Check the perfect square for each element
     for(let i = 0; i < e.length; i++){
        if(e[i] > 0 && Math.sqrt(e[i]) % 1 === 0){
          return e[i]
        }
     } 
     return -1;
    }
    
console.log(perfectSquare([17, 20, 27, 2, 3, 10]));
console.log(perfectSquare([16, 20, 25, 2, 3, 10]));

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 15

// Write a JavaScript function to find the unique elements from two arrays.

/////////////////////////////////


function difference(arr1,arr2) {
  
    var a1= flatten(arr1,true);
    var a2= flatten(arr2,true);
    
   var a=[], diff=[];
    for(var i=0;i< a1.length;i++)
      a[a1[i]]=false;
    for(i=0;i< a2.length;i++)
    if(a[a2[i]]===true) 
       { delete a[a2[i]];}
      else a[a2[i]]=true;
    for(var k in a)
      diff.push(k);
    return diff;   
    }
  
  var flatten = function(a, shallow,r){
    if(!r){ r = [];}
  if (shallow) {
    return r.concat.apply(r,a);
    }  
     for(i=0; i< a.length; i++){
          if(a[i].constructor == Array){
              flatten(a[i],shallow,r);
          }else{
              r.push(a[i]);
          }
      }
      return r;
  };
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 16

// Write a JavaScript program to sort a list of elements using Quick sort.

/////////////////////////////////

console.time('quick_Sort');

function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);

console.timeEnd('quick_Sort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 17

// Write a JavaScript program to sort a list of elements using Merge sort.

/////////////////////////////////

console.time('merge_sort');

function merge_sort(left_part,right_part) 
{
	var i = 0;
	var j = 0;
	var results = [];

	while (i < left_part.length || j < right_part.length) {
		if (i === left_part.length) {
			// j is the only index left_part
			results.push(right_part[j]);
			j++;
		} 
      else if (j === right_part.length || left_part[i] <= right_part[j]) {
			results.push(left_part[i]);
			i++;
		} else {
			results.push(right_part[j]);
			j++;
		}
	}
	return results;
}


console.log(merge_sort([1,3,4], [3,7,9]));

console.timeEnd('merge_sort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 18

// Write a JavaScript program to sort a list of elements using Heap sort.

/////////////////////////////////

console.time('heap_root');

var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);

console.timeEnd('heap_root');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 19

// Write a JavaScript program to sort a list of elements using Insertion sort.

/////////////////////////////////

console.time('insertion_Sort');

function insertion_Sort(arr)
{
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));

console.timeEnd('insertion_Sort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 20

// Write a JavaScript program to sort a list of elements using the Selection sort algorithm.

/////////////////////////////////

console.time('Selection_Sort');

function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
     return a - b;
     } 
    var min = 0;
    var index = 0;
    var temp = 0;
  
   //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;
  
    for (var i = 0; i < arr.length; i += 1) {
      index = i;
      min = arr[i];
  
      for (var j = i + 1; j < arr.length; j += 1) {
        if (compare_Function(min, arr[j]) > 0) {
          min = arr[j];
          index = j;
        }
      }
  
      temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
  
    //return sorted arr
    return arr;
  }
  
  console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return a - b; })); 
  console.log(Selection_Sort([3, 0, 2, 5, -1, 4, 1], function(a, b) { return b - a; }));

console.timeEnd('Selection_Sort');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 20

// Write a JavaScript program to sort a list of elements using Shell sort.

/////////////////////////////////

console.time('shellSort');

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= increment && arr[j-increment] > temp) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));

console.timeEnd('shellSort');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 21

// Write a JavaScript program to sort a list of elements using Bubble sort.

/////////////////////////////////

console.time('swap');

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));

console.timeEnd('swap');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 22

// Write a JavaScript program to sort a list of elements using Comb sort.

/////////////////////////////////

console.time('combsort');

function combsort(arr)
{
 function is_array_sorted(arr) {
      var sorted = true;
      for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              sorted = false;
              break;
          }
      }
      return sorted;
  }
 
  var iteration_count = 0;
  var gap = arr.length - 2;
  var decrease_factor = 1.25;
 
  // Repeat iterations Until array is not sorted
  
  while (!is_array_sorted(arr)) 
  {
      // If not first gap  Calculate gap
      if (iteration_count > 0)
         gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);
 
  // Set front and back elements and increment to a gap
      var front = 0;
      var back = gap;
      while (back <= arr.length - 1) 
      {
          // Swap the elements if they are not ordered
        
          if (arr[front] > arr[back])
          {
              var temp = arr[front];
              arr[front] = arr[back];
              arr[back] = temp;
          }
 
          // Increment and re-run swapping
        
          front += 1;
          back += 1;
      }
      iteration_count += 1;
  }
  return arr;
}
  
 var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(combsort(arra));

console.timeEnd('combsort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 22

// Write a JavaScript program to sort a list of elements using Gnome sort.

/////////////////////////////////

console.time('gnomeSort');

function gnomeSort(arr) 
{
    function moveBack(i) 
  {
        for( ; i > 0 && arr[i-1] > arr[i]; i--)
        {
            var t = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = t;
        }
    }
    for (var i = 1; i < arr.length; i++) 
    {
        if (arr[i-1] > arr[i]) moveBack(i);
    }
    return arr;
}

var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(gnomeSort(arra));

console.timeEnd('gnomeSort');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 23

// Write a JavaScript program to sort a list of elements using Counting sort.

/////////////////////////////////

console.time('countingSort');

function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [3, 0, 2, 5, 4, 1]; 
console.log(arra.length);
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(countingSort(arra, 0, 5));

console.timeEnd('countingSort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 24

// Write a JavaScript program to sort a list of elements using Flash sort.

/////////////////////////////////

console.time('flash_sort');

function flash_sort(arr) 
  {
    var max = 0, min = arr[0];
    var n = arr.length;
    var m = ~~(0.45 * n);
    var l = new Array(m);
 
    for (var i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
 
     if (min === arr[max]) {
        return arr;
    }
 
    var c1 = (m - 1) / (arr[max] - min);
 
 
    for (var k = 0; k < m; k++) {
        l[k] = 0;
    }
    for (var j = 0; j < n; ++j) {
        k = ~~(c1 * (arr[j] - min));
        ++l[k];
    }
 
    for (var p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }
 
    var hold = arr[max];
    arr[max] = arr[0];
    arr[0] = hold;
 
    //permutation
    var move = 0, t, flash;
    j = 0; 
    k = m - 1;
  
    while (move < (n - 1)) {
        while (j > (l[k] - 1)) {
            ++j;
            k = ~~(c1 * (arr[j] - min));
        }
        if (k < 0) break;
        flash = arr[j];
        while (j !== l[k]) {
            k = ~~(c1 * (flash - min));
            hold = arr[t = --l[k]];
            arr[t] = flash;
            flash = hold;
            ++move;
        }
    }
 
    //insertion
    for (j = 1; j < n; j++) {
        hold = arr[j];
         i = j - 1;
        while (i >= 0 && arr[i] > hold) {
            arr[i + 1] = arr[i--];
        }
        arr[i + 1] = hold;
    }
    return arr;
}
var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(flash_sort(arra, 0, 5));

console.timeEnd('flash_sort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 25

// Write a JavaScript program to sort a list of elements using Pancake sort.

/////////////////////////////////

console.time('pancake_sort');

function pancake_sort(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        // find the index of the largest element not yet sorted
        var max_idx = 0;
        var max = arr[0];
        for (var j = 1; j <= i; j++) {
            if (arr[j] > max) {
                max = arr[j];
                max_idx = j;
            }
        }
 
        if (max_idx == i) 
            continue; // element already in place
 
        var new_slice;
 
        // flip arr max element to index 0
        if (max_idx > 0) {
            new_slice = arr.slice(0, max_idx+1).reverse();
            for ( j = 0; j <= max_idx; j++) 
                arr[j] = new_slice[j];
        }
 
        // then flip the max element to its place
        new_slice = arr.slice(0, i+1).reverse();
        for ( j = 0; j <= i; j++) 
            arr[j] = new_slice[j];
    }
    return arr;
}

console.timeEnd('pancake_sort');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 26

// Write a JavaScript program to sort a list of elements using Bogosort.

/////////////////////////////////

console.time('Bogosort');

function Bogosort(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

   function sort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}


var arra = [3, 0, 2, 5, -1, 4, 1]; 
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(Bogosort(arra));

console.timeEnd('Bogosort');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 27

// Write a JavaScript program to get the integers in range (x, y).

/////////////////////////////////

console.time('Coding Challenge 27');

var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));

console.timeEnd('Coding Challenge 27');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 28

// Write a merge sort program in JavaScript.

/////////////////////////////////

console.time('Coding Challenge 28');

Array.prototype.merge_Sort = function () {
    if (this.length <= 1) 
    {
      return this;
    }
  
    var half = parseInt(this.length / 2);
    var left = this.slice(0, half).merge_Sort();
    var right = this.slice(half,     this.length).merge_Sort();
    var merge = function (left, right) 
    {
    var arry = [];
    while (left.length > 0 && right.length > 0)
    {
      arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
    }
      return arry.concat(left).concat(right);
    };
  
    return merge(left, right);
  };
  
  var a = [34,7,23,32,5,62];
  console.log(a.merge_Sort());

console.timeEnd('Coding Challenge 28');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 29

// Write a JavaScript function to extract unique characters from a string.

/////////////////////////////////

console.time('Coding Challenge 29');

function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

console.timeEnd('Coding Challenge 29');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 30

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

/////////////////////////////////

console.time('Coding Challenge 30');

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

console.timeEnd('Coding Challenge 30');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 31

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

/////////////////////////////////

console.time('Coding Challenge 31');

function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));

console.timeEnd('Coding Challenge 31');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 32

// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

/////////////////////////////////

console.time('Coding Challenge 32');


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

console.timeEnd('Coding Challenge 32');

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 33

// Write a JavaScript function to find the first not repeated character.

/////////////////////////////////

console.time('Coding Challenge 33');

function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find_FirstNotRepeatedChar('abacddbec'));

console.timeEnd('Coding Challenge 33');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 34

// Write a JavaScript function to apply Bubble Sort algorithm.

/////////////////////////////////

console.time('Coding Challenge 34');

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

console.timeEnd('Coding Challenge 34');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 35

// Write a JavaScript program to find duplicate values in a JavaScript array.

/////////////////////////////////

console.time('Coding Challenge 35');

function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

console.timeEnd('Coding Challenge 35');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 36

// Write a JavaScript program to find duplicate values in a JavaScript array.

/////////////////////////////////

console.time('Coding Challenge 36');

function num_string_range(start, end, step) 
  {
    var range = [];
    if ((step === 0) || (typeof start == "undefined" || typeof end ==    "undefined") || (typeof start != typeof end))
     return false;
  
    if (end < start) {
        step = -step;
    }

    if (typeof start == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }
        } 
      else if (typeof start == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    }
   
    else
       {
        throw TypeError("Only string and number are supported");
        }

    return range;

}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range("Z", "A", 2));
console.log(num_string_range(0, -5, 1));
console.log(num_string_range(0, 25, 5));
console.log(num_string_range(20, 5, 5));

console.timeEnd('Coding Challenge 36');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 37

// Write a JavaScript program to sort the items of an array.

/////////////////////////////////

console.time('Coding Challenge 37');

var arr1=[-3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min=arr1[0];
var pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (var i=0;i<arr1.length;i++)
{
        for (var j=0;j<arr1.length;j++)
        {
                if (arr1[j]!="x")
                {
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);

console.timeEnd('Coding Challenge 37');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 38

// Create a function that reverses a string.

/////////////////////////////////

console.time('Coding Challenge 38');

function reverse(str) {
    // Check input
    if (!str || str.length < 2 || typeof str !== 'string')  {
        return 'hmm that is not good.';
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }

    console.log(backwards);
    
    return backwards.join('');
}

// -------------------------------------

function reverse2(str) {
    return str.split('').reverse().join('');
}

// -------------------------------------

const reverse3 = str => str.split('').reverse().join('');

// -------------------------------------

const reverse3 = str => [...str].reverse().join('');


reverse('Hi! My name is Mirel!');

reverse2('Hi! My name is Mirel!');

reverse3('Hi! My name is Mirel!');

console.timeEnd('Coding Challenge 38');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 39

// Create a function that merges and sorts two arrays.

/////////////////////////////////

console.time('Coding Challenge 39');

function mergedSortedArray(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // Check input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array1Item = array2[j];
            i++;

        }
    }

    return mergedArray;
}

mergedSortedArray([0,3,4,31], [4,6,30]);

console.timeEnd('Coding Challenge 39');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 40

// Implement a hash table

/////////////////////////////////

console.time('Coding Challenge 40');

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');

console.timeEnd('Coding Challenge 40');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 41

// Write a JavaScript program to find the most frequent item of an array.

/////////////////////////////////

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

console.timeEnd('Coding Challenge 41');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 42

// Rewrite the following functions using closures

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please say UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else  {
        return function (name) {
            console.log('Hello ' + name + 'what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark');
*/

/////////////////////////////////

function interviewQuestion(job) {
    var a;
    if (job === 'designer') {
        a = ', can you please say UX design is?';
    } else if (job === 'teacher') {
        a = ', what subject do you teach?';
    } else {
        a = ', what do you do?';
    }
    return function(name) {
        console.log(name + a);
    }
}

interviewQuestion('designer')('Mirel');
interviewQuestion('teacher')('Marcel');
interviewQuestion('cacat')('Daniela');


// ------------------------------------

function interviewQuestion2(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please say UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else  {
            console.log('Hello ' + name + 'what do you do?');
        }
    }
}

interviewQuestion2('designer')('Mirel');
interviewQuestion2('teacher')('Marcel');
interviewQuestion2('cacat')('Daniela');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 43

// Create a Pythagorean function in JavaScript.

// Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.

function pythagorean_theorem(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
  return false; 
          return Math.sqrt(x * x + y * y);
      }
  
  console.log(pythagorean_theorem(2, 4));
  console.log(pythagorean_theorem(3, 4));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 44

// Write a JavaScript function to get all prime numbers from 0 to a specified number

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(5));

console.log(primeFactorsTo(15));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 45

// Write a JavaScript function to test if a number is a power of 2.

function power_of_2(n) {
    if (typeof n !== 'number') 
         return 'Not a number'; 
   
       return n && (n & (n - 1)) === 0;
   }
   
   console.log(power_of_2(16));
   console.log(power_of_2(18));
   console.log(power_of_2(256));

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 47

// Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

dec_to_bho  = function(n, base) {
 
    if (n < 0) {
      n = 0xFFFFFFFF + n + 1;
     } 
switch (base)  
{  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
}

console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 48

// Write a JavaScript function to find the highest value in an array.


function max(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 49

// Write a JavaScript function to calculate the sum of values in an array.

function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }

console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 49

// Write a JavaScript function to calculate the product of values in an array.

function product(input){
    if (toString.call(input) !== "[object Array]")
       return false;
     
            var total   =   1;
     
          for(var i=0;i<input.length;i++){
                  if(isNaN(input[i])){
                    continue;
                  }
                   total   *=  Number(input[i]);
               }
             return total;
           }

console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 50

// Write a JavaScript function that Convert Roman Numeral to Integer.


function roman_to_Int(str1) {
    if(str1 == null) return -1;
    var num = char_to_int(str1.charAt(0));
    var pre, curr;
    
    for(var i = 1; i < str1.length; i++){
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i-1));
    if(curr <= pre){
    num += curr;
    } else {
    num = num - pre*2 + curr;
    }
    }
    
    return num;
    }
    
    function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }       

console.log(roman_to_Int('XXVI'));
console.log(roman_to_Int('CI'));


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 50

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor (name, buildYear, area, numTrees) {
        super (name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor (name, buildYear, length, size = 3) {
        super (name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Cismigiu', 1954, 0.5, 212),
                  new Park('Yore', 1855, 0.2, 198),
                  new Park('Herastrau', 1877, 0.6, 352)];

const allStreets = [new Street('Oituz', 1987, 1.3, 4),
                    new Street('Andronache', 2001, 2.1, 5),
                    new Street('Colentina', 1994, 1.9, 3),
                    new Street('Fundeni', 1878, 2.3, 5)];


function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}

function reportParks(p) {

    console.log('----- PARKS REPORT -----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date.getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {

    console.log('----- STREETS REPORT -----');

    // Total and average length
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // Clasify sizes
    s.forEach(el => el.classifyStreet());

}


reportParks(allParks);
reportStreets(allStreets);

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 51

// Write a JavaScript program to find the most frequent item of an array.

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 52

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
	var minMax = [];
	minMax.push(Math.min(...arr));
	minMax.push(Math.max(...arr));
	return minMax;
}

minMax([14, 35, 6, 1, 34, 54]);
minMax([1.346, 1.6532, 1.8734, 1.8723]);
minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]);
minMax([13, 72, 98, 43, 24, 65, 31]);
minMax([-54, -23, -54, -21]);
minMax([-0.473, -0.6834, -0.1287, 0.5632]);
minMax([0, 0, 0, 0]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 53

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.


function canNest(arr1, arr2) {
	var minMax1 = [];
	var minMax2 = [];
	
	minMax1.push(Math.min(...arr1));
	minMax1.push(Math.max(...arr1));
	
	minMax2.push(Math.min(...arr2));
	minMax2.push(Math.max(...arr2));
	
	if (minMax1[0] > minMax2[0] && minMax1[1] < minMax2[1]) {
		return true;
	} else {
		return false;
	}
}

canNest([1, 2, 3, 4], [0, 6]);
canNest([3, 1], [4, 0]);
canNest([9, 9, 8], [8, 9, 10]);
canNest([9, 9, 8], [8, 9]);
canNest([1, 2, 3, 4], [2, 3]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 54

// Write a function that returns true if a word can be found in between the start and end word in a dictionary.

function isBetween(first, last, word) {
	if (first < word && last > word) {
		return true;
	} else return false;
}

isBetween("apple", "banana", "azure");
isBetween("bookcase", "zebra", "squid");
isBetween("shrapnel", "tapenade", "tally");
isBetween("monk", "monument", "monkey");
isBetween("oath", "ostrich", "osteoporosis");
isBetween("ostracize", "ostrich", "open");
isBetween("bookend", "boolean", "boost");
isBetween("tamer", "tanner", "timid");
isBetween("rhino", "sorcerer", "quote");
isBetween("body", "lung", "ace");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 55

// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.


function isInOrder(str) {
	if (str === (str.split('').sort().join(''))) {
        return true;
    } else {
        return false;
    }
}


isInOrder('abc');
isInOrder('edabit');
isInOrder('xyz');
isInOrder('xyzz');
isInOrder('123');
isInOrder('321');