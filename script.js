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