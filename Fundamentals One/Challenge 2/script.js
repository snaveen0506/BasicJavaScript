/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!"*/

const massMark = 78;
const heightMark = 1.69;
const MarkBMI = massMark / (heightMark * heightMark);

const massJohn = 92;
const heightJohn = 1.95;
const JohnBMI = massJohn / (heightJohn * heightJohn);

if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI ${MarkBMI} is higher than John's ${JohnBMI}!`);
} else {
  console.log(`John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}!`);
}
