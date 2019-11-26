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


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 56

// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

function checkAllEven(arr) {
	for (let i = 0; i <= arr.length; i++) {
		  if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
		return true;
	} else return false;
	}
}


checkAllEven([1, 2, 3, 4]);
checkAllEven([2, 4, 6]);
checkAllEven([5, 6, 8, 10]);
checkAllEven([-2, 2, -2, 2]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 57

// Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.

// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.


function limitNumber(num, rangeLow, rangeHigh) {
	if (num >= rangeLow && num <= rangeHigh) {
		return num;
	} else if (num < rangeLow) {
		return rangeLow;
	} else if (num > rangeHigh) {
		return rangeHigh;
	}
}


limitNumber(5, 1, 10)
limitNumber(-3, 1, 10)
limitNumber(14, 1, 10);
limitNumber(4.6, 1, 10);
limitNumber(-100, -73, -70);
limitNumber(2, -73, -70);
limitNumber(-71.5, -73, -70);
limitNumber(7, 8, 8.1);limitNumber(9, 8, 8.1);
limitNumber(8.05, 8, 8.1);
limitNumber(16, 16, 16);
limitNumber(-1, 16, 16);
limitNumber(800, 16, 16);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 57

// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky13(nums) {
	const a = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 13 !== 0) {
			a.push(nums[i]);
		}
	}
	return a;
}


unlucky13([91, 286, 416, 884, 1229]);
unlucky13([245, 518, 741, 824, 1092]);
unlucky13([394, 447, 572, 832, 1105]);
unlucky13([289, 406, 650, 791, 1079]);
unlucky13([390, 438, 1014, 1067, 1091]);
unlucky13([494, 1041, 1158, 1188, 1298]);
unlucky13([43, 117, 169, 702, 1048]);
unlucky13([195, 430, 845, 857, 874]);
unlucky13([247, 510, 1144, 1164, 1206]);
unlucky13([182, 520, 533, 923, 1196]);
unlucky13([52, 144, 148, 1105, 1114]);
unlucky13([130, 204, 364, 585, 679]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 58

// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
	const a = [];
	
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			a.push(Math.abs(arr[i]));
		} else if (arr[i] > 0) {
			a.push(-Math.abs(arr[i]));
		}
	}
	return a;
}


function additiveInverse(arr) {
	return arr.map(x => x = -x);
}


function additiveInverse(arr) {
	return arr.map(x => x * -1);	
}

function additiveInverse(arr) {
	newArr = [];
	arr.forEach(num => {
		console.log(num);
		newArr.push(num * -1);
	});
	return newArr;
}


additiveInverse([5, -7, 8, 3]);
additiveInverse([1, 1, 1, 1, 1]);
additiveInverse([-5, -25, 35]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 59

// Create a function that adds a string ending to each member in an array.

function addEnding(arr, ending) {
	const map = arr.map(x => x.concat(ending));
	
	return map;
}

addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly');
addEnding(['new', 'pander', 'scoop'], 'er');
addEnding(['bend', 'sharpen', 'mean'], 'ing');
addEnding(['bend', 'tooth', 'mint'], 'y');
addEnding(['bend', 'tooth', 'mint'], 'ier');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 60

// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr) {
	return arr[arr.length - 1] + (arr[1] - arr[0]);
}

const nextElement = arr => {
	const [secondLast, last] = arr.slice(-2);
	return last + (last - secondLast);
}

function nextElement(arr) {
	let s = arr.pop();
	return s + (s - arr.pop());
}

nextElement([3, 5, 7, 9]);
nextElement([-5, -6, -7]);
nextElement([2, 2, 2, 2, 2]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 61

// Write a function that reverses a string. Make your function recursive.

function reverse(str) {
	return str.split("").reverse().join("");
}

reverse("hello");
reverse("world");
reverse("a");
reverse("");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 62

// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(factors, num) {
	return factors.every(x => num % x === 0);
}


checkFactors([2, 3, 4], 12);
checkFactors([1, 2, 3, 8], 12);
checkFactors([1, 2, 50], 100);
checkFactors([1, 9, 81], 81);
checkFactors([5, 10, 50], 500);
checkFactors([5, 10, 499], 500);
checkFactors([3, 6], 9);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 63

// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(start) {
	let a = [];
	let b = start;
	for (let i = 0; i <= start; i++) {
		if (start >= 0) {
			a.push(b);
			b--;
		}
	}
	return a;
}

const countdown = start => [...Array(start + 1).keys()].reverse();

function countdown(start) {
	let arr = []
	for(let i=start; i>=0; i--){
		arr.push(i)
	}
	return arr
}

function countdown(start) {
	const result = [];
  
	for(let i = 0 ; i <= start ; i++){
    result.push(i);
  }
  
  return result.reverse();
}

countdown(3);
countdown(20);
countdown(1);
countdown(0);

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 64

// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(result) {
	return new Set(result).size === 1
}

function testJackpot(result) {
    return result.every(x => x === result[0]);	
}

const testJackpot = arr => new Set(arr).size === 1;

function testJackpot(result) {
	for (i in result){
		if (result[0]!=result[i]){
			return false
		}
	}
	return true;
}


testJackpot(['@', '@', '@', '@']);
testJackpot(['!', '!', '!', '!']);
testJackpot(['abc', 'abc', 'abc', 'abc']);
testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']);
testJackpot(['SS', 'SS', 'SS', 'SS']);
testJackpot([':(', ':)', ':|', ':|']);
testJackpot(['&&', '&', '&&&', '&&&&']);
testJackpot(['hee', 'heh', 'heh', 'heh']);
testJackpot(['SS', 'SS', 'SS', 'Ss']);
testJackpot(['SS', 'SS', 'Ss', 'Ss']);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 64

// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.


function hurdleJump(hurdles, jumpHeight) {
	return Math.max(...hurdles) <= jumpHeight;
}


hurdleJump([1, 2, 3, 4, 5], 5);
hurdleJump([5, 5, 3, 4, 5], 3);
hurdleJump([5, 4, 5, 6], 10);
hurdleJump([1,2,1], 1);
hurdleJump([3,3,3], 4);
hurdleJump([4,4], 3);
hurdleJump([], 4);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 65

//A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {
	return (str === str.split("").reverse().join(""));
}

function checkPalindrome(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
    return false;
    }
}
return true;
}

function checkPalindrome(str) {
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let checkPalindrome = removeChar.split('').reverse().join('');
    return (removeChar === checkPalindrome);
}

checkPalindrome('mom');
checkPalindrome('scary');
checkPalindrome('reviver');
checkPalindrome('stressed');
checkPalindrome('good');
checkPalindrome('refer');
checkPalindrome('something');
checkPalindrome('redder');
checkPalindrome('civic');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 66

//Create a function that returns true if two arrays contain identical values, and false otherwise.

// Fix this code
function checkEquals(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1.sort()[i] !== arr2.sort()[i]) {
			return false;
		}
	}
	return true;
}

function checkEquals(arr1, arr2) {
	return (arr1.toString() === arr2.toString());
}

function checkEquals(arr1, arr2) {
	return arr1.every((x, i) => x === arr2[i])
 	
}

function checkEquals(arr1, arr2) {
	if (arr1.join() === arr2.join()) {
  	return true
 	} else {
  	return false
 	}
}

checkEquals([1, 2], [1, 3]);
checkEquals([11, 2], [1, 12]);
checkEquals([34, 56, 98], [34, 56, 98]),
checkEquals([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7], [11, 12, 13, 14, 15, 16, 17]);
checkEquals([11, 12, 15, 16, 19], [11, 13, 15, 1, 6, 19, 20]);
checkEquals([11, 12, 13, 14, 15, 16], [11, 12, 13, 14, 15, 16]);
checkEquals([123, 45, 6, 78, 90], [1234, 5678, 90]);
checkEquals([23, 26, 78, 934], [94, 26, 78, 934]);
checkEquals([], []);
checkEquals([9, 87, 1, 23], [98, 7, 12, 3]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 67

// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.


function transform(arr) {
	const a = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			a.push(arr[i] - 1);
		} else a.push(arr[i] + 1)
	}
	return a;
}

function transform(arr) {
    return arr.map(num => num % 2 === 0 ? num - 1 : num + 1)
}


transform([1, 2, 3, 4, 5]);
transform([3, 3, 4, 3]);
transform([2, 2, 0, 8, 10]);
transform([9, 13, 15, 5, 2, 11]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 68

// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
	const a = str.split(', ');
	const b = [];
	for (let i = 0; i < a.length; i++) {
		if (str === undefined || str.length == 0) {
			return b;
		} else {
			b.push(a[i]);
		}
	}
	return b;
}


toArray("watermelon, raspberry, orange");
toArray("x1, x2, x3, x4, x5");
toArray("a, b, c, d");
toArray("");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 69

// A pair of strings form a strange pair if:

// 1st string's first letter = 2nd string's last letter.
// 1st string's last letter = 2nd string's first letter.


function isStrangePair(str1, str2) {
	return (str1[0] === str2[str2.length -1] && str1[str1.length -1] === str2[0]);
}


isStrangePair("ratio", "orator");
isStrangePair("sparkling", "groups");
isStrangePair("mentee", "eminem");
isStrangePair("yahtzee", "easy");
isStrangePair("bush", "hubris");
isStrangePair("edit", "cheese");
isStrangePair("false", "true");
isStrangePair("cupid", "dionysus");
isStrangePair("futile", "elephant");
isStrangePair("", "");
isStrangePair("", "abc");
isStrangePair("a", "a");
isStrangePair("a", "b");
isStrangePair("&", "&");
isStrangePair("&!", "!&");
isStrangePair("5556", "65");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 70

//You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

function correctStream(user, correct) {
	const map = user.map((x, i) => {
		if(x === correct[i]) {
			return 1;
		} else return -1
	});
	return map;
}

const correctStream = (answers, solutions) =>
  answers.map((answer, i) => (answer === solutions[i] ? 1 : -1));


correctStream = (u, c) => u.map(x => x == c[c.indexOf(x)] ? 1: -1)

correctStream(["it", "is", "find"], ["it", "is", "fine"]);
correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]);
correctStream(["weird", "indicr", "moment"], ["weird", "indict", "moment"]);
correctStream(["starry", "wind", "skies"], ["starry", "wind", "skies"]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 71

// You're in the midst of creating a typing game.

// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.


function dictionary(initial, words) {
	const result = words.filter(word => word.startsWith(initial));
	return result;
}

const dictionary = (init, words) => words.filter(x => x.startsWith(init))

dictionary('bu', ['button', 'breakfast', 'border']);
dictionary('beau', ['pastry', 'delicious', 'name', 'boring']);
dictionary('there', ['there', 'here', 'everywhere']);
dictionary('sno', ['snow', 'paper', 'ghost']);
dictionary('ma', ['marriage', 'married', 'many', 'delight']);
dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy']);
dictionary('cre', ['creating', 'creature', 'creed', 'increasing']);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 72

// Create a function that returns true if two arrays contain identical values, and false otherwise.


function checkEquals(arr1, arr2) {
	if (arr1.toString() === arr2.toString()) {
  	return true 
  } else {
  	return false
  }
}

function checkEquals(arr1, arr2) {
	return arr1.every((x, i) => x == arr2[i])
}

function checkEquals(arr1, arr2) {
	return arr1.toString() == arr2.toString();
}

function checkEquals(arr1, arr2) {
	if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  	return true 
  } else {
  	return false
  }
}

function checkEquals(arr1, arr2) {
	if (arr1.join() === arr2.join()) {
  	return true 
  } else {
  	return false
  }
}

checkEquals([1, 2], [1, 3]);
checkEquals([1, 2], [1, 2]);
checkEquals([4, 5, 6], [4, 5, 6]);
checkEquals([4, 7, 6], [4, 5, 6]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 73

// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]].

function removeEmptyArrays(arr) {
	return arr.filter(x => x.length !== 0)
}


removeEmptyArrays(['a', 'b', []]);
removeEmptyArrays([1, 2, [], 4]);
removeEmptyArrays([[], [], [], []]);
removeEmptyArrays([1, 2, 3, 4]);
removeEmptyArrays([1, [], [], 4]);

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 73

// Write a function that finds the sum of the first n natural numbers. Make your function recursive.


function sum(n) {
	let a = 0;
	for (let i = 1; i <= n; i++) {
		a +=i;
	}
	return a;
}

const sum = n => n === 1 ? n : n + sum(n-1);

sum(1);
sum(5);
sum(7);
sum(10);
sum(12);
sum(15);
sum(20);
sum(100);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 74

// Create a function replaces all the vowels in a string with a specified character.


function replaceVowels(str, ch) {
	return str.replace(/[aeoiu]/g, ch);
}

replaceVowels("the aardvark", "#");
replaceVowels("minnie mouse", "?");
replaceVowels("shakespeare", "*");
replaceVowels("all is fair in love and war", "<");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 75

// Create a function to multiply all values in an array by the amount of values in that array.


function MultiplyByLength(arr) {
	const map = arr.map(x => x * arr.length);
	return map;
}


MultiplyByLength([2,6,4,9]);
MultiplyByLength([4,1,1]);
MultiplyByLength([1,0,3,3,7,2,1]);
MultiplyByLength([0]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 76

// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
    let a = [];
    for (let i = 1; i <= num; i++)
        if (i % 2 === 0) {
            a.push(i);
        }
    return a;
}

const findEvenNums = num => [...Array(num).keys()].map(x => x + 1).filter(x => !(x % 2));

findEvenNums(4);
findEvenNums(8);
findEvenNums(2);
findEvenNums(1);
findEvenNums(9);
findEvenNums(11);

// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 77

// Create a function that filters out an array to include numbers who only have a certain number of digits.

function filterDigitLength(arr, num) {
	const a = arr.filter(x => x.toString().length === num);
	return a;
}

function filterDigitLength(arr, num) {
	return arr.filter(n => String(n).length === num);
}

filterDigitLength([88, 232, 4, 9721, 555], 3);
filterDigitLength([2, 7, 8, 9, 1012], 1);
filterDigitLength([32, 88, 74, 91, 300, 4050], 1);
filterDigitLength([5, 6, 8, 9], 1);
filterDigitLength([99, 838, 435, 7666, 989, 431], 3);
filterDigitLength([99, 838, 435, 7666, 989, 431], 2);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 78

// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
	if (str.length > 2) {
		return str.slice(1, str.length - 1);
	} else return str;
}

removeFirstLast = str => str.slice(1, -1) || str;

function removeFirstLast(str) {
	if (str.length <= 2) return str;
	return str.replace(/(^\w|\w$)/g, '');
}

removeFirstLast("hello");
removeFirstLast("benefit");
removeFirstLast("wordy");
removeFirstLast("maybe");
removeFirstLast("to");
removeFirstLast("a");
removeFirstLast("");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 79

// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
    if (arr.toString().includes("7")) {
        return "Boom!";
    }
return "there is no 7 in the array";
}


sevenBoom([2, 6, 7, 9, 3]);
sevenBoom([33, 68, 400, 5]);
sevenBoom([86, 48, 100, 66]);
sevenBoom([76, 55, 44, 32]);
sevenBoom([35, 4, 9, 37]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 80

// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function reverse(bool) {
	if (typeof bool === "boolean" && bool) {
		return false;
	} else if (typeof bool === "boolean" && !bool) {
		return true;
	} else {
		return "boolean expected";
	}
}

function reverse(bool) {
	return typeof bool === 'boolean' ? !bool : 'boolean expected'
}

const reverse = bool => typeof bool === 'boolean' ? !bool : 'boolean expected';

reverse(false);
reverse(true);
reverse(0);
reverse(null);
reverse(undefined);
reverse({});


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 81

// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations - abb
// Full names - full

function filterStateNames(arr, type) {
	return arr.filter(v => type === 'abb' ? v.length < 3 : v.length > 2);
}

function filterStateNames(arr, type) {
	if(type == 'abb') {
		return arr.filter(el => el.length <= 2);
	}else if(type == 'full') {
		return arr.filter(el => el.length > 2);
	}
}

filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb');
filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full');
filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb');
filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full');
filterStateNames(['Montana', 'FL'], 'abb');
filterStateNames(['Montana', 'FL'], 'full');




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 82

// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When no x and no o are in the string, return true.


function XO(str) {
	let x = 0;
	let o = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "x") {
			x++;
		} else if (str[i].toLowerCase() === "o") {
			o++;
		}
	}
	if (x === o) {
		return true;
	} else return false;
}

function XO(str) {
    return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
}

function XO(str) {
    let x = str.toLowerCase().split('').filter(x => x === 'x').length;
    let o = str.toLowerCase().split('').filter(x => x === 'o').length;
    return x === o;
}

XO("ooxx");
XO("xooxx");
XO("ooxXm");
XO("zpzpzpp");
XO("zzoo");
XO("Xo");
XO("x");
XO("o");
XO("xxxoo");
XO("");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 83

// Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
	return arr.filter(x => x % 2 === 0);
}

noOdds([1, 2, 3, 4, 5, 6, 7, 8]);
noOdds([43, 65, 23, 89, 53, 9, 6]);
noOdds([718, 991, 449, 644, 380, 440]);
noOdds([148, 6, 16, 85]);
noOdds([9, 49, 23]);
noOdds([34, 43, 32, 49, 40]);
noOdds([1232, 1990, 1284, 1391, 1958]);
noOdds([2766, 2651, 2373, 2916, 2397, 2539]);
noOdds([53, 65, 52, 62, 59]);
noOdds([393, 156, 14, 166, 129, 246]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 84

// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
	if ((arr.indexOf("Frodo") - arr.indexOf("Sam") === -1) || (arr.indexOf("Frodo") - arr.indexOf("Sam") === 1)) {
		return true;
	} else return false;
}

function middleEarth(arr) {
	return Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) === 1
}

const middleEarth=r=>{
	let a=r.indexOf('Sam'); 
	let b=r.indexOf('Frodo');
	return (a+1===b||a-1==b);
}

const middleEarth = arr => /samfrodo|frodosam/gi.test(arr.join(''));

middleEarth(['Frodo', 'Sam', 'Gandalf']);
middleEarth(['Orc', 'Sam', 'Gandalf', 'Frodo']);
middleEarth(['Sam', 'Frodo', 'Saruman']);
middleEarth(['Orc', 'Frodo', 'Legolas', 'Sam', 'Bilbo']);
middleEarth(['Aragorn', 'Gandalf', 'Sam', 'Frodo', 'Gollum']);
middleEarth(['Arwen', 'Sam', 'Gandalf', 'Frodo', 'Boromir']);
middleEarth(['Faramir', 'Frodo', 'Sam', 'Galadriel']);
middleEarth(['Eowin', 'Gimli', 'Bilbo', 'Frodo', 'Sam', 'Sauron']);
middleEarth(['Gandalf', 'Sam', 'Bilbo', 'Legolas', 'Frodo']);
middleEarth(['Legolas', 'Eowyn', 'Gandalf', 'Sam', 'Frodo', 'Gimli']);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 85

// Write a function that returns true if the product of an array is divisible by the sum of that same array.

function divisible(arr) {
	let sum = 0;
	let prod = 1;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		prod *= arr[i];
	}

	if (prod % sum === 0) {
		return true;			
	} else return false;
}

function divisible(arr) {
	return arr.reduce((a, c) => a * c, 1) % arr.reduce((a, c) => a + c) === 0
}

const sum = arr => arr.reduce((total, num) => total + num, 0);

const multiply = arr => arr.reduce((total, num) => total * num, 1);

const divisible = arr => multiply(arr) % sum(arr) === 0;

divisible([3, 2, 4, 1]);
divisible([4, 4, 4, 4]);
divisible([4, 2, 6]);
divisible([1, 1, 1, 1, 10]);
divisible([10, 5, 10]);
divisible([3, 5, 1]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 86

// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]

// Return two empty subarrays if the input is an empty array.
// Keep the same relative ordering as the original array.

function evenOddPartition(arr) {
	let even = [];
	let odd = [];
	let _null = [];
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			even.push(arr[i]);
		} else if (arr[i] % 2 === 1) {
			odd.push(arr[i]);
		} else _null.push(arr[i]);
	}
	
	if (_null.length < 1) {
		return [even, odd];
	} else {
		return [even, odd, _null];
	}
	
}

const evenOddPartition = arr => [arr.filter(x => x % 2 == 0),arr.filter(y => y % 2 != 0) ];


const isEven = num => num % 2 === 0;

const evenOddPartition = arr => [
  arr.filter(isEven),
  arr.filter(num => !isEven(num)),
];


function evenOddPartition(arr) {
	var evens = arr.filter(x=>x%2 === 0);
	var odds = arr.filter(x=>x%2 === 1);
	return [evens,odds];
	
}

evenOddPartition([5, 8, 9, 2, 0]);
evenOddPartition([1, 0, 1, 0, 1, 0]);
evenOddPartition([8, 8, 4, 2]);
evenOddPartition([1, 3, 5, 7, 9]);
evenOddPartition([]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 87

// Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.


function convertCartesian(x, y) {
	let a = [];
	for (let i = 0; i < x.length; i++) {
		a.push([x[i], y[i]]);
	}
	
	return a;
}

function convertCartesian(x, y) {
	return x.map((v, i) => [v, y[i]])
}

convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]);
convertCartesian([9, 8, 3], [1, 1, 1]);
convertCartesian([2, 5, 1], [7, 8, 9]);
convertCartesian([3, 2, 2], [6, 1, 7]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 88

// Create a function to extract the name of the subreddit from its URL.


function subReddit(link) {
	const a = link.split("/");
	
	for (let i = 0; i < a.length; i++) {
			if (a[i] === "r") {
				return a[i + 1];
			}
	}
}


const subReddit= (link) => link.split('/r/')[1].split('/')[0]


const subReddit = link => link.match(/\/r\/(\w+)/)[1];


subReddit("https://www.reddit.com/r/relationships/");
subReddit("https://www.reddit.com/r/mildlyinteresting/");
subReddit("https://www.reddit.com/r/funny/");
subReddit("https://www.reddit.com/r/CrappyDesign/");
subReddit("https://www.reddit.com/r/confession/");
subReddit("https://www.reddit.com/r/AskMen/");
subReddit("https://www.reddit.com/r/comics/");
subReddit("https://www.reddit.com/r/lifehacks/");
subReddit("https://www.reddit.com/r/wholesomememes/");
subReddit("https://www.reddit.com/r/iamverysmart/");
subReddit("https://www.reddit.com/r/starterpacks/");
subReddit("https://www.reddit.com/r/awww/");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 89

// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

function getWord(left, right) {
	const left1 = left.charAt(0).toUpperCase() + left.slice(1);
	let a = [left1, right].join("");
	return a;
}


function getWord(left, right) {
	return left[0].toUpperCase() + left.slice(1) + right
}



getWord("maga", "zine");
getWord("reli", "able");
getWord("impl", "icit");
getWord("docu", "ment");
getWord("oppo", "site");
getWord("offi", "cial");
getWord("disa", "gree");
getWord("acci", "dent");
getWord("omis", "sion");
getWord("vigo", "rous");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 90

// Create a function that takes an array of students and returns an array of student names.

function getStudentNames(students) {
	return students.map( x => x.name);
}


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 91

// Create a function that returns the product of all odd integers in an array.

function oddProduct(arr) {
	let a = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			a *= arr[i];
		}
	}
	return a;
}

function oddProduct(arr) {
	return arr.filter(x => x % 2 !== 0).reduce((a,b) => a * b);
}

oddProduct([3, 4, 1, 1, 5]);
oddProduct([5, 5, 8, 2, 4, 32]);
oddProduct([1, 2, 1, 2, 1, 2, 1, 2]);
oddProduct([0, 0, 0, 1]);
oddProduct([1, 2, 2, 5, 2, 0]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 92

// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
	return str.split("").sort().join("");
}

function AlphabetSoup(str) {
    return [...str].sort().join('');
}

AlphabetSoup("hello");
AlphabetSoup("edabit");
AlphabetSoup("hacker");
AlphabetSoup("geek");
AlphabetSoup("javascript");
AlphabetSoup("credibility");
AlphabetSoup("apostrophe");
AlphabetSoup("determination");
AlphabetSoup("win");
AlphabetSoup("synthesis");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 93

// Create a function that repeats each character in a string n times.

function repeat(str, n) {
	const a = [];
	for (let i = 0; i < str.length; i++) {
		a.push(str[i].repeat(n));
	}
	return a.join("");

}

function repeat(str, n) {
	return [...str].map(x => x.repeat(n)).join('');
}


function repeat(str, n) {
	return str
        .split('')
        .map(c => c.repeat(n))
        .join('');
}

function repeat(str, n) {
	return str.split('').map(x=>x.repeat(n)).join('');
}

repeat("mice", 5);
repeat("hello", 3);
repeat("stop", 1);
repeat("tomato", 2);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 94

// Write a function that retrieves the last n elements from an array.

function last(a, n) {
	if (n > a.length) {
		return "invalid";
	} else {
		return a.slice(Math.max(a.length - n, 0));
	}
}


function last(a, n) {
	if(n > a.length){
		return "invalid";
	}
	return a.slice(a.length-n);
}

const last = (a, n) => 
	a.length >= n ? a.slice(a.length-n, a.length) : "invalid";

last([1, 2, 3, 4, 5], 0);
last([1, 2, 3, 4, 5], 1);
last([4, 3, 9, 9, 7, 6], 3);
last([5, 1, 2], 3);
last([], 1);
last([1, 2, 3, 4, 5], 7);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 94

// Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]


function firstAndLast(s) {
	return [s.split("").sort().join(""), s.split("").sort().reverse().join("")];
}


firstAndLast("marmite");
firstAndLast("bench");
firstAndLast("scoop");
firstAndLast("fanatic");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 95

// Write a function that returns true if an object is empty, and false otherwise.


function isEmpty(obj) {
	return Object.entries(obj).length === 0 && obj.constructor === Object
}


function isEmpty(obj) {
	return !Object.keys(obj).length
}

isEmpty({});
isEmpty({a: 1});
isEmpty({z: 2, w: 4, y: 5});



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 96

// Hamming distance is the number of characters that differ between two strings.

function hammingDistance(str1, str2) {
    let counter = 0;

    for (let i = 0; i < str1.length; i++)
        {
            if (str1.charAt(i) != str2.charAt(i)) {
                counter++;
            }
        }

    return counter;
}

const hammingDistance = (a, b) =>
	[...a].filter((x, i) => x != b[i]).length


hammingDistance("abcde", "bcdef");
hammingDistance("abcde", "abcde");
hammingDistance("strong", "strung");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 97

// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(s) {
	return s.split("").every(x => x === s[0]);
}


function isIdentical(s) {
	return new Set([...s]).size === 1;
}

function isIdentical(s) {
	let x = s[0];
	for (let i of s) {
		if (i !== x) { return false; }
	}
	return true;
}

const isIdentical = a =>{
	for(i=0;i<=a.length-1;i++){
		if(a[0]!==a[i])
			return false
	}
	return true ;
}

function isIdentical(s) {
	return /^(\w)\1*$/.test(s)
}

isIdentical("kkkkk");
isIdentical("ckkkk");
isIdentical("kkkkck");
isIdentical("aabc");
isIdentical("ccc");
isIdentical("aabbbb");
isIdentical("bbbbbb");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 98

// Write a function that returns true if a number is a palindrome.


function isPalindrome(n) {
	return n.toString() === n.toString().split("").reverse().join("");
}

function isPalindrome(n) {
	return [...String(n)].reverse().join('') === '' + n
}

isPalindrome(838);
isPalindrome(77);
isPalindrome(95159);
isPalindrome(839);
isPalindrome(4234);
isPalindrome(13);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 99

// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".


function greetPeople(names) {
	const a = [];
	for (let i = 0; i < names.length; i++) {
		a.push("Hello " + names[i]);
	}
	return a.join(", ");
}


function greetPeople(names) {
	return names.map(n => `Hello ${n}`).join(', ');
}

greetPeople(["Kyrill"]);
greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]);
greetPeople([]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 100

// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.


function minimumRemovals(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	
	return sum % 2;
}

const minimumRemovals = arr => arr.reduce((a, c) => a + c ) % 2;


minimumRemovals([1, 2, 3, 4, 5]);
minimumRemovals([5, 7, 9, 11]);
minimumRemovals([5, 7, 9, 12]);
minimumRemovals([5, 8, 8, 8]);
minimumRemovals([5, 8, 8, 8, 9, 9]);
minimumRemovals([9, 8, 8, 8, 9, 9]);
minimumRemovals([5, 5, 4, 4, 3, 3]);
minimumRemovals([5, 3, 4, 4, 3]);
minimumRemovals([5, 3, 4, 4, 0]);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 101

// Create a function that takes two strings and returns true if the first string ends with the second string; otherewise return false.


function checkEnding(str1, str2) {
	return str1.endsWith(str2);
}


checkEnding("abc", "bc");
checkEnding("abc", "d");
checkEnding("samurai", "zi");
checkEnding("feminine", "nine");
checkEnding("convention", "tio");
checkEnding("cooperative", "ooper");
checkEnding("extraterrestrial", "xtraterrestrial");
checkEnding("access", "ss");
checkEnding("motorist", "is");
checkEnding("landowner", "landowner");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 102

// Write a function that finds the sum of an array. Make your function recursive.

function sum(arr) {
	if (arr.length > 0) {
		return arr.reduce((acc, cur) => (acc + cur));
	} return 0;
}


function sum(arr) {
	const sum = arr.reduce((a, b) => a + b, 0);
	return sum;
}

function sum(arr) {
    return arr.length === 0 ? 0 : arr.pop() + sum(arr);
}

sum([1, 2, 3, 4]);
sum([-1, -1, -1]);
sum([1]);
sum([]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 103

// Write a function that maps files to their extension names.


function getExtension(arr) {
	const a = [];
	for (let i = 0; i < arr.length; i++) {
		a.push(arr[i].split(".")[1]);
	}
	return a;
}

function getExtension(arr) {
	return arr.map(x => x.split(".").pop())
}

function getExtension(arr) {
	return arr.map(x => x.split('.')[1])
}

getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]);
getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]);
getExtension(["code.html", "code.css"]);
getExtension(["minesweeper.java", "game.java", "my_project.java"]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 104

// Given an array, transform that array into a mirror.


function mirror(arr) {
	const a = arr;
	for (let i = arr.length - 2; i >= 0; i--) {
		a.push(arr[i]);
	}
	return a;
}


function mirror(arr) {
	return [... arr, ... arr.splice(0, arr.length - 1).reverse()]
}


function mirror(arr) {
	return arr.concat(arr.concat().reverse().slice(1));
}


const mirror = ar => {
    let a = ar.slice().reverse().slice(1);
    let b = ar.concat(a);
    return b;
}

mirror([1,2,3,4,5]);
mirror([0,2,4,6]);
mirror([1,2,2,3,3,4]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 105

// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

function progressDays(runs) {
	let a = 0;
	for (let i = 0; i < runs.length - 1; i++) {
		if (runs[i] - runs[i+1] < 0) {
			a++;
		}
	}
	return a;
}

function progressDays(runs) {
	return runs.filter((e,i,a)=>e<a[i+1]).length;
}

const progressDays=(runs)=>
runs.reduce((acc,next,index,arr)=>arr[index]-arr[index-1]>0?acc+1:acc,0)

progressDays([3, 4, 1, 2]);
progressDays([10, 11, 12, 9, 10]);
progressDays([6, 5, 4, 3, 2, 9]);
progressDays([9, 9]);
progressDays([12, 11, 10, 12, 11, 13]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 106

// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.


function same(a1, a2) {
	const uniqueItems1 = Array.from(new Set(a1));
	const uniqueItems2 = Array.from(new Set(a2));
	
	return uniqueItems1.length === uniqueItems2.length;
}

const same = (a1, a2) => new Set(a1).size === new Set(a2).size;

same([1, 3, 4, 4, 4], [2, 5, 7]);
same([9, 8, 7, 6], [4, 4, 3, 1]);
same([2], [3, 3, 3, 3, 3]);
same([5, 6, 7, 9], [4, 1]);
same([5, 9, 9], [9, 5]);
same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4]);
same([], []);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 107

// Create a function, that will for a given a, b, c, do the following:

// Add a to itself b times.
// Check if the result is divisible by c.

function abcmath(a, b, c) {
	return ((a * b) % c === 0);
}

function abcmath(a, b, c) {
	let x = 0;
	for (let i = 1; i <= b; i++) {
		x += a;
	}
	
	return x % c === 0
}

const abcmath = (a, b, c) => (a * Math.pow(2, b)) % c === 0;

abcmath(1, 2, 3);
abcmath(69, 15, 9);
abcmath(9, 2, 52);
abcmath(5, 2, 3);
abcmath(5, 2, 1);
abcmath(261, 2, 1);
abcmath(22, 2, 22);
abcmath(69, 12, 3);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 108

// Write a function that removes any non-letters from a string, returning a well-known film title.


function lettersOnly(str) {
	return str.replace(/[^A-Za-z]/g, "");  
}

function lettersOnly(str) {
	return str.replace(/[^a-z]/gi, '');
}

lettersOnly(',1|2)")A^1<[_)?^"]l[a`3+%!d@8-0_0d.*}i@&n?=');
lettersOnly('^U)6$22>8p).');
lettersOnly('I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8');
lettersOnly('!)"P[s9)"69}yc3+?1]+33>3ho');
lettersOnly(':~;G{o}o{+524<df~:>}e24{l8:_l]a:?@]%s7');
lettersOnly('&&S~]@8>1-0!h#r),80<_>!}|e>_k:');
lettersOnly(')^/|,!!09]=/1<G2?`=[l{a}d9]^i7a0|t6_o2*r');
lettersOnly(']8;]V9e{=0r!.5t>i<^_g"4o"5~');
lettersOnly('%%)?"?B#>/_4a#,;t8|m8675a(n');
lettersOnly('97H^)~a8567ll*o?"6%)w63e37e<n?@=');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 109

// Create a function that returns the number of hashes and pluses in a string.


function hashPlusCount(str) {
	let a = 0;
	let b = 0;
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "#") {
			a++
		} else b++;
	}
	
	return [a, b];
}


const hashPlusCount = str => [
    (str.match(/#/g) || []).length,
    (str.match(/\+/g) || []).length,
];


hashPlusCount("####");
hashPlusCount("#");
hashPlusCount("+++++++");
hashPlusCount("++");
hashPlusCount("#+#+");
hashPlusCount("###+");
hashPlusCount("##+++#");
hashPlusCount("#+++#+#++#");
hashPlusCount("");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 110

// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, times) {
	const a = [];
	
	for (let i = 0; i < times; i++) {
		a.push(item);
	}
	return a;
}

function repeat(item, times) {
	return Array(times).fill(item);
}


repeat("edabit", 3);
repeat(13, 5);
repeat("7", 2);
repeat("2 0 1 8", 1);
repeat("tom dick and harry", 6);
repeat(0, 1);
repeat(0, 0);
repeat("z", 0);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 111

// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).


function mean(nums) {
	let a = 0;
	for (let i = 0; i < nums.length; i++) {
		a += nums[i];
	}
	
	return parseFloat((a / nums.length).toFixed(1));
}


const mean = nums =>
+(nums.reduce((a,b)=> a+b) / nums.length).toFixed(1);

mean([1, 1, 2, 2, 3, 5, 5, 5, 7]);
mean([1, 2, 2, 3, 7, 9, 10]);
mean([1, 2, 3, 4, 5, 6, 6, 10, 10]);
mean([5, 5, 6, 7, 10, 10]);
mean([1, 3, 3, 4, 5, 6, 7, 8]);
mean([2, 4, 6, 6, 6, 8, 9]);
mean([2, 4, 6, 6, 6, 7, 7, 8, 9]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 112

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

function largestSwap(num) {
	if (num >= parseInt(num.toString().split("").reverse().join(""))) {
		return true;
	} else if (num < parseInt(num.toString().split("").reverse().join(""))) {
		return false;
	}
}


function largestSwap(num) {
	return num / 10 > num % 10
}


const largestSwap = num => Math.floor(num / 10) >= num % 10;

largestSwap(27);
largestSwap(43);
largestSwap(14);
largestSwap(53);
largestSwap(99);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 113

// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o") {
				return str.indexOf(str[i]);
				}
	}
}


function firstVowel(str) {
	return str.search(/a|e|i|o|u/i);
}

firstVowel("hello");
firstVowel("apple");
firstVowel("string");
firstVowel("STRAWBERRY");
firstVowel("MELON");
firstVowel("piNNEaPLE");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 114

// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...


function boxSeq(step) {
	let x = 0;
	let counter = step;
	
	for (let i = 1; i <= step; i++) {
			if (step <= 0) {
			x = 0;
		} else if (counter % 2 === 1) {
			x += 3;
			counter--;
		} else if (counter % 2 === 0) {
			x -= 1;
			counter--;
		}
	}
	return x;
}

const boxSeq = step => (step % 2 === 0 ? step : step + 2);

const boxSeq = step => step + (step % 2 ? 2 : 0);

boxSeq(5);
boxSeq(0);
boxSeq(6);
boxSeq(99);
boxSeq(2);
boxSeq(1);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 115

// A value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(arr, val) {
	if (arr.every(x => arr.includes(val))) {
		return true;
	} else if (arr.every(x => x.includes(val))) {
		return true;
	} else return false;
									 
}


function isOmnipresent(arr, val) {
	return arr.every(x => x.includes(val));
}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1);
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);
isOmnipresent([[5], [5], [5], [6, 5]], 5);
isOmnipresent([[5], [5], [5], [6, 5]], 6);
isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 116

// Create a function that takes in an array of numbers and returns the sum of its cubes.


function sumOfCubes(nums) {
	let a = 0;
	for (let i = 0; i < nums.length; i++) {
		a += Math.pow(nums[i], 3);
	}
	return a;
}

function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}


sumOfCubes([1, 5, 9]);
sumOfCubes([3, 4, 5]);
sumOfCubes([1, 1, 1]);
sumOfCubes([2]);
sumOfCubes([5, 1, 2]);
sumOfCubes([32]);
sumOfCubes([5, 9, 4, 4, 9]);
sumOfCubes([0, 1, 2]);
sumOfCubes([]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 117

// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.


function set(arr) {
	return [...new Set(arr)];
}


const set = arr => Array.from(new Set(arr));


function set(arr) {
	return arr.filter((n, index) => arr.indexOf(n) == index);
}

set([1, 3, 3, 5, 5]);
set([4, 4, 4, 4]);
set([5, 7, 8, 9, 10, 15]);
set([5, 9, 9]);
set([1, 2, 3, 4, 5, 5, 6, 6, 7]);
set([1, 1, 2, 2, 2]);
set(['A', 'A', 'A', 'A']);
set(['A', 'B', 'C', 'D']);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 118

// Create a function that takes an integer and returns an array from 1 to the given number, where:

// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.


function amplify(num) {
	let a = [];
	let c = num;
	for (let i = 1; i <= num; i++) {
		if (c % 4 === 0) {
			a.push(c * 10);
			c--;
		} else {
			a.push(c);
			c--;
		}
	}
	return a.reverse();
}


function amplify(num) {
	var a = [];
	for(var i = 1; i <= num; i++){
		if(i % 4 == 0){
			a.push(i*10);
		}else{
			a.push(i);
		}
	}
	return a;
}


const amplify = num =>
  Array.from({ length: num }, (_, i) => {
    const num = i + 1;
    return num % 4 === 0 ? num * 10 : num;
});


amplify(1);
amplify(4);
amplify(25);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 119

// Given a word, write a function that returns the first index and the last index of a character.


function charIndex(word, char) {
	if(!word.includes(char)) {
		return undefined;
	} else return [word.indexOf(char), word.lastIndexOf(char)];
}


const charIndex = (word, char) =>
  word.includes(char)
    ? [word.indexOf(char), word.lastIndexOf(char)]
    : undefined;


charIndex('hello', 'l');
charIndex('circumlocution', 'r');
charIndex('circumlocution', 'i');
charIndex('circumlocution', 'c');
charIndex('happy', 'h');
charIndex('happy', 'p');
charIndex('happy', 'e');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 120

// Given two strings, create a function that returns the total number of unique characters from the combined string.


function countUnique(s1, s2) {
	return [...new Set(s1.concat(s2))].length;
}


function countUnique(s1, s2) {
	return new Set(s1 + s2).size;
}


function countUnique(s1, s2) {
	return new Set([...s1,...s2]).size
}

countUnique("apple", "play");
countUnique("sore", "zebra");
countUnique("pip", "geeks");
countUnique("a", "soup");
countUnique("maniac", "maniac");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 120

// Create a function to convert an array of percentages to their decimal equivalents.


function convertToDecimal(perc) {
	return perc.map(x => parseFloat(x) / 100);
}


convertToDecimal(["33%", "98.1%", "56.44%", "100%"]);
convertToDecimal(["45%", "32%", "97%", "33%"]);
convertToDecimal(["1%", "2%", "3%"]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 120

// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.


function charCount(myChar, str) {
	let a = 0;
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] === myChar) {
			a++;
		}
	}
	return a;
}


function charCount(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}


function charCount(myChar, str) {
	
	return (str.split("").filter(char => char === myChar)).length;
}

charCount('a', 'edabit');
charCount('b', 'big fat bubble');
charCount('c', 'Chamber of secrets');
charCount('f', 'frank and his friends have offered five foxes for sale');
charCount('x', 'edabit');
charCount('a', 'Adam and Eve bit the apple and found a snake');
charCount('s', 'sssssssssssssssssssssssss');
charCount('7', '10795426697');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 121

// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.


function societyName(friends) {
	let a = "";
	
	for (let i = 0; i < friends.length; i++) {
		a += friends[i].charAt(0);
	}
	
	return a.split('').sort().join('');
}


function societyName(friends) {
	return friends.map(x => x[0]).sort().join("")
}


function societyName(friends) {
	return friends.reduce(function(acc,current)  {
    return acc + current[0]
  }, "").split("").sort().join("")
}


societyName(['Adam', 'Sarah', 'Malcolm']);
societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']);
societyName(['Harry', 'Newt', 'Luna', 'Cho']);
societyName(['Sherlock', 'Irene', 'John']);
societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 122

// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.



function sayHelloBye(name, num) {
	return (num === 1) ? `Hello ${name[0].toUpperCase() + name.slice(1)}` : `Bye ${name[0].toUpperCase() + name.slice(1)}`;
}


sayHelloBye("jose", 1);
sayHelloBye("barry", 1);
sayHelloBye("jon", 0);
sayHelloBye("khloy", 1);
sayHelloBye("sara", 0);
sayHelloBye("Jon", 0);
sayHelloBye("Matt", 1);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 123

// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

    // isPrefix should return true if it begins with the prefix argument.
    // isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.


function isPrefix(word, prefix) {
	return word.startsWith(prefix.slice(0, -1));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.slice(1));
}


function isPrefix(word, prefix) {
	return word.startsWith(prefix.replace("-", ""));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.replace("-", ""));
}



isPrefix("automation", "auto-");
isPrefix("superfluous", "super-");
isPrefix("oration", "mega-");
isPrefix("retrospect", "sub-");
isSuffix("arachnophobia", "-phobia");
isSuffix("rhinoplasty", "-plasty");
isSuffix("movement", "-scope");
isSuffix("vocation", "-logy");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 124

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.


function timeForMilkAndCookies(date) {
	return date.getMonth() === 11 && date.getDate() === 24;
}


timeForMilkAndCookies(new Date(2013, 11, 24));
timeForMilkAndCookies(new Date(3000, 11, 24));
timeForMilkAndCookies(new Date(2154, 11, 11));
timeForMilkAndCookies(new Date(2010, 11, 2));
timeForMilkAndCookies(new Date(1980, 9, 24));



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 125

// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.


function filterArray(arr) {
	return arr.filter( x => typeof x === 'number');
}

filterArray([1, 2, "a", "b"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);
filterArray(["jsyt", 4, "yt", 6]);
filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 126

// Write a function that takes a string as an argument and returns the left most digit in the string.


function leftDigit(num) {
	for (let i = 0; i < num.length; i++) {
		if (!isNaN(num[i])) {
			return parseInt(num[i]);
		}
	}
}


const leftDigit = str => Number(str.match(/[\d]/));


leftDigit("TrAdE2W1n95!");
leftDigit("V3r1ta$");
leftDigit("U//DertHe1nflu3nC3");
leftDigit("J@v@5cR1PT");
leftDigit("0nSlaUgh7*d3atH");
leftDigit("F8andD3st1nY");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 127

// Write a function that takes a positive integer and return its factorial.


function factorial(z) {
	let a = 1;
	for (let i = z; i > 0; i--) {
		a *= i;
	}	
	return a;
}

factorial(4);
factorial(0);
factorial(9);
factorial(1);
factorial(2);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 128

// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".


function findNemo(sentence) {
	const a = sentence.split(" ");
	for (let i = 0; i < a.length; i++) {
		if (a[i] === "Nemo") {
			return `I found Nemo at ${i + 1}!`;
		}
	}
	return "I can't find Nemo :(";
}


const findNemo = str => (n = str.split` `.indexOf("Nemo") + 1, n) ?
`I found Nemo at ${n}!` : `I can\'t find Nemo :(`;


findNemo("I am Ne mo Nemo !");
findNemo("N e m o is NEMO NeMo Nemo !");
findNemo("I am Nemo's dad Nemo senior .");
findNemo("Oh, hello !");
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?");
findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 129

// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num) {
	const a = num.toString().split("");
	return a.map(x => parseInt(x));
}

function toNumber(arr) {
	return parseInt(arr.join(""));
}



const toArray = num => String(num).split('').map(Number);

const toNumber = arr => Number(arr.join(''));


function toArray(num) {
	return [...num.toString()].map(s => Number(s))
}

function toNumber(arr) {
	return Number(arr.join(""))
}

toArray(235);
toArray(19);
toArray(0);
toNumber([2, 3, 5]);
toNumber([1, 9]);
toNumber([0]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 130

// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
	return [...new Set(arr)];
}

removeDups(['John', 'Taylor', 'John']);
removeDups(['John', 'Taylor', 'John', 'john']);
removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']);
removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]);
removeDups(['#', '#', '%', '&', '#', '$', '&']);
removeDups([3, 'Apple', 3, 'Orange', 'Apple']);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 131

// Write a function that calculates the factorial of a number recursively.


function factorial(n) {
	let a = 1;
	for (let i = n; i > 0; i--) {
		a *= i;
	}
	return a;
}


let factorial = n => n ? n * factorial(--n) : 1;


factorial(5);
factorial(3);
factorial(1);
factorial(0);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 132

// A decimal number can be represented as a sequence of bits.
// We can calculate the bitwise AND, bitwise OR and bitwise XOR.

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

const bitwiseAND = (n1, n2) => n1 & n2;
const bitwiseOR = (n1, n2) => n1 | n2;
const bitwiseXOR = (n1, n2) => n1 ^ n2;

bitwiseAND(7, 12);
bitwiseOR(7, 12);
bitwiseXOR(7, 12);

bitwiseAND(32, 17);
bitwiseOR(32, 17);
bitwiseXOR(32, 17);

bitwiseAND(13, 19);
bitwiseOR(13, 19);
bitwiseXOR(13, 19);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 133

// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.



function reverseCase(str) {
	let a = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			a += str[i].toUpperCase();
		} else {
			a += str[i].toLowerCase();
		}
	}
	return a;
}


function reverseCase(str) {
	return [...str].map(c => c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).join("")
}


reverseCase('Happy Birthday');
reverseCase('MANY THANKS');
reverseCase('sPoNtAnEoUs');
reverseCase('eXCELLENT, yOuR mAJESTY');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 134

// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.


function spelling(str) {
	let a = [];
	for (let i = 0; i < str.length; i++) {
	if (a.length < 1) {
		a.push(str[i]);
	} else {
		a.push(a[i-1] + str[i]);
	}
	}
	return a;
}

function spelling(str) {
	let arr = []
	for(let i=1; i<str.length+1; i++){
		arr.push(str.slice(0,i))
	}
	return arr
}


function spelling(str) {
    return str.split('').map((c, i) => str.slice(0, i+1) );
}



spelling("bee");
spelling("cake");
spelling("happy");
spelling("eagerly");
spelling("believe");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 135

// Create a function that takes a string and returns a string in which each character is repeated once.


function doubleChar(str) {
	return [...str].map(x => (x + x)).join("");
}


function doubleChar(str) {
    return str.split('').map(x => x + x).join('');
}


let doubleChar = str => str.replace(/./g,'$&$&');


doubleChar("String");
doubleChar("Hello World!");
doubleChar("1234!_ ");
doubleChar("##^&%%*&%%$#@@!");
doubleChar("scandal");
doubleChar("economics");
doubleChar(" ");
doubleChar("_______");
doubleChar("equip gallon read");
doubleChar("baby increase");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 135

// Given an unsorted array, create a function that returns the nth smallest element (the smallest element is the first smallest, the second smallest element is the second smallest, etc).

function nthSmallest(arr, n) {
	let a = arr.sort();
	if (a.length <= n - 1) {
		return null;
	} else return a[n-1];
}


function nthSmallest(arr, n) {
	let sortedArray = arr.sort();
	return sortedArray[n-1] || null;
}


function nthSmallest(arr, n) {
	return n > arr.length ? null : arr.sort()[n-1];
}


nthSmallest([1, 3, 5, 7], 1);
nthSmallest([1, 3, 5, 7], 3);
nthSmallest([1, 3, 5, 7], 5);
nthSmallest([7, 3, 5, 1], 2);
nthSmallest([5, 4, 3, 2, 1, -3], 1);
nthSmallest([5, 4, 3, 2, 1, -3], 5);
nthSmallest([4, 5], 3);
nthSmallest([4, 5], 2);
nthSmallest([4, 5], 1);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 136

// Write a function that transforms all letters from [a,m] to 0 and letters from [n,z] to 1 in a string.


function convertBinary(str) {
	let a = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() <= "m") {
			a += '0';
		} else {
						a += '1';
		}
	}
	return a;
}


const convertBinary = str =>
  str.replace(/[a-m]|([n-z])/gi, (match, g1) => Number(match === g1));


convertBinary("house");
convertBinary("excLAIM");
convertBinary("moon");
convertBinary("MOOn");
convertBinary("topsyTurvy");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 137

// Create a function takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.


function indexShuffle(str) {
	let a = "";
	let b = ""
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 1) {
			a += str[i];
		} else {
			b += str[i];
		}
		
	}
	return b.concat(a);
}


function indexShuffle(str) {
    return [...str].filter((v,i) => i % 2 == 0).concat([...str].filter((v,i) => i % 2 != 0)).join('')
}


function indexShuffle(str) {
	const even = [...str].filter((char, i) => i % 2 === 0);
	const odd = [...str].filter((char, i) => i % 2);
	
	return [...even, ...odd].join('');
}


indexShuffle("abcdef");
indexShuffle("abababab");
indexShuffle("it was a beautiful day");
indexShuffle("maybe");
indexShuffle("holiday");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 138

// Create a function that moves all capital letters to the front of a word.


function capToFront(s) {
	let a = "";
	let b = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toUpperCase()) {
			a += s[i];
		} else b += s[i];
	};
	
	return a.concat(b);
}


function capToFront(s) {
    return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
}


function capToFront(s) {
	let lowerCase = [...s].filter(l => l === l.toLowerCase())
	let upperCase = [...s].filter(l => l === l.toUpperCase())
	return [...upperCase,...lowerCase].join("")
}


capToFront("hApPy");
capToFront("moveMENT");
capToFront("aPPlE");
capToFront("shOrtCAKE");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 139

// An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0 && i % 2 === 0 || arr[i] % 2 === 1 && i % 2 === 1) {
			continue;
		} else return false;
	}
	return true;
}


const isSpecialArray = a => a.every((v, i) => v%2 == i%2);


function isSpecialArray(arr) {
    return arr.every((element, index) => element%2 === index%2)
}


isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]);
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]);
isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]);
isSpecialArray([1, 1, 1, 2]);
isSpecialArray([2, 2, 2, 2]);
isSpecialArray([2, 1, 2, 1]);
isSpecialArray([4, 5, 6, 7]);
isSpecialArray([4, 5, 6, 7, 0, 5]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 140

// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.


function getAbsSum(arr) {
	return arr.length > 1 ? arr.reduce((x, i) => Math.abs(x) + Math.abs(i)) : Math.abs(arr[0]);
}


const getAbsSum = arr => arr.reduce((acc, item) => acc + Math.abs(item), 0)


getAbsSum([2, -1, -3, 4, 8]);
getAbsSum([-1]);
getAbsSum([-1, -3, -5, -4, -10, 0]);
getAbsSum([8, 9, 10, 32, 101, -10]);
getAbsSum([500]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 141

// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.


function isValid(zip) {
	return !isNaN(zip) && zip.length <= 5;
}


const isValid = zip => /^\d{5}$/.test(zip);


isValid("59001");
isValid("853a7");
isValid("732 32");
isValid("788876");
isValid("a923b");
isValid("5923!");
isValid("59238aa");
isValid("88231");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 142

// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

function joinPath(portion1, portion2) {
	let a = [...portion1].filter(x => x.match(/[a-z0-9]/gi));
	let b = [...portion2].filter(x => x.match(/[a-z0-9]/gi));

	a.push("/");
	
	return [...a,  ...b].join("");
}


joinPath("portion1", "portion2");
joinPath("portion1/", "portion2");
joinPath("portion1", "/portion2");
joinPath("portion1/", "/portion2");
joinPath("5wf7fny", "stJKXlc8");
joinPath("5wf7fny/", "stJKXlc8");
joinPath("5wf7fny", "/stJKXlc8");
joinPath("5wf7fny/", "/stJKXlc8");
joinPath("FKBZOBHo", "GNcYGnB");
joinPath("FKBZOBHo/", "GNcYGnB");
joinPath("FKBZOBHo", "/GNcYGnB");
joinPath("FKBZOBHo/", "/GNcYGnB");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 143

// Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.


function equal(a, b, c) {
	let x = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] === arguments[i+1] || arguments[i] === arguments[i-1] || arguments[i] === arguments[i+2] || arguments[i] === arguments[i-2]) {
			x++;
		}
	}
	
	return x;
}


function equal(a, b, c) {
	const size = (new Set([a, b, c])).size;
	return size === 3 ? 0 : 4 - size;
}



function equal(a, b, c) {
    if (a === b && a === c) {
       return 3;}
    if (a === b || a === c || b === c) {
       return 2;}
           return 0;
}




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 144

// Create a function to count the number of 1s in a 2D array.


function countOnes(matrix) {
	let x = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			if (matrix[i][j] === 1) {
				x++;
			}
		}
	}
	return x;
}


function countOnes(matrix) {
	return matrix.join("").split("").filter(x => x == "1").length;
}


countOnes([
	[5, 2],
	[0, 2],
	[5, 1]
]);

countOnes([
	[1, 1],
	[0, 1]
]);

countOnes([
	[0, 1],
	[0, 0]
]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 145

// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.


function factorial(int) {
	let x = 1;
	
	for (let i = int; i > 0; i--) {
		x *= i;
	}
	
	return x;
}


const factorial = num => num === 1 ? num : num * factorial(num - 1);

factorial(2);
factorial(6);
factorial(3);
factorial(12);
factorial(5);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 146

// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.



function maximumScore(tileHand) {
	let x = 0;
	
	for (let i = 0; i < tileHand.length; i++) {
		x += tileHand[i].score;
	}
	
	return x;
}


function maximumScore(tileHand) {
	return tileHand.reduce((p,c) => p + c.score, 0);
}


[{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}];
[{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}];
[{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}];
[{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}];



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 147

// Create a function that takes an array of strings and return an array, sorted from shortest to longest.


function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length);

}


sortByLength(["Google", "Apple", "Microsoft"]);
sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);
sortByLength(["Turing", "Einstein", "Jung"]);
sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"]);
sortByLength(["Mario", "Bowser", "Link"]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 148

// Write a regular expression that matches a string if and only if it is a valid zip code.


let x = /^[0-9]{5}(?:-[0-9]{4})?$/


const x = /^\d{5}$/;




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 149

// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str) {
	return str.replace(/[aeiou]/gi, "");
}


removeVowels("If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!");
removeVowels("This election is a total sham and a travesty. We are not a democracy!");
removeVowels("I have never seen a thin person drinking Diet Coke.");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 150

// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.


function isAvgWhole(arr) {
	let a = 0;
	for (let i = 0; i < arr.length; i++) {
		a += arr[i];
	}
	
	return Number.isInteger(a / arr.length);
}



isAvgWhole([3, 5, 9]);
isAvgWhole([1, 1, 1, 1]);
isAvgWhole([1, 2, 3, 4, 5]);
isAvgWhole([5, 2, 4]);
isAvgWhole([11, 22]);
isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 151

// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(numbers) {
	const a = numbers.join("").toString().match(/.{1,3}/g);
	return `(${a[0]}) ${a[1]}-${a[2]}${a[3]}`;
}


formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]);
formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]);
formatPhoneNumber([6, 6, 2, 5, 8, 8, 7, 0, 4, 3]);
formatPhoneNumber([5, 1, 0, 2, 6, 6, 3, 5, 8, 3]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 152

// Create a function that takes a string and returns the number (count) of vowels contained within it.


function countVowels(str) {
	return str.match(/[aeiou]/gi).length;
}



countVowels("Celebration");
countVowels("Palm");
countVowels("Prediction");
countVowels("Suite");
countVowels("Quote");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 153

// Create a function that takes a string as input and capitalizes a letter if it's ASCII code is even, and returns its lower case version if it's ASCII code is odd.


function asciiCapitalize(str) {
	let a = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i].charCodeAt(0) % 2 === 0) {
			a += str[i].toUpperCase();
		} else a += str[i].toLowerCase();
	}	
	return a;
}


const asciiCapitalize = s => 
[...s].map(x => x.charCodeAt(0)%2 ? x.toLowerCase(): x.toUpperCase()).join("")


asciiCapitalize("Oh what a beautiful morning.");
asciiCapitalize("THE LITTLE MERMAID");
asciiCapitalize("to be or not to be!");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 154

// Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
	return (num.toString() === num.toString().split("").reverse().join(""));
}


isSymmetrical(23);
isSymmetrical(9562);
isSymmetrical(10019);
isSymmetrical(1);
isSymmetrical(3223);
isSymmetrical(95559);
isSymmetrical(66566);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 155

// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

function totalVolume(...boxes) {
	let x = 0;
	for (let i = 0; i < [...boxes].length; i++) {
		x += ([...boxes][i].reduce((x, i) => x * i));
	}
	return x;
}


const totalVolume = (...boxes) =>
  boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);


function totalVolume(...boxes) {
	return boxes.map(x => x.reduce((a,b) => a*b)).reduce((a,b) => a+b);
}


totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
totalVolume([2, 2, 2], [2, 1, 1]);
totalVolume([1, 1, 1]);
totalVolume([5, 1, 10], [1, 9, 2]);
totalVolume([1, 1, 5], [3, 3, 1]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 156

// Given a number n, write a function that returns PI to n decimal places.


function myPi(n) {
	return parseFloat(Math.PI.toFixed(n));
}



myPi(0);
myPi(1);
myPi(2);
myPi(3);
myPi(5);
myPi(6);
myPi(7);
myPi(8);
myPi(9);
myPi(10);
myPi(11);
myPi(12);
myPi(13);
myPi(14);
myPi(15);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 157

// Create a function that takes in a date and returns the correct century.



function century(year) {
	const a = Math.ceil(year / 100);
	return (a === 21) ? `${a}st century` : `${a}th century`;
}

century(1756);
century(1555);
century(1000);
century(1001);
century(2005);
century(1789);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 158

// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).


function identicalFilter(arr) {
	return arr.filter(x => new Set(x).size === 1);
}


identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']);

identicalFilter(['88', '999', '22', '545', '133']);

identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo']);

identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee']);

identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee']);

identicalFilter(['1', '2', '3']);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 159

// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).


function highLow(str) {
	const a = str.split(" ");
	let x = "";
	x += Math.max(...a);
	x += " ";
	x += Math.min(...a);
	return x;
}

function highLow(str) {
    var nums = str.split(' ');
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}


function highLow(str) {
    return Math.max(...str.split(' ')) + ' ' + Math.min(...str.split(' '));
}

highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
highLow("1 -1");
highLow("1 1");
highLow("-1 -1");
highLow("1 -1 0");
highLow("1 1 0");
highLow("-1 -1 0");
highLow("42");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 160

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

function hackerSpeak(str) {
	let a = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "a") {
			a += "4";
		} else if (str[i] === "e") {
			a += "3";
		} else if (str[i] === "i") {
			a += "1";
		} else if (str[i] === "o") {
			a += "0";
		} else if (str[i] === "s") {
			a += "5";
		} else {
			a += str[i];
		}
	}
	return a;
}

function hackerSpeak(str) {
    var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
    str = str.replace(/[aeios]/g, letter => chars[letter]);
    
    return str;
}

function hackerSpeak(str) {
return str
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/a/g, "4")
    .replace(/o/g, "0")
    .replace(/s/g, "5");
}

hackerSpeak("javascript is cool");
hackerSpeak("become a coder");
hackerSpeak("hi there");
hackerSpeak("programming is fun");
hackerSpeak("keep on practicing");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 161

// Create a function that takes an array of numbers and returns the mean value.


function mean(arr) {
	return Number((arr.reduce((x, i) => x + i) / arr.length).toFixed(2));
}


mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]);
mean([324, 543, 654, 9876]);
mean([0, 0, 0, 0]);
mean([30, 40, 20, 100, 30]);
mean([1, 1, 1, 0]);
mean([1, 1, 0, 1, 2, 1, 1, 1, 0, 0]);
mean([10000]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 162

// Write a function that reverses all the words in a sentence starting with a particular letter.


function specialReverse(s, c) {
	const x = s.split(" ");
	const y = [];
	
	for (let i = 0; i < x.length; i++) {
		if (x[i].startsWith(c)) {
			y.push(x[i].split("").reverse().join(""));
		} else y.push(x[i]);
	}
	return y.join(" ");
}


function specialReverse(s, c) {
	return s.split(" ")
		.map(x => x[0]== c ? x.split("").reverse().join(""):x)
		.join(" ");
}


specialReverse('word searches are super fun', 's');
specialReverse('first man to walk on the moon', 'm');
specialReverse('peter piper picked pickled peppers', 'p');
specialReverse('he went to climb mount everest', 'p');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 163

// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.



function missingNum(arr) {
    for (let i = 1; i <= arr.length + 1; i++) {
        if (arr.indexOf(i) === -1) {
            return i;
        }
    }
}


function missingNum(arr) {
    var sum = arr.reduce((a, b) => a + b, 0);
    return 55 - sum;
  }


missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]);
missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]);
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);
missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 164

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.



function sortNumsAscending(arr) {
	return (arr !== null) ? arr.sort((a, b) => a - b) : [];
}


function sortNumsAscending(arr) {
    return (arr || []).sort((a,b) => a - b)
}

sortNumsAscending([1, 2, 10, 50, 5]);
sortNumsAscending([80, 29, 4, -95, -24, 85]);
sortNumsAscending(null);
sortNumsAscending([]);
sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 165

// Create a function that takes a number as an argument and returns a string formatted to separate thousands.


function formatNum(num) {
	return num.toLocaleString();
}


function formatNum(num) {
	let ar = [...(''+num)];
  let i = ar.length;
  while (i -= 3) {
    if (i < 0) break;
    ar.splice(i, 0, ',');
  }
  return ar.join('');
}


formatNum(1000);
formatNum(1000000);
formatNum(20);
formatNum(0);
formatNum(12948);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 166

// A factor chain is an array where each previous element is a factor of the next consecutive element. 

function factorChain(arr) {
	for(let i = arr.length - 1; i > 0; i--){
		if(arr[i] % arr[i-1] == 0){
			return true;
		}else{
			return false;
		}
	}
}


const factorChain = arr => arr.slice(1).every((num, i) => num % arr[i] === 0);


factorChain([1, 2, 4, 8, 16, 32]);
factorChain([1, 1, 1, 1, 1, 1]);
factorChain([2, 4, 6, 7, 12]);
factorChain([10, 1]);
factorChain([10, 20, 30, 40]);
factorChain([10, 20, 40]);
factorChain([1, 1, 1, 1, 7, 49]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 167

// Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

function factorGroup(num) {
	var array = [];
  for(var i = 0; i <= num; i++) {
    if(num % i == 0) {
     array.push(i)
    }
  }
  return array.length % 2 == 0 ? "even" : "odd"  
}


const factorGroup = num => Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even';


factorGroup(33);
factorGroup(36);
factorGroup(7);
factorGroup(1);
factorGroup(19);
factorGroup(27);
factorGroup(100);
factorGroup(18);
factorGroup(16);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 168

// Create a function that takes a number as its argument and returns an array of all its factors.


function factorize(num) {
	const a = [];
	for (let i = 0; i <= num; i++) {
		if(num % i === 0) {
			a.push(i);
		}
	}
	return a;
}


function factorize(num) {
	return new Array(num).fill().map((x, i) => i + 1).filter(n => num % n === 0)
}

factorize(12);
factorize(4);
factorize(17);
factorize(24);
factorize(1);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 169

// Create a function that takes an array of names and returns an array with the first letter capitalized.



function capMe(arr) {
	return arr.map(x => x[0].toUpperCase() + x.substring(1).toLowerCase());
}


function capMe(arr) {
	return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
}


capMe(['mavis', 'senaida', 'letty']);
capMe(['samuel', 'MABELLE', 'letitia', 'meridith']);
capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']);
capMe(['krisTopher', 'olIva', 'herminiA']);
capMe(['luke', 'marsha', 'stanford']);
capMe(['kara']);
capMe(['mARIANN', 'jOI', 'gEORGEANN']);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 170

// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.


function sortDecending(num) {
	return parseInt(num.toString().split("").sort().reverse().join(""));
}


sortDecending(123);
sortDecending(670276097);
sortDecending(2619805);
sortDecending(81294);
sortDecending(0000000);
sortDecending(321);
sortDecending(628904);
sortDecending(289327560);
sortDecending(6456);
sortDecending(444111888555333);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 171

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
	return arr.map(x => Math.max(...x));
}



findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]);
findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]);
findLargestNums([[0.34, -5, 1.34], [-6.432, -1.762, -1.99], [32, 65, -6]]);
findLargestNums([[0, 0, 0, 0], [3, 3, 3, 3], [-2, -2]]);






// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 172

// Create a function that returns only strings with unique characters.


function filterUnique(arr) {
	return arr.filter(x => new Set(x).size === x.length);
}


filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']);
filterUnique(['88', '999', '989', '9988', '9898']);
filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']);
filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs']);
filterUnique(['abab', 'ba', 'ab', 'cc']);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 173

// Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.


function countOnes(i) {
	return i.toString(2).split('1').length-1
}


countOnes(12);
countOnes(0);
countOnes(100);
countOnes(101);
countOnes(999);
countOnes(1e9);
countOnes(123456789);
countOnes(1234567890);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 174

// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

function getMiddle(str) {
	let a = str;
	for (let i = 0; i < a.length; i++) {
		if (a.length % 2 === 0 && a.length > 2) {
			a = a.slice(1,-1);
		} else if (a.length % 2 === 1 && a.length > 2) {
			a = a.slice(1,-1);
		} else break;
	}
	return a;
}


function getMiddle(str) {
    var start = Math.ceil(str.length / 2) - 1;
    var end = Math.floor(str.length / 2) + 1;
    return str.substring(start, end);
}

function getMiddle(str) {
    return str.length % 2 ? str[(str.length - 1) / 2] : str.substr((str.length - 2) / 2 , 2);
}


getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
getMiddle("inhabitant");
getMiddle("brown");
getMiddle("pawn");
getMiddle("cabinet");
getMiddle("fresh");
getMiddle("shorts");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 175

// Create a function that returns the mean of all digits.


function mean(num) {
	return  [...num.toString()].reduce((x, i) => (Number(x) + Number(i)))  / num.toString().length; 
}

function mean(num) {
	const arr = Math.abs(num).toString().split('');
	return arr.reduce((acc, item)=>acc+(+item),0)/arr.length;
}

mean(666);
mean(80);
mean(789);
mean(417);
mean(1357);
mean(42);
mean(12345);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 176

// Create a function that returns true if an asterisk * is inside a box.


function inBox(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === "*") {
				return true;
			}
		}
	}
	return false;
}



const inBox = arr => arr.some(str => str.includes('*'));



const inBox = a => a.some(e => (/\*/).test(e));


inBox([
    "###", 
    "#*#", 
    "###"
]);

inBox([
    "####", 
    "# *#", 
    "#  #", 
    "####"
]);

inBox([
    "#####", 
    "#  *#", 
    "#   #", 
    "#   #", 
    "#####"
]);

inBox([
    "#####", 
    "#   #", 
    "# * #", 
    "#   #", 
    "#####"
]);

inBox([
    "#####", 
    "#   #", 
    "#   #", 
    "# * #", 
    "#####"
];

inBox([
    "#####", 
    "#*  #", 
    "#   #", 
    "#   #", 
    "#####"
]);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 177

// Return the total number of arrays inside a given array.



function numOfSubbarrays(arr) {
	return arr.filter(x => x.length > 1).length;
}


function numOfSubbarrays(arr) {
	return arr.filter(a => a instanceof Array).length;
}


numOfSubbarrays([[1,2,3], [1,2,3], [1,2,3]]);
numOfSubbarrays([[1,2,3]]);
numOfSubbarrays([1,2,3]);
numOfSubbarrays([[1,2,3], [ 1,2,3 ], [ 1,2,3 ], [1,2,3]]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 178

// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.



function transformUpvotes(str) {
	const a = str.split(" ");
	const b = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i].endsWith('k')) {
			b[i] = a[i].replace(/[^0-9]+/g, '');
			b[i] = Number(b[i] + '00')
		} else b[i] = Number(a[i]);	
	}
	return b;
}


function transformUpvotes(str) {
	return str.split(' ')
		.map(a => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}

transformUpvotes('20.3k 3.8k 7.7k 992');
transformUpvotes('5.5k 8.9k 32');
transformUpvotes('6.8k 13.5k');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 179

// Create a function that takes a word and returns true if the word has two consecutive identical letters.


function doubleLetters(word) {
	for (let i = 0; i < word.length; i ++) {
		if (word[i] === word[i+1]) {
			return true;
		}
	}
	return false;
}


function doubleLetters(word) {
	return /(\w)\1/.test(word)
}


// True test cases
doubleLetters("loop");
doubleLetters("meeting");
doubleLetters("yummy");
doubleLetters("moo");
doubleLetters("toodles");
doubleLetters("droop");
doubleLetters("loot");
// False test cases
doubleLetters("orange");
doubleLetters("munchkin");
doubleLetters("forestry");
doubleLetters("raindrops");
doubleLetters("gold");
doubleLetters("paradise");
doubleLetters("chicken");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 180

// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.


function reverseImage(image) {
	for (let i = 0; i < image.length; i++) {
		for (let j = 0; j < image[i].length; j++) {
			image[i][j] = 1 - image[i][j];
		}
	}
	return image;
}


function reverseImage(image) {
	return image.map(v => v.map(x => +!x));
}



reverseImage([
    [1, 0, 0], 
    [0, 1, 0], 
    [0, 0, 1]
  ]);
  
  reverseImage([
    [1, 1, 1], 
    [0, 0, 0]
  ]);
  
  reverseImage([
    [1, 0, 0], 
    [1, 0, 0]
  ]);
  
  reverseImage([
    [1, 0, 0, 0, 0], 
    [1, 0, 0, 1, 1], 
    [1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 0], 
    [1, 1, 1, 0, 0]
  ]);
  
  reverseImage([
    [1, 1], 
    [1, 0], 
    [1, 1], 
    [1, 1], 
    [1, 1]
  ]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 181

// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.




function makeTitle(str) {
	const a = str.split(" ");
	for (let i = 0; i < a.length; i++) {
		a[i] =a[i].slice(0, 1).toUpperCase() + a[i].slice(1, a[i].length);
	}
	return a.join(" ");
}


let makeTitle = x => x.replace(/(^\w|\s\w)/g, x => x.toUpperCase());


function makeTitle(str) {
    return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

makeTitle("I am a title");
makeTitle("I AM A TITLE");
makeTitle("i aM a tITLE");
makeTitle("the first letter of every word is capitalized");
makeTitle("I Like Pizza");
makeTitle("Don't count your ChiCKens BeFore They HatCh");
makeTitle("All generalizations are false, including this one");
makeTitle("Me and my wife lived happily for twenty years and then we met.");
makeTitle("There are no stupid questions, just stupid people.");
makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d");
makeTitle("PIZZA PIZZA PIZZA");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 182

// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function reverse(str) {
	const  a = str.split(" ");
	for (let i = 0; i < a.length; i++) {
		if (a[i].length >= 5) {
			a[i] = a[i].split("").reverse().join("");
		}
	}
	return a.join(" ");
}



function reverse(str) {
    return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
}


reverse("Reverse");
reverse("This is a typical sentence.");
reverse("The dog is big.");
reverse("Reverse the order of every word greater than or equal to five characters.");
reverse("Lets all be unique together until we realise we are all the same.");
reverse("The old apple revels in its authority.");
reverse("The shooter says goodbye to his love.");
reverse("Please wait outside of the house.");
reverse("Two seats were vacant.");
reverse("Sixty-Four comes asking for bread.");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 183

// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.


function uniqueSort(arr) {
	return [...new Set(arr)].sort((a, b) => a - b);
}


function uniqueSort(arr) {
    return Array.from(new Set(arr)).sort((a,b) => a - b);
}


uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]);
  
uniqueSort([1, 2, 5, 4, 7, 7, 7]);
  
uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]);
  
uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]);
  
uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 184

// In BlackJack, cards are counted with -1, 0, 1 values:

// 2, 3, 4, 5, 6 are counted as +1
// 7, 8, 9 are counted as 0
// 10, J, Q, K, A are counted as -1
// Create a function that counts the number and returns it from the array of cards provided.

function count(deck) {
	let a = 0;
	for (let i = 0; i < deck.length; i++) {
		if (deck[i] >= 2 && deck[i] <= 6) {
				a++;
		} else if (deck[i] === 10 || deck[i] === 'J' || deck[i] === 'Q' || deck[i] === 'K' || deck[i] === 'A') {
				a--;					 
	 }
	}	
	return a;
}


function count(deck) {
	return deck.reduce((a, c) => a + (c <= 6 ? 1 : c <= 9 ? 0 : -1), 0);
}


count([5, 9, 10, 3, 'J', 'A', 4, 8, 5]);
count(['A', 'A', 'K', 'Q', 'Q', 'J']);
count(['A', 5, 5, 2, 6, 2, 3, 8, 9, 7]);
count([2, 2, 2, 2, 2, 2, 2, 2]);
count([]);
count(['A', 'A', 'A', 'A', 'A', 'A', 'A']);
count(['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 184

// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) to each even integer.

function evenOddTransform(arr, n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] % 2 !== 0) {
				arr[j] += 2;
			} else if (arr[j] % 2 === 0) {
				arr[j] -= 2;
			}
		}
	}
	return arr;
}


function evenOddTransform(arr, n) {
	return arr.map(x => (x % 2 == 0) ? x - 2 * n : x + 2 * n);
}


evenOddTransform([3, 4, 9], 3);
evenOddTransform([0, 0, 0], 10);
evenOddTransform([1, 2, 3], 1);
evenOddTransform([55, 90, 830], 2);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 185

// Create a function that takes an integer n and reverses it.


function rev(n) {
	return Math.abs(n).toString().split("").reverse().join("");
}


rev(215);
rev(122225);
rev(215);
rev(-215);
rev(-2152);
rev(-122157);
rev(666);
rev(999);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 186

// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.


function sumTwoSmallestNums(arr) {
	const a = arr.sort((a, b) => (a > 0 && b > 0) ? a - b : b);
	return a[0] + a[1];
}


function sumTwoSmallestNums(arr) {
    arr = arr.sort((a,b) => a - b).filter(x => x > 0);
    return arr[0] + arr[1];
   
}


function sumTwoSmallestNums(arr) {
    return arr.filter((item) => item >= 0)
      .sort((a, b) => a - b)
      .slice(0, 2)
      .reduce((acc, item) => acc + item);
}

sumTwoSmallestNums([19, 5, 42, 2, 77]);
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);
sumTwoSmallestNums([2, 9, 6, -1]);
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]);
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]);
sumTwoSmallestNums([280, 134, 108]);
sumTwoSmallestNums([280, 134, 108, 1]);
sumTwoSmallestNums([321, 406, -176]);
sumTwoSmallestNums([1, 1, 1, 1]);
sumTwoSmallestNums([-1, -1, 1, 1]);





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 187

// Create a function that takes a string, removes all "special" characters (e.g. ! @ # $ % ^ & \ *) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.



function removeSpecialCharacters(str) {
	return str.replace(/[^a-z0-9 _\-]/gi, "");
}


function removeSpecialCharacters(str) {
    return str.replace(/[^\w- ]/gi, "");
}



removeSpecialCharacters("The quick brown fox!");
removeSpecialCharacters("%fd76$fd(-)6GvKlO.");
removeSpecialCharacters("D0n$c sed 0di0 du1");
removeSpecialCharacters("cat_pic.jpeg");
removeSpecialCharacters("519-555-8093");
removeSpecialCharacters("h-d+=rf[]_{}<>.,`~!@#$%^&*(|)");
removeSpecialCharacters("Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 188

// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.



function incrementToTop(arr) {
	let a = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = arr[i]; j < Math.max(...arr); j++) {
			a++;
		}
	}
	return a;
}


const sum = arr => arr.reduce((total, num) => total + num, 0);

const incrementToTop = arr => {
  const max = Math.max(...arr);
  return sum(arr.map(num => max - num));
};


incrementToTop([3, 4, 5]);
incrementToTop([4, 3, 4]);
incrementToTop([3, 3, 3]);
incrementToTop([3, 10, 3]);
incrementToTop([1, 2, 3, 4, 5]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 189

// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.


function validateEmail(str) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(str).toLowerCase());
}


validateEmail('@edabit.com');
validateEmail('@edabit');
validateEmail('matt@edabit.com');
validateEmail('');
validateEmail('hello.gmail@com');
validateEmail('bill.gates@microsoft.com');
validateEmail('hello@email');
validateEmail('%^%$#%^%');
validateEmail('www.email.com');
validateEmail('email');


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 190

// Write a function that returns the longest sequence of consecutive zeroes in a binary string.


function longestZero(s) {
	let a = "";
	
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "0") {
			a += "0";
		} else {
			a += " ";
		}
	}
	return a.split(" ").reduce((r, e) => r.length < e.length ? e : r, "");
}


function longestZero(s) {
	return s.split('1').sort().reverse()[0]
}


function longestZero(s) {
	return s.split("1").sort((a,b) => b.length - a.length)[0]
}


longestZero("01100001011000");
longestZero("100100100");
longestZero("111101");
longestZero("1000000000011101");
longestZero("100001110000100000");
longestZero("101001101");
longestZero("101010101");
longestZero("1001001");
longestZero("111111");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 191

// Create a function that takes an array and returns the difference between the smallest and biggest numbers.


function diffMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr);
}


diffMaxMin([10, 4, 1, 2, 8, 91]);
diffMaxMin([-70, 43, 34, 54, 22]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 192

// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.


function maskify(str) {
	let a = "";
	for (let i = 0; i < str.length; i++) {
		if (str.length > 4 && i < str.length - 4) {
			a += "#";
		} else {
			a += str[i];
		}	
	}
	return a;
}


const maskify = str => str.replace(/.(?=.{4})/g, '#');


maskify("4556364607935616");
maskify("64607935616");
maskify("1");
maskify("");
maskify("tBy>L/cMe+?<j:6n;C~H");
maskify("12");
maskify("8Ikhlf6yoxPOwi5cB014eWbRumj7vJ");
maskify("123");
maskify(")E$aCU=e\"_");
maskify("2673951408");
maskify("1234");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 193

// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.


function indexMultiplier(arr) {
	return arr.length > 0 ? arr.map((x, i) => x * i).reduce((x, i) => x + i) : 0;
}

const indexMultiplier = arr => arr.reduce((a,v,i) => a + v*i, 0);

indexMultiplier([9, 3, 7, -7]);
indexMultiplier([3, 8, 6, -4]);
indexMultiplier([10, -9, -2, 0, 2]);
indexMultiplier([4, 4, 2, 2, -4]);
indexMultiplier([9, 4, 7, 5, -1, -3]);
indexMultiplier([-9, 5, 9, 5, -7, 7]);
indexMultiplier([-1, -2, 8, -5]);
indexMultiplier([7, 10, -5, -4, 6, 2]);
indexMultiplier([0, 1, 0, 1, 0, 1, 0, 1]);
indexMultiplier([-2, 5, -7, -23, 0, 14]);
indexMultiplier([53, -43, 39, -2, -11, 3]);
indexMultiplier([40, 32, -18, 48, -15]);
indexMultiplier([1, -20, -11, 4, -12, 38, -30, 34]);
indexMultiplier([-21, 30, 20, 6, -16]);
indexMultiplier([8, -24, -8, -23, 20, 32, -29, -20]);
indexMultiplier([]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 194

// Create a function that takes an object and returns the keys and values as separate arrays.


function keysAndValues(obj) {
	return [Object.keys(obj), Object.values(obj)];
}


keysAndValues({a: 1, b: 2, c: 3});
keysAndValues({a: "Apple", b: "Microsoft", c: "Google"});
keysAndValues({key1: true, key2: false, key3: undefined});
keysAndValues({1: null, 2: null, 3: null});
keysAndValues({key1: "cat", key2: "dog", key3: null});




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 195

// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.


function stepsToConvert(str) {
	let a = 0;
	let b = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			a++;
		} else if (str[i] === str[i].toUpperCase()) {
			b++
		}
	}
	return Math.min(a, b);
}


function stepsToConvert(string) {
	const upper = [...string].filter(char => char === char.toUpperCase())
	const lower = [...string].filter(char => char === char.toLowerCase())
	return Math.min(upper.length,lower.length)
}

stepsToConvert('abC');
stepsToConvert('abCBA');
stepsToConvert('aba');
stepsToConvert('ABA');
stepsToConvert('abaCCC');
stepsToConvert('abaaCCCDE');
stepsToConvert('CCaaCCaaCa');
stepsToConvert('');





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 196

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.


function validatePIN(pin) {
	let a = "";
	for (let i = 0; i < pin.length; i++) {
		if (!Number.isInteger(Number(pin[i]))) {
			return false;
			console.log(pin[i]);
		} else a += pin[i];
	}
	return a.length === 4 || a.length === 6 ? true : false;
}

function validatePIN(pin) {
    var regEx =  new RegExp(/^(\d{4}|\d{6})$/);
    return regEx.test(pin);
}


function validatePIN(pin) {
    return (/^\d{4}(\d\d)?$/).test(pin);
}


validatePIN("1234");
validatePIN("12345");
validatePIN("a234");
validatePIN("");
validatePIN("%234");
validatePIN("`234");
validatePIN("@234");
validatePIN("#234");
validatePIN("$234");
validatePIN("*234");
validatePIN("5678");
validatePIN("^234");
validatePIN("(234");
validatePIN(")234");
validatePIN("123456");
validatePIN("-234");
validatePIN("_234");
validatePIN("+234");
validatePIN("=234");
validatePIN("?234");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 197

// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890



function isValidPhoneNumber(str) {
	return /^(\([0-9]{3}\) \s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/.test(str);
}



isValidPhoneNumber("(123) 456-7890");
isValidPhoneNumber("(1111)555 2345");
isValidPhoneNumber("(098) 123 4567");
isValidPhoneNumber("(123)456-7890");
isValidPhoneNumber("abc(123)456-7890");
isValidPhoneNumber("(123)456-7890abc");
isValidPhoneNumber("abc(123)456-7890abc");
isValidPhoneNumber("abc(123) 456-7890");
isValidPhoneNumber("(123) 456-7890abc");
isValidPhoneNumber("abc(123) 456-7890abc");
isValidPhoneNumber("(123)-456-7890");
isValidPhoneNumber("(123)_456-7890");
isValidPhoneNumber("-123) 456-7890");
isValidPhoneNumber("(519) 505-6498");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 198

// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

function counterpartCharCode(char) {
	return char === char.toUpperCase() ? char.toLowerCase().charCodeAt(0) : char.toUpperCase().charCodeAt(0);
}


// Normal letters
counterpartCharCode('a');
counterpartCharCode('A');
counterpartCharCode('l');
counterpartCharCode('L');
counterpartCharCode('z');
counterpartCharCode('Z');

// Accented / weird letters
counterpartCharCode('è');
counterpartCharCode('È');
counterpartCharCode('Œ');
counterpartCharCode('œ');
counterpartCharCode('Ⱥ');
counterpartCharCode('ⱥ');

// These don't have a counterpart, you should return the input's char code
counterpartCharCode('5');
counterpartCharCode('$');




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 199

// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

function isIsogram(str) {
	return new Set([...str.toLowerCase()]).size === str.length;
}


function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}


isIsogram("Algorism");
isIsogram("PasSword");
isIsogram("Dermatoglyphics");
isIsogram("Cat");
isIsogram("Filmography");
isIsogram("Consecutive");
isIsogram("Bankruptcies");
isIsogram("Unforgivable");
isIsogram("Unpredictably");
isIsogram("Moose");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 200

// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

function nextInLine(arr, num) {
	if (!isNaN(arr[0]) || arr.length > 0) {
			arr.shift();
			arr.push(num);
		return arr
		} else {		
	 return "No array has been selected";
	}
}

const nextInLine = (arr, num) => Array.isArray(arr) ? arr.slice(1).concat(num) : "No array has been selected";


function nextInLine(arr, num) {
	if(!Array.isArray(arr)) return 'No array has been selected';

	arr.push(num);
	arr.shift();
	
	return arr;
}


nextInLine([5,6,7,8,9], 1);
nextInLine([7,6,3,23,17], 10);
nextInLine([1,10,20,42], 6);
nextInLine(NaN,6);
nextInLine([0], 1);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 201

// The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.



function fibonacciSequence() {
	let arr = [0, 1];
	for(let i = 2; ; i++){
		let item = arr[i-1] + arr[i-2];
		if (item < 255){
			arr.push(item);
		}else{
			break;
		}
	}
	return arr;
}


function fibonacciSequence() {
	const sumOfLastTwo = ar => ar.slice(-2).reduce((a,v) => a + v, 0);

	let fib = [0, 1];
	while (sumOfLastTwo(fib) < 255) { fib.push(sumOfLastTwo(fib)); }
	return fib;
}


fibonacciSequence();





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 202

// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.


function findZip(str) {
	return str.indexOf("zip", str.indexOf("zip") + 3);
}


function findZip(str) {
	return str.replace('zip', 'aaa').search('zip')
}

findZip("all zip files are zipped");
findZip("all zip files are compressed");
findZip("We believe university-level zip education can be both high quality and low cost. Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world.");
findZip("Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms.");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 203

// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.


function sameAscii(a, b) {
	c = 0;
	d = 0;
	
	for (let i = 0; i < a.length; i++) {
		c += a.charCodeAt(i);
	}
	
		for (let i = 0; i < b.length; i++) {
		d += b.charCodeAt(i);
	}
	
	return c === d;
}


function sameAscii(a, b) {
	return a.split("").map(a => a.charCodeAt(0)).reduce((a, b) => a + b) === b.split("").map(a => a.charCodeAt(0)).reduce((a, b) => a + b);
}

sameAscii("a", "a");
sameAscii("A", "a");
sameAscii("!", "g");
sameAscii("aAAAaaAA", "~~~aa,");
sameAscii("aUGSIGHIhiSJGijs", "~~~~~~~~~FF,");
sameAscii("~~Tga2", "{}[]()I");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 204

// Create a function to that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.



function asciiSort(arr) {
	const a = [0, 0];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			a[i] += arr[i][j].charCodeAt(0);
		}
	}
		return a[0] < a[1] ? arr[0] : arr[1];
}


function asciiSort(arr) {
	const count1 = arr[0].split("").reduce((a, v) => a + v.charCodeAt(0), 0);
	const count2 = arr[1].split("").reduce((a, v) => a + v.charCodeAt(0), 0);

	return count1 < count2 ? arr[0] : arr[1];
}


asciiSort(["hey", "man"]);
asciiSort(["majorly", "then"]);
asciiSort(["magic", "kingdom"]);
asciiSort(["bored", "shampoo"]);
asciiSort(["victory", "careless"]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 205

// Create a function that takes two strings and returns (true or false) whether they're anagrams or not.


function isAnagram(s1, s2) {
	const a = s1.toLowerCase(). split("").sort().join("").trim();
	const b = s2.toLowerCase(). split("").sort().join("").trim();

	if (s1.toLowerCase().length !== s2.toLowerCase().length || a !== b) {
		return false;
	} else return true;
}


function isAnagram(s1, s2) {
    var str1 = s1.toLowerCase().split('').sort().join('').trim();
    var str2 = s2.toLowerCase().split('').sort().join('').trim();
    return str1===str2;
}


function isAnagram(s1, s2) {
    var t = s => s.toLowerCase().split('').sort().join('');
    return t(s1) === t(s2); 
}

isAnagram('cristian', 'Cristina');
isAnagram('Dave Barry', 'Ray Adverb');
isAnagram('Nope', 'Note');
isAnagram('Apple', 'Appeal');




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 206

// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of z items.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.



function matrix(x, y, z) {
	const a = Array(y).fill(z);
	return 	Array(x).fill(a);
}


function matrix(x, y, z) {
    return Array(x).fill(Array(y).fill(z));
}


matrix(3, 4, 0);
matrix(2, 3, "#");
matrix(2, 3, -4);
matrix(1, 2, 0);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 206

// A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

// The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100.
// Given a year you must implement a function that returns true if it's a leap year, or false if it's not.

function isLeap(year) {
	return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}



isLeap(2020);
isLeap(1800);
isLeap(2000);
isLeap(2019);
isLeap(1452);
isLeap(1998);
isLeap(1904);
isLeap(1985);
isLeap(2048);
isLeap(1600);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 207

// Write a function that returns true if a hash contains the specified key, and false otherwise.


function hasKey(obj, key) {
	return obj.hasOwnProperty(key);
}


function hasKey(obj, key) {
	return key in obj;
}


function hasKey(obj, key) {
	return Object.keys(obj).includes(key);
}


const hasKey = (obj, key) => obj[key]? true : false;


hasKey({ pot: 1, tot: 2, not: 3 }, "not");
hasKey({ craves: true, midnight: true, snack: true }, "morning");
hasKey({ a: 44, b: 45, c: 46 }, "d");
hasKey({ a: "z", b: "y", c: "x" }, "c");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 208

// Write a function redundant that takes in a string str and returns a function that returns str.


function redundant(str) {
	function b() {
		return str;
	}
	
	return b;
}


const redundant = str => () => str;

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

f1();
f2();
f3();


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 209

// Write a function that returns the greatest common divisor (GCD) of two integers.


function gcd(n1, n2) {
	for (let i = Math.max(n1, n2); i > 0; i--) {
		if (n1 % i === 0 && n2 % i === 0) {
			return i;
		}
	}
}


const gcd = (n1, n2) => !n2 ? n1: gcd(n2, n1 % n2)

gcd(32, 8);
gcd(8, 12);
gcd(17, 13);
gcd(14, 7);
gcd(32, 16);
gcd(17, 100);
gcd(55, 20);
gcd(55, 22);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 210

// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function countPosSumNeg(arr) {
	let a = 0;
	let b = 0;
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			a++;
		} else {
			b += arr[i];
		}
	}
	return a > 0 || b > 0 ? [a, b] : [];
}



function countPosSumNeg(nums) {
    if (nums === null || nums.length < 1) return [];
    let pos = nums.filter(x => x >= 0).length;
    let neg = nums.filter(x => x < 0).reduce((a, b) => a + b);
    return [pos, neg];
}


countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]);
countPosSumNeg([91, -4, 80, -73, -28]);
countPosSumNeg([]);
countPosSumNeg([69, 100, 28, 47, 53, -61, -24]);
countPosSumNeg([5, 7, 9, -3, -7, 61, -24]);
countPosSumNeg([98, 51, -19, -97]);
countPosSumNeg([-42, 3, -51, -64, 69, 77, -20, -5, 68, -76]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 211

// Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone. See the resources tab for the formula.



function coneVolume(h, r) {
	return Number((Math.PI * Math.pow(r, 2) * h / 3).toFixed(2));
}



coneVolume(3,2);
coneVolume(15,6);
coneVolume(18,0);
coneVolume(100,2);
coneVolume(1,1);
coneVolume(0,30);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 212

// Write a function that returns true if an integer is a power of 2, and false otherwise.


function powerOfTwo(num) {
	return num && (num & (num - 1)) === 0;
}



powerOfTwo(32);
powerOfTwo(1);
powerOfTwo(-7);
powerOfTwo(18);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 213

// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.


function uniqueArr(arr) {
	return [...new Set(arr.filter(x => x > 0))];
}


const uniqueArr = arr => [...new Set(arr)].filter(v => v > 0);


const uniqueArr = arr => Array.from(new Set(arr)).filter(num => num > 0);

uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]);
uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]);
uniqueArr([-5, 3, 2, -4, 3, -1, -7, 2, 4, 4]);
uniqueArr([3, -5, 0, -5, 2, -1, 0, -4, -6, 1]);
uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]);
uniqueArr([5, 10, -12, 5, 9, 5, 10, 9, 10, -12]);
uniqueArr([]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 214

// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.



function puzzlePieces(a1, a2) {
	const a = [];
	
	for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
		a.push(a1[i] + a2[i]);
	}
	
	return a.every(x => x === a[0]);
}



function puzzlePieces(a1, a2) {
	return a1.length === a2.length && new Set(a1.map((v,i) => v + a2[i])).size === 1;
}


puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]);
puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]);
puzzlePieces([2, 1, 1], [-2, -1, -1]);
puzzlePieces([2], [-2]);
puzzlePieces([5, -1], [-6, 0]);
puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1, 1]);
puzzlePieces([1, 2], [-1, -1]);
puzzlePieces([9, 8, 7], [7, 8, 9, 10]);
puzzlePieces([9, 8, 7], [7, 8, 9, 16]);
puzzlePieces([1, 1, 1], [1, 1, 2]);
puzzlePieces([1, 8, 1], [1, -8, -1]);
puzzlePieces([0, 0, 0, 0, 0], [1, 1, 0, 1, 1]);
puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 215

// Create a function that returns the sum of all even elements in a 2D matrix.


function sumOfEvens(arr) {
	let a = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] % 2 === 0) {
				a += arr[i][j];
			}
		}
	}
	return a;
}


function sumOfEvens(arr) {
	return arr.flat().reduce((acc, el) => {
		return acc + (el % 2 === 0 ? el : 0);
	}, 0);
}

sumOfEvens([
    [1, 5, 1, 3], 
    [4, 1, 2, 0], 
    [6, 9, 7, 4], 
    [5, 1, 2, 6]
]), 24)

sumOfEvens([
    [1, 0, 1],
    [33, 1, 2],
    [15, 9, 1],
    [5, 1, 979]
]);

sumOfEvens([
    [2, 19, 5, 43], 
    [67, 2, 0, 12]
]);

sumOfEvens([
    [1, 3, 7, 9], 
    [11, 13, 15, 17], 
    [19, 21, 23, 25]
]);

sumOfEvens([
    [], 
    [], 
    []
]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 216

// Given two integers a and b, return how many times a can be halved while still being greater than b.

function halveCount(a, b) {
	let x = -1;
	for (let i = 0; a > b; i++) {
		a /= 2;
		x++;
	}
	return x;
}


function halveCount(a, b) {
	let count = -1;
	while (a > b) { a /= 2; count++; }
	return count;
}




halveCount(1891, 4);
halveCount(1756, 14);
halveCount(7764, 2);
halveCount(1118, 47);
halveCount(161, 79);
halveCount(8573, 35;
halveCount(4123, 1);
halveCount(1348, 60);
halveCount(7549, 31);
halveCount(4469, 5);
halveCount(1123, 98);
halveCount(8197, 85);
halveCount(1199, 56);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 217

// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.


function correctSpacing(sentence) {
	return sentence.replace(/\s+/g,' ').trim();
}



correctSpacing(" A  glittering  gem     is    not   enough.  ");
correctSpacing("   She      did  her best  to  help    him.  ");
correctSpacing("  They      made  sure   to get   there  early. ");
correctSpacing("  She  did   her      best     to   help him. ");
correctSpacing("      I     love  eating    toasted  cheese   and tuna  sandwiches.");
correctSpacing("  There     were  foggy   conditions on   the      trail.   ");
correctSpacing("     The  roads   were  impassable  due to      snow.  ");
correctSpacing(" Better   to      paint  with  bold  colors.   ");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 218

// Write a function that recursively determines if a string is a palindrome.


function isPalindrome(str) {
	return str === str.split("").reverse().join("");
}


isPalindrome("abcba");
isPalindrome("abbba");
isPalindrome("abbbba");
isPalindrome("abccdba");
isPalindrome("abbaa");
isPalindrome("abbbbb");
isPalindrome("ad");
isPalindrome("b");
isPalindrome("");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 218

// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.


function testFairness(agatha, bertha) {
	let a = 0;
	let b = 0;
	for (let i = 0; i < agatha.length; i++) {
		a += agatha[i][0] * agatha[i][1];
	}
		for (let i = 0; i < bertha.length; i++) {
		b += bertha[i][0] * bertha[i][1];
	}
	
	return a === b;
}


function testFairness(agatha, bertha) {
	return agatha.reduce((a,c) => a += c[0] * c[1], 0) ==
         bertha.reduce((a,c) => a += c[0] * c[1], 0)
}


function testFairness(agatha, bertha) {
	const f = (c) => c.reduce((acc, cur) => acc + cur[0] * cur[1], 0)
	return f(agatha) === f(bertha)
}


testFairness([[1,5], [6,3], [1,1]], [[7,1], [2,2], [1,1]]);
testFairness([[2,2], [2,2], [2,2], [2,2]], [[4,4]]);
testFairness([[1,2], [2,1]], [[2,2]]);
testFairness([[1,2], [2,1]], [[2,2], [4,4]]);
testFairness([[2,4], [1,1], [11,1]], [[2,2], [4,4]]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 219

// Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.


function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}




isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(10);
isPrime(11);
isPrime(102);
isPrime(103);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 219

// Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.

// Write a function that takes a string (the message) and returns the total number of times the button is pressed.


function howManyTimes(msg) {
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let a = 0;
	for (let i = 0; i < msg.length; i++) {
		a += alphabet.indexOf(msg[i]) + 1;
	}
	return a;
}

const howManyTimes = msg => [...msg].reduce((a,v) => a + v.charCodeAt()-96, 0);

howManyTimes("qudusayo");
howManyTimes("que");
howManyTimes("abd");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 220

// Create a function that determines if there is an upward trend.


function upwardTrend(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			return 'Strings not permitted!';
		} else if (arr[i+1] < arr[i]) {
			return false;
		} 
	}
	return true;
}


function upwardTrend(arr) {
    return arr.some(x=>typeof x == 'string')?'Strings not permitted!':arr.toString()==arr.sort((a,b)=>a-b).toString()
}


upwardTrend([1, 2, 3, 4, 5, 6]);
upwardTrend([1, 3, 2, 5, 6, 7]);
upwardTrend([1, 2, 3, 4, 5, "6", 7, 8, 9]);
upwardTrend([1, 3, 5, 7, 9]);
upwardTrend([10, 12, 13, 15, 20]);
upwardTrend([6, 9, 11, 15, 12]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 221

// Write a function that calculates the nth Fibonacci number.


function fib(n) {

    const result = [0, 1];
      if (n === 0) {
          return 0;
      } else {
        for (var i = 2; i < n + 1; i++) {
    result.push(result[i-2] + result[i-1]);
        }
    }
return result[result.length - 1];
}


const fib = num => (num < 2 ? num : fib(num - 1) + fib(num - 2));


fib(2);
fib(5);
fib(8);
fib(12);
fib(0);
fib(1);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 221

// You have an array of item codes with the following format: "[letters][digits]"

// Create a function that splits these strings into their alphabetic and numeric parts.

function splitCode(item) {
	var s1 = item.substr(0, item.length / 2);
	var s2 = Number(item.substr(item.length / 2 - 1 + 1));
	
	return [s1, s2];
}


const splitCode = item => [
    item.match(/[a-z]+/i)[0],
    Number(item.match(/[0-9]+/)[0]),
];


splitCode("TEWA8392");
splitCode("MMU778");
splitCode("SRPE5532");
splitCode("SKU8977");
splitCode("MCI5589");
splitCode("WIEB3921");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 222

// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".


function flipEndChars(str) {
	if (str.length < 2 || typeof str !== 'string') {
		return "Incompatible.";
	} else if (str[0] === str[str.length - 1]) {
		 return "Two's a pair.";
	 } else {
		 return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
	 }
}



function flipEndChars(str) {
	return typeof str != "string"  || str.length < 2 ? "Incompatible." : 
         str[0] == str[str.length - 1] ? "Two's a pair." : 
         str[str.length - 1] + str.slice(1,str.length - 1) + str[0] ;
}

flipEndChars("Cat, dog, and mouse.");
flipEndChars("Anna, Banana");
flipEndChars("[]");
flipEndChars("");
flipEndChars([1, 2, 3]);
flipEndChars("dfdkf49824fdfdfjhd");
flipEndChars("#343473847#");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 223

// Write a function that recursively returns the number of vowels in a string.


function countVowels(str) {
	let a = 0;
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
			a++;
		}
	}
	return a;
}


function countVowels(str) {
	return str.split('').filter(x=>(/[aeiou]/ig).test(x)).length;
}


countVowels("apple");
countVowels("cheesecake");
countVowels("martini");
countVowels("rhythm");
countVowels("");
countVowels("b");
countVowels("a");
countVowels("bbbbbb");
countVowels("bbbbba");
countVowels("abbbb");
countVowels("bbbab");
countVowels("bbaab");
countVowels("baabab");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 224

// Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".


function getDay(day) {
	var d = new Date(day);
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];
	return n;
}

const getDay = day =>
new Date(day).toLocaleString('en-us', {weekday:'long'});

getDay('12/07/2016');
getDay('12/08/2011');
getDay('09/04/2016');
getDay('06/08/2012');
getDay('08/13/2019');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 225

// Write a function that converts an object into an array, where each element represents a key-value pair.



function toArray(obj) {
	const a = [];
	for (let [key, value] of Object.entries(obj)) {
  a.push([key, value]);
	}
	return a;
}


function toArray(obj) {
	return Object.entries(obj);
}


toArray({ a: 1, b: 2 });
toArray({ foo: 33, bar: 45, baz: 67 });
toArray({ shrimp: 15, tots: 12 });
toArray({});



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 226

// Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.



function uniqueInOrder(sequence) {
	const a = [];
	
	for (let i = 1; i < sequence.length + 1; i++) {
		if (sequence[i-1] !== sequence[i]) {
			a.push(sequence[i-1]);
		}
	}
	return a;
}


function uniqueInOrder(sequence) {
    return Array.from(sequence).filter((x,i,a) => x !== a[i-1]);
}


function uniqueInOrder(sequence) {
    return [...sequence].filter((a, i) => a !== sequence[i+1])
}


uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder("ABBCcAD");
uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder("12333355555522211133");
uniqueInOrder("uuUfffFgGggYtt76%5$$$");
uniqueInOrder(["1", "2", "2", "3", "3"]);
uniqueInOrder([3, 7, 3, 8, 4]);
uniqueInOrder("ABC");
uniqueInOrder("$$$%%%$$$%%%");
uniqueInOrder([1, 1, 1, "A", "B", "B"]);





 // ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 227

// A number n is automorphic if n^2 ends in n.

// For example: n=5, n^2=25

// Create a function that takes a number and returns true if the number is automorphic, false if it isn't.


function isAutomorphic(n) {
	return String(Math.pow(n, 2)).endsWith(n);
}



isAutomorphic(0);
isAutomorphic(1);
isAutomorphic(5);
isAutomorphic(6);
isAutomorphic(25);
isAutomorphic(76);
isAutomorphic(7109376);
isAutomorphic(36);
isAutomorphic(100);
isAutomorphic(11);
isAutomorphic(6025);
isAutomorphic(3);
isAutomorphic(1376);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 228

// Create a function that takes a strings characters as ASCII and returns each characters hexadecimal value as a string.



function toHex(str) {
	const a = [];
	
	for (let i = 0; i < str.length; i++) {
		a.push(str[i].charCodeAt(0).toString(16));
	}
	
	return a.join(" ");
}


function toHex(str) {
	return str.split('').map(a => a.charCodeAt(0).toString(16)).join(' ');
}


const toHex = str => [...str].map(v => v.charCodeAt().toString(16)).join(' ');


toHex("Big Boi");
toHex("Marty Poppinson");
toHex("abcdefghi");
toHex("oh dear");
toHex("i hate C#");
toHex("i love C++ , not really");





Write a function that moves all elements of one type to the end of the array.


function moveToEnd(arr, el) {
	const a = [];
	const b = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === el) {
			a.push(arr[i]);
		} else {
			b.push(arr[i]);
		}
	}
	return [...b, ...a];
}

function moveToEnd(arr, el) {
	return arr.sort((a)=>a==el?1:-1)
}


moveToEnd=(a,e)=>a.sort(i=>i==e?1:0)


moveToEnd([1, 3, 2, 4, 4, 1], 1);
moveToEnd([7, 8, 9, 1, 2, 3, 4], 9);
moveToEnd([7, 7, 7, 6, 6, 6, 6], 7);
moveToEnd(["a", "c", "c", "c", "b", "c"], "b");
moveToEnd(["a", "c", "c", "c", "b", "c"], "c");
moveToEnd(["a", "a", "a", "b"], "a");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 229

// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of (the last digit of a * the last digit of b) = the last digit of c. Check examples for explanation.


function lastDig(a, b, c) {
	const x = a.toString()[a.toString().length - 1] * b.toString()[b.toString().length - 1];
	return c.toString()[c.toString().length - 1] === x.toString()[x.toString().length - 1];
}


function lastDig(a, b, c) {
	return (a % 10) * (b % 10) % 10 == c % 10
}

lastDig(1, 1, 1);
lastDig(12, 15, 10);
lastDig(15228, 9209, 72162);
lastDig(15, 1, 1);
lastDig(123, 15, 10);
lastDig(5213, 99219, 6165);
lastDig(1523, 513, 512);
lastDig(-15, 1, 1);
lastDig(123, -15, 10);
lastDig(-12, 15, -10);
lastDig(15228, -9209, -72162);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 229

// Common lore states that we should only be eating shellfish, especially oysters, in months with the letter “r”. So we can help ourselves to all the oysters, mussels, and clams we can eat from September through April, but put the brakes on come May.

// Create a function that takes a date as an argument and returns "safe" or "unsafe" depending on whether or not it's safe or unsafe to eat shellfish.


const shellFish = d => (d.getMonth() + 7) % 12 <= 3 ? `unsafe` : `safe`;

const shellFish = date => {
	const m = date.getMonth();
	return m > 8 || m < 5 ? "safe" : "unsafe";
}


shellFish(new Date(2009, 6, 9));
shellFish(new Date(1991, 8, 30));
shellFish(new Date(2059, 10, 6));
shellFish(new Date(1934, 4, 18));
shellFish(new Date(1986, 2, 22));
shellFish(new Date(2000, 7, 10));
shellFish(new Date(1963, 11, 3));
shellFish(new Date(1958, 1, 11));
shellFish(new Date(1945, 5, 19));
shellFish(new Date(1937, 6, 2));
shellFish(new Date(2020, 12, 28));
shellFish(new Date(2019, 10, 10));
shellFish(new Date(2001, 3, 9));
shellFish(new Date(1901, 9, 18));




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 230

// Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

// If there are no missing letters in the string, return "No Missing Letter".


function missingLetter(str) {
	for (var i = 0; i < str.length - 1; i++) {
		if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
				return String.fromCharCode(str.charCodeAt(i) + 1);
		}
	}
	return 'No Missing Letter';
}


missingLetter("abdefg");
missingLetter("mnopqs");
missingLetter("tuvxyz");
missingLetter("jlm");
missingLetter("rsu");
missingLetter("eghij");
missingLetter("qrtuv");
missingLetter("ghijklmno");
missingLetter("xyz");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 231

// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.


function owofied(sentence) {
	const a = sentence.replace(/i/g, "wi");
	const b = a.replace(/e/g, "we");
	return b + " owo";
}


function owofied(sentence) {
	return sentence.replace(/([ie])/g, 'w$1') + ' owo';
}


function owofied(sentence) {
	return sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
}


owofied("I'm gonna ride 'til I can't no more");
owofied("Do you ever feel like a plastic bag");
owofied("Cause baby you're a firework");
owofied("Never gonna give you up");
owofied("We've known each other for so long");
owofied("Never gonna let you down");
owofied("Shine bright like a diamond");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 232

// Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.


function canAlternate(s) {
	let a = 0;
	let b = 0;
	
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "1") {
			a++;
		} else b++;
	}
	
	return  a === b - 1 || a === b + 1 || a === b;
}



canAlternate("0001111");
canAlternate("01001");
canAlternate("010001");
canAlternate("0100110111");
canAlternate("10101010");
canAlternate("010101000");
canAlternate("0111");
canAlternate("00");
canAlternate("1111");
canAlternate("101");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 232

// A museum wants to get rid of some exhibitions. Vanya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

// Create a function that takes an array of integers and removes the smallest value.


function removeSmallest(arr) {
	const a = arr.splice(arr.indexOf(Math.min(...arr)), 1);	
	return arr.filter(x => x !== a);
}


function removeSmallest(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr;
}


removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([5, 3, 2, 1, 4]);
removeSmallest([2, 2, 1, 2, 1]);
removeSmallest([3, 1, 6, 7, 3, 7, 6]);
removeSmallest([4, 4, 4, 1]);
removeSmallest([5, 4, 5, 3, 1, 1]);
removeSmallest([1, 5, 3]);
removeSmallest([]);
removeSmallest([6, 2, 5, 4, 8, 6, 3, 2, 7]);
removeSmallest([3]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 233

// Create a function that outputs true if a number is prime, and false otherwise.

function isPrime(num) {
	for (i=2;i<Math.floor(Math.sqrt(num));i++){
		if (num%i==0){return false}
	}
	return true
}


function isPrime(num) {
	if (num == 1 || num % 2 == 0) return false;
	for (let i = 3; i < num; i += 2){
		if (num % i == 0) return false;  
	}
	return true;
}


isPrime(31);
isPrime(18);
isPrime(11);
isPrime(12);
isPrime(1);
isPrime(3);
isPrime(48);
isPrime(10);
isPrime(5);
isPrime(77);
isPrime(7);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 234

// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

function mathExpr(expr) {
	return expr.match(/[a-z]/i) || typeof eval(expr) !== 'number' ? false : true;
}


const mathExpr = exp => /^\d\s?[\+\-\*\/\%]\s?\d$/.test(exp);

function mathExpr(expr) {
	return /^\d(\s)*[%+/*-](\s)*\d$/.test(expr);
}


mathExpr("5+4");
mathExpr("4 * 5");
mathExpr("3*6");
mathExpr("4 - 5");
mathExpr("6 % 7");
mathExpr("a - b");
mathExpr("a - 2");
mathExpr("nope");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 235

// Create a function that takes a single string as argument and returns an ordered array containing the indexes of all capital letters in the string.


function indexOfCaps(str) {
	const a = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase() && str[i].match("^[a-zA-Z]+$")) {
			a.push(str.indexOf(str[i]));
		}
	}
	return a;
}


function indexOfCaps(str) {
    var res = [];
    for(var i = 0; i < str.length; i++){
      if (/[A-Z]/.test(str[i])){
        res.push(i);
      }
    }
    return res;
}


function indexOfCaps(str) {
    return str.split('').reduce((arr, c, i) => /[A-Z]/.test(c) ? arr.concat(i) : arr, [])
}


const indexOfCaps = str => str.split('').map((l, i) => l.toLowerCase() !== l ? i : '').filter(c => c !== '');


indexOfCaps("eDaBiT");
indexOfCaps("eQuINoX");
indexOfCaps("determine");
indexOfCaps("STRIKE");
indexOfCaps("sUn");
indexOfCaps("SpiDer");
indexOfCaps("accOmpAnY");
indexOfCaps("@xCE#8S#i*$en");
indexOfCaps("1854036297");
indexOfCaps("Fo?.arg~{86tUx=|OqZ!");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 236

// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.


function flash([num1, op, num2]) {
	switch (op) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "/":
			if (num2 !== 0) {
				return Number((num1 / num2).toFixed(2));
			} else return undefined;
		case "x":
			return num1 * num2;
	}
}


function flash([num1, op, num2]) {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        const result = num1 / num2;
        return Number.isFinite(result) ? Number(result.toFixed(2)) : undefined;
    }
  
    return undefined;
}



flash([3, 'x', 7]);
flash([5, '+', 7]);
flash([10, '-', 9]);
flash([10, '/', 0]);
flash([10, '/', 3]);
flash([2, 'x', 0]);
flash([0, '/', 5]);
flash([0, '+', 0]);
flash([0, '-', 0]);
flash([8, '-', 0]);
flash([0, '/', 0]);
flash([3, '/', 8]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 236

// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."


const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	return (GUEST_LIST[name]) ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` : `Hi! I'm a guest.`;
}


const countries = {
    Randy: 'Germany',
    Karla: 'France',
    Wendy: 'Japan',
    Norman: 'England',
    Sam: 'Argentina',
  };
  
  const greeting = name =>
    countries.hasOwnProperty(name)
      ? `Hi! I'm ${name}, and I'm from ${countries[name]}.`
      : "Hi! I'm a guest.";


greeting("Randy");
greeting("Sam");
greeting("Monti");
greeting("Trudy");
greeting("Wendy");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 237

// Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. If two numbers equally distant from n are found, the function will return the greatest of them.

function nearestElement(n, arr) {
    const nearest = arr.concat().sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a)[0];
    return arr.indexOf(nearest);
}


const nearestElement = (n, a,
    s = a.map(v => Math.abs(v - n)),
    m = Math.min(...s)) => {	
s = s.map((v,i) => v !== m ? 0 : a[i] > n ? "+" : "-");
return s.indexOf("+") > -1 ? s.indexOf("+") : s.indexOf("-");
}


const nearestElement = (n,a) => {
    const m = a.map(v => Math.max(v,n)-Math.min(v,n)).reduce((x,y) => Math.min(x,y));
    return a.includes(n + m) ? a.indexOf(n + m) : a.indexOf(n - m)
}


nearestElement(10, [1, 100, 1000]);
nearestElement(50, [100, 49, 51]);
nearestElement(-20, [-50, -10, -30]);
nearestElement(100, [80, 60, 40]);
nearestElement(48, [47, 49, 73, 51, 44, 41]);
nearestElement(1, [0, -2, 3, 2, -1]);
nearestElement(100, [88, 99, 101, 108, 97, 98, 36]);
nearestElement(-50, [13, 86, -49, -51, 8, 0]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 238

// A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.


function isNarcissistic(n) {
	let a = 0;
	
	for (let i = 0; i < n.toString().length; i++) {
		a += Math.pow(n.toString()[i], n.toString().length);
	}
	
	return a === n;
}


function isNarcissistic(n) {
	return String(n)
		.split("")
		.map(v => Math.pow(v, String(n).length))
		.reduce((a,v) => a + v) === n ? true : false;
}


function isNarcissistic(n) {
	const digits = [...String(n)];
	return digits.reduce((a, c) => a + c ** digits.length, 0) === n;
}



isNarcissistic(6);
isNarcissistic(1741725);
isNarcissistic(66);
isNarcissistic(65239);
isNarcissistic(886243);
isNarcissistic(92727);
isNarcissistic(472335975);
isNarcissistic(42300981);
isNarcissistic(548834);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 239

// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).


function getSequence(low, high) {
	const a = [];
	for (let i = low; i <= high; i++) {
		a.push(i);
	}
	return a;
}


const getSequence = (low, high) =>
Array.from({length: high - low + 1}, (_, i) => low + i);


const getSequence = (low, high) => 
	Array.from(Array(high - low + 1), (x, i) => i + low);


getSequence(1, 5);
getSequence(98, 100);
getSequence(1000, 1000);
getSequence(1450, 1460);
getSequence(0, 3);
getSequence(-10, 1);
getSequence(-100, -100);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 240

// A Kaprekar Number is a positive integer that, after being squared and split into two lexicographical parts, is equal to the sum of the two new numbers obtained:

// If the quantity of digits of the squared number is even, the left and right parts will have the same length.
// If the quantity of digits of the squared number is odd, then the right part will be the longest half, with the left part being the smallest or equal to zero if the quantity of digits is equal to 1.
// Given a positive integer n implement a function that returns true if it's a Kaprekar number, and false if it's not.


function isKaprekar(n) {
	const a = Math.pow(n, 2).toString();
	const x = Number(a.slice(0, Math.min(a.length / 2)));
 	const y = Number(a.slice(Math.max(a.length / 2)));
	
	return n === x + y;
}


const isKaprekar = n => {
	let num = String(n ** 2)
	let len = num.length
	
	return +num.slice(0, len / 2) + +num.slice(len / 2) === n
}


const isKaprekar = (n, a = String(n*n), h = a.length / 2) =>
+a.substring(0, h) + +a.substring(h) === n;


isKaprekar(1);
isKaprekar(2);
isKaprekar(3);
isKaprekar(5);
isKaprekar(9);
isKaprekar(65);
isKaprekar(99);
isKaprekar(297);
isKaprekar(348);
isKaprekar(666);
isKaprekar(1441);
isKaprekar(77778);
isKaprekar(102102);
isKaprekar(533170);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 241

// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.


function unstretch(word) {
	const a = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i] !== word[i+1]) {
			a.push(word[i]);
		}
	}
	return a.join("");
}


const unstretch = word => word.replace(/(.)\1+/g, '$1');


unstretch('llossttttt');
unstretch('cccccaaaaannnnne');
unstretch('hhoooneestttt');
unstretch('ppppooowwddddeeerrrr');
unstretch('eexxpppppeeccctt');
unstretch('rrrrepooooorrttt');
unstretch('pppaaaaattteeeennnntt');
unstretch('mmmeeemoooryy');
unstretch('vvvvviiiiisssuuaaalll');
unstretch('eeeennnnsuuurrre');
unstretch('iiinncclludddddeee');
unstretch('ttteestiffffyyy');




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 242

// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

// Examples
// mysteryFunc(152) ➞ 10

// mysteryFunc(832) ➞ 48

// mysteryFunc(19) ➞ 9

// mysteryFunc(133) ➞ 9


function mysteryFunc(num) {
	return num.toString().split("").map(x => parseInt(x)).reduce((x, i) => x * i);
}


const mysteryFunc = num =>
  String(num)
    .split('')
    .reduce((total, digit) => total * Number(digit));



function mysteryFunc(num) {
	return (''+num).split('').reduce((r,v) => r*v, 1);
}


const mysteryFunc = n => [...n.toString()].map(v => +v).reduce((acc, val) => acc * val);

mysteryFunc(152);
mysteryFunc(832);
mysteryFunc(5511);
mysteryFunc(19);
mysteryFunc(133);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 243

// Given two lines, determine whether or not they are parallel.

// Lines are represented by an array [a, b, c], which corresponds to the line ax+by=c.


function linesAreParallel(l1, l2) {
	return l1[0] * l2[1] - l2[0] * l1[1] === 0;
}



linesAreParallel([1,2,3], [1,2,4]);
linesAreParallel([2,4,1], [4,2,1]);
linesAreParallel([0,1,5], [0,1,5]);
linesAreParallel([2,5,0], [20,50,10]);
linesAreParallel([2,5,0], [-200,-500,10]);
linesAreParallel([400000,1,0], [400000,2,0]);
linesAreParallel([800,20,0], [40,20,0]);
linesAreParallel([400000,1,0], [800000,2,100000]);
linesAreParallel([-5,7,100000], [5,-7,-200000]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 244

// Create a function that takes an array of items and checks if the last item matches the rest of the array.

function matchLastItem(arr) {
	let a = ''
	for (let i = 0; i < arr.length - 1; i++) {
		a += arr[i];
	}
	return a === arr[arr.length - 1];
}


function matchLastItem(arr) {
	return arr.pop() === arr.join('');
}


matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']);
matchLastItem([ 0, 1, 2, 3, 4, 5, '12345' ]);
matchLastItem([ 'for', 'mi', 'da', 'bel', 'formidable' ]);
matchLastItem([8, 'thunder', true, '8thundertrue']);
matchLastItem([ 1, 1, 1, '11' ]);
matchLastItem(['tocto','G8G','xtohkgc','3V8','ctyghrs',100.88,'fyuo','Q','toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ']);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 245

// Create a function that returns true if the given circles are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:

// Radius of the circle.
// Position on the x-axis.
// Position on the y-axis.

function isCircleCollision(c1, c2) {

    var dx = c1[1] - c2[1];
    var dy = c1[2] - c2[2];
    var distance = Math.sqrt(dx * dx + dy * dy);
    
    return distance < c1[0] + c2[0]
}


function isCircleCollision(c1,c2){
    return (c1[0] + c2[0] > Math.hypot(c2[2] - c1[2], c2[1] - c1[1]));
}



isCircleCollision([10,0,0],[10,10,10]);
isCircleCollision([10,0,0],[5,0,0]);
isCircleCollision([1,0,0],[1,0,0]);
isCircleCollision([5,0,0],[5,10,10]);
isCircleCollision([1,0,0],[1,10,10]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 246

// Write a function that converts an object into an array of keys and values.


function objectToArray(obj) {
	return Object.entries(obj);
}


function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]]);
}


function objectToArray(obj) {
	var r = [];
  for (var i in obj) {
		r.push([i, obj[i]]);
	}
	return r;
}



objectToArray({
  D: 1, 
  B: 2, 
  C: 3
});

objectToArray({
	likes: 2, 
  dislikes: 3, 
  followers: 10
});




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 247

// Create a function that determines whether a string is a valid hex code.

// A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.


function isValidHexCode(str) {
	return /^#[a-f0-9]{6}$/i.test(str);
}



isValidHexCode('#CD5C5C');
isValidHexCode('#EAECEE');
isValidHexCode('#eaecee');
isValidHexCode('#CD5C58C');
isValidHexCode('#CD5C5Z');
isValidHexCode('#CD5C&C');
isValidHexCode('CD5C5C');
isValidHexCode('#123CCCD');
isValidHexCode('#123456');
isValidHexCode('#987654');
isValidHexCode('#9876543');
isValidHexCode('#CCCCCC');
isValidHexCode('#ZCCZCC');
isValidHexCode('#Z88Z99');
isValidHexCode('#Z88!99');



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 248

// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.


function accum(str) {
	const a = [];
	for (let i = 0; i < str.length; i++) {
		a.push(str[i].repeat(i + 1));
	}
	
	return a.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join("-");
}


function accum(str) {
    return 	str.split('').map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-');
  }


accum("abcd");
accum("RqaEzty");
accum("cwAt");
accum("VgyCdnQa");
accum("nRBSdNOsMl");
accum("nuE");
accum("RlDrhZuQaqsoHEfziByObtMxkFCJVe");
accum("EXpzPFx");
accum("NU");
accum("g");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 249

// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).


function isPalindrome(string) {
    var sanitized = string.toLowerCase().replace(/[^a-z]/g, "");
    var reversed = sanitized.split('').reverse().join(''); 
    return (reversed == sanitized);
}


function isPalindrome(string) {
    var arr = string.toLowerCase().match(/[a-z]+/g).join('');
    
    return arr.split('').join('') == arr.split('').reverse().join('');
}


const isPalindrome = str => {
    const clean = str.toLowerCase().replace(/[\W\s-]/g, '');
    return clean.split('').reverse().join('') === clean;
}


isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!');
isPalindrome('Neuquen');
isPalindrome('Not a palindrome');




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 250

// Create a function that takes a string of lowercase characters and returns that string reversed and capitalized.

function reverseCapitalize(str) {
	return str.toUpperCase().split("").reverse().join("");
}


reverseCapitalize("edabit");
reverseCapitalize("abc");
reverseCapitalize("hellothere");
reverseCapitalize("input");
reverseCapitalize("indubitably");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 251

// Your function will get an array with a number sequence. However, one item will be missing. It's your job to find out which one is not in the array.

// To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.


function missing(arr) {
	var sum = (arr.length + 1) * (arr[0] + arr[arr.length - 1]) / 2;
	return sum  - arr.reduce((x,y) => x + y);
}


const missing = arr => {
    const first = arr[0];
    const last = arr[arr.length - 1];
    const delta = last - first;
    const step = delta / arr.length;
  
    return arr.find((num, i) => num + step !== arr[i + 1]) + step;
  };


[1, 3, 4, 5];
[2, 4, 6, 8, 10, 14, 16];
[12, 15, 18, 21, 24, 30, 33];
[0, 60, 180];
[-1.25, 1.25, 2.5];
[1, 19, 28];
[100, 500, 900, 1300, 2100, 2500, 2900];
[1.5, 2, 3];



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 252

// Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th etc.


function returnEndOfNumber(num) {
	if (num.toString()[num.toString().length - 1] === "1") {
		return num + "-ST"
	} else if (num.toString()[num.toString().length - 1] === "2") {
		return num + "-ND"
	} else if (num.toString()[num.toString().length - 1] === "3") {
		return num + "-RD"
	} else return num + "-TH"
}


const returnEndOfNumber = (num) => {
    const unitsNum = num.toString().split('')[num.toString().length-1]
    switch(unitsNum) {
        case "1": return num.toString() + "-ST"
        case "2": return num.toString() + "-ND"
        case "3": return num.toString() + "-RD"
        default: return num.toString() + "-TH"
    }
}


const returnEndOfNumber = (num) => {
    let a=["-TH","-ST","-ND","-RD"]
    return num+(a[[...""+num].slice(-1)]||a[0])
}



returnEndOfNumber(334);
returnEndOfNumber(12341);
returnEndOfNumber(1);
returnEndOfNumber(3222);
returnEndOfNumber(563);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 253

// Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.


function median(arr) {
	const values = arr.sort((a, b ) => a - b)
	const lowMiddle = Math.floor( (values.length - 1) / 2);
	const highMiddle = Math.ceil( (values.length - 1) / 2);
	
	return (values[lowMiddle] + values[highMiddle]) / 2;
}


median([20, 40, 20, 30, 50, 60, 70, 0, 20]);
median([342, 98, 5456, 32, 786, 432, 890, 321]);
median([1, 0, 1, 0, 0, 0, 1, 1]);
median([32, 5, 78, 32, 4, 5, 3]);
median([-20, 40, 30, -2, 40, -13]);
median([32786, 7837, 83736, 83736, 10383, 738393]);
median([7685, 83736, 38376, 73638, 7337]);
median([0, 0, 0, 0]);
median([-30, -42, -60, -10, -30, -50]);
median([238, 432, 897, 710]);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 254

// Create a function that takes two numbers as arguments and returns the GCD of the two numbers.


function gcd(a, b) {
	if (!b) return a;
  return gcd(b, a % b);
}


function gcd(a,b){
    return b == 0 ? a : gcd(b, a % b);
};


gcd(6, 10);
gcd(17, 85);
gcd(18, 153);
gcd(14, 14);
gcd(6, 31);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 255

// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.



function cumulativeSum(arr) {
	let a = 0;
	let x = [];
	
	for (let i = 0; i < arr.length; i++) {
		x.push(a + arr[i]);
		a += arr[i];
	}
	return x;
}

function cumulativeSum(array) {
    var sum=0;
    return array.map(x=>(sum+=x))
}


cumulativeSum([]);
cumulativeSum([1]);
cumulativeSum([1, 2, 3]);
cumulativeSum([-1, -2, -3]);
cumulativeSum([1, -2, 3]);
cumulativeSum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 256

// Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.

// For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.

function calculateScores(str) {
	const a = [0, 0, 0];
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "A") {
			a[0]++;
		} else if (str[i] === "B") {
			a[1]++;
		} else if (str[i] === "C") {
			a[2]++;
		}
	}
	return a;
}


const calculateScores = str => [
    (str.match(/A/g) || []).length,
    (str.match(/B/g) || []).length,
    (str.match(/C/g) || []).length,
];

calculateScores("AAB");
calculateScores("ABC");
calculateScores("ABCBACC");
calculateScores("CCBBBB");
calculateScores("CCAABBAABBCC");
calculateScores("A");
calculateScores("");
calculateScores("ACCCA");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 257

// Given a character and a value between 0 and 100, return a string that represents a simple progress bar.

// The value represents a percentage.
// The bar should begin and end with "|"
// Repeat the character to fill the bar, with each character equivalent to 10%
// Use spaces to pad the bar to a length of 10 characters.
// A single space comes after the bar, then a message with the % completion (e.g. "Progress: 60%")
// If the value is 100, the message should be "Completed!".


function progressBar(bar, progress) {
	const a = bar.repeat(progress / 10);
	const b = " ".repeat(10 - progress / 10) 
	
	return progress < 100 ? `|${a + b}| Progress: ${progress}%` : `|${a + b}| Completed!`;
}


const progressBar = (bar, prog) => `|${bar.repeat(prog/10)}${' '.repeat((100-prog)/10)}| ` + (prog<100 ? `Progress: ${prog}%` : `Completed!`);


progressBar("=", 10);
progressBar("#", 90);
progressBar("*", 100);
progressBar("#", 50);
progressBar("*", 60);
progressBar("#", 100);
progressBar("*", 60);
progressBar("=", 30);
progressBar(">", 70);
progressBar("=", 40);
progressBar(">", 20);
progressBar("*", 0);
progressBar("=", 60);
progressBar(">", 90);
progressBar("*", 80);
progressBar("#", 20);
progressBar("*", 30);
progressBar("=", 70);
progressBar("=", 0);
progressBar(">", 100);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 258

// Create a function that takes the month and year (as integers) and returns the number of days in that month.


function days(month, year) {
	return new Date(year, month, 0).getDate();
}


days(1, 2018);
days(2, 2018);
days(3, 2018);
days(4, 2018);
days(5, 2018);
days(6, 2018);
days(7, 2018);
days(8, 2018);
days(9, 2018);
days(10, 2018);
days(11, 2018);
days(12, 2018);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 259

// Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.


function split(str) {
	let a = "";
	let b = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
			a += str[i];
		} else b += str[i];
	}
	return a + b;
}


const split = str => str.replace(/[^aeiou]/gi,'') + str.replace(/[aeiou]/gi,'');


split("abcde");
split("Hello!");
split("What's the time?");




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 260

// A Sudoku is a 9x9 grid that is completed when every 3x3 square, row and column consist of the numbers 1-9.

// For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.

function isMiniSudoku(square) {
	return square.flat().length === new Set(square.flat()).size && square.flat().every(x => x > 0);
}


function isMiniSudoku(square) {
	let plane = [].concat(...square)
	return new Set(plane).size === 9 && plane.every(n=>n<=9 && n>=1)
}


const flatArray = arr =>
  arr.reduce((result, inner) => result.concat(inner), []);

const isMiniSudoku = square =>
  flatArray(square)
    .sort()
    .join('') === '123456789';

isMiniSudoku(
    [[1, 3, 2], 
    [9, 7, 8], 
    [4, 5, 6]]);
isMiniSudoku(
    [[1, 1, 3], 
    [6, 5, 4], 
    [8, 7, 9]]);
isMiniSudoku(
    [[0, 1, 2], 
    [6, 4, 5], 
    [9, 8, 7]]);
isMiniSudoku(
    [[8, 9, 2], 
    [5, 6, 1], 
    [3, 7, 4]]);
isMiniSudoku(
    [[2, 3, 4], 
    [6, 7, 7], 
    [8, 9, 1]]);
isMiniSudoku(
    [[6, 5, 9], 
    [4, 3, 8], 
    [2, 1, 7]]);
isMiniSudoku(
    [[4, 3, 5], 
    [8, 1, 2], 
    [9, 6, 7]]);
isMiniSudoku(
    [[4, 3, 5], 
    [8, 6, 2], 
    [9, 6, 7]]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 261

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.


function arrayOfMultiples (num, length) {
	let x = num;
	const a = [x];
	
	for (let i = 1; i < length; i++) {
		x += num;
		a.push(x);
	}
	return a;
}


const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}


arrayOfMultiples(7, 5);
arrayOfMultiples(12, 10);
arrayOfMultiples(17, 7);
arrayOfMultiples(630, 14);
arrayOfMultiples(140, 3);
arrayOfMultiples(7, 8);
arrayOfMultiples(11, 21);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 261

// Write a function to return the city from each of these vacation spots.



function grabCity(str) {
	const kek = str.split("[")
	return kek.pop().slice(0, -1);
}


function grabCity(str) {
	return str.slice(str.lastIndexOf('[') + 1, str.lastIndexOf(']'))
}



function grabCity(str) {
	return str.match(/\[([\w\s]+)]$/)[1];
}


grabCity("[Last Day!] Beer Festival [Munich]");
grabCity("Cheese Factory Tour [Portland]");
grabCity("[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]");
grabCity("[5 Stars] Traditional Gondola Experience [Venice]");
grabCity("[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]");
grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]");



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 262

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.


function mapping(letters) {
	let y = letters.reduce((acc, elem) => {
  acc[elem] = elem.toUpperCase();
  return acc;
}, {})
	return y;
}


function mapping(letters) {
	return letters.reduce((a, c) => (a[c] = c.toUpperCase(), a), {});
}


mapping(["a", "b", "c"]);
mapping(["p", "s", "t"]);
mapping(["a", "v", "y", "z"]);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 263

// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.


function freeShipping(order) {
	return Object.values(order).reduce((x, i) => x + i) > 50;
}


function freeShipping(order) {
	return Object.keys(order).reduce((t, c) => t + order[c], 0) > 50
}



freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99});
freeShipping({'Flatscreen TV': 399.99});
freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99});
freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00});
freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20.00});




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 264

// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.


function solveForExp(a, b) {
	return Math.round(Math.log(b) / Math.log(a));
}


solveForExp(4, 1024);
solveForExp(2, 1024);
solveForExp(9, 3486784401);
solveForExp(4, 4294967296);
solveForExp(8, 134217728);
solveForExp(19, 47045881);
solveForExp(10, 100000000);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 265

// Write a function that returns the first n vowels of a string.

// Return "invalid" if the n exceeds the number of vowels in a string.
// Vowels are: a, e, i, o, u



function firstNVowels(s, n) {
	const x = s.match(/[aeiou]/gi).join('').slice(0, n);
	return n > x.length ? 'invalid' : x;
}


firstNVowels("sharpening skills", 3);
firstNVowels("major league", 5);
firstNVowels("crabby patty", 2);
firstNVowels("shrimp", 1);
firstNVowels("shrimpy", 2);
firstNVowels("hostess", 5);


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 266

// Create a function that concatenates n input arrays, where n is variable.


function concat(...args) {
	return args.flat();
}


function concat(...args) {
	return [].concat(...args)
}


const concat = (...args) =>
  args.reduce((result, arr) => result.concat(arr), []);


concat([1, 2, 3], [4, 5], [6, 7]);
concat([1], [2], [3], [4], [5], [6], [7]);
concat([1, 2], [3, 4]);
concat([4, 4, 4, 4, 4]);
concat(['a'], ['b', 'c']);




// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 266

// Write a function that changes every letter to the next letter:

// "a" becomes "b"
// "b" becomes "c"
// "d" becomes "e"
// and so on ...


function move(word) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	return word.split("").map(x => alphabet[alphabet.indexOf(x) + 1]).join("");
}


function move(word) {
	return [...word].map(a => String.fromCharCode(a.charCodeAt(0)+1)).join('');
}


move("hello");
move("lol");
move("bye");





// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 267

// Create a function that converts dates from one of five string formats:

// "January 9, 2019" (MM D, YYYY)
// "Jan 9, 2019" (MM D, YYYY)
// "01/09/2019" (MM/DD/YYYY)
// "01-09-2019" (MM-DD-YYYY)
// "01.09.2019" (MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:



function convertDate(date) {
	const a = new Date(date);
	return [a.getMonth() + 1, a.getDate(), a.getFullYear()]
}



convertDate("January 9, 2019");
convertDate("Jan 9, 2019");
convertDate("01/09/2019");
convertDate("01-09-2019");
convertDate("01.09.2019");
convertDate("March 3, 1901");
convertDate("Mar 3, 1901");
convertDate("03/03/1901");
convertDate("03-03-1901");
convertDate("03.03.1901");
convertDate("August 8, 1666");
convertDate("Nov 13, 1533");
convertDate("04/15/1789");
convertDate("12-23-1111");
convertDate("02.28.1832");


// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 268

// Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.


function letterCheck(arr) {
	return [...arr[1].toLowerCase()].every(x => [...arr[0].toLowerCase()].indexOf(x) !== -1);
}


letterCheck = a => 
	a[1].split``.every(v => ~a[0].toLowerCase().indexOf(v))


letterCheck(["trances", "nectar"]);
letterCheck(["THE EYES", "they see"]);
letterCheck(["assert", "staring"]);
letterCheck(["arches", "later"]);
letterCheck(["dale", "caller"]);
letterCheck(["parses", "parsecs"]);
letterCheck(["replays", "adam"]);
letterCheck(["mastering", "streaming"]);
letterCheck(["drapes", "compadres"]);
letterCheck(["deltas", "slated"]);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 269

// The digit distance between two numbers is the absolute value of the difference of each digit.



function digitDistance(num1, num2) {
	const a = [];
	for (let i = 0; i < num1.toString().length; i++) {
		a.push(Math.abs(num1.toString()[i] - num2.toString()[i]));
	}
	return a.reduce((x, i) => x + i);
}


function digitDistance(num1, num2) {
  var num1Arr =  String(num1).split('')
  var num2Arr =  String(num2).split('')
	
	return num1Arr.map((val,index,arr) => Math.abs(arr[index] - num2Arr[index])).reduce((a,b) => a + b)
}


digitDistance(121, 599);
digitDistance(12, 12);
digitDistance(10, 20);
digitDistance(12345678, 23456789);
digitDistance(5555, 6666);
digitDistance(105, 777);



// ***************************************************************************
console.log('**************************************************************');
// ***************************************************************************

/////////////////////////////////
// CODING CHALLENGE 270

// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.



function isEqual(objOne, objTwo) {
	return JSON.stringify(objOne) === JSON.stringify(objTwo)
}

