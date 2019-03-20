// Mark and John are trying to compare their BMI

// 1. Store their mass and height in variables.

var hMark = 174;
var mMark = 74;

var hJohn = 184;
var mJohn = 93;

console.log(mMark);
console.log(mJohn);

// 2. Calculcate both their BMIs.

var bmiMark = mMark / (hMark * 2);
var bmiJohn = mJohn / (hJohn * 2);

console.log(bmiMark);
console.log(bmiJohn);

// 3. Create a boolean variable containing 
// information about whether Mark has a higer BMI than John.

var bmi = bmiMark > bmiJohn;

console.log(bmi);

// 4. Print a string to the console containing the
// variable from step 3.

console.log("Is Mark's BMI higher than John's? " + bmi);