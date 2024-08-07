function task(number) {
  console.log(`-----task ${number}------`);
}

const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

const result = transactions.filter((transaction) => {
  if (transaction[0] == "income") {
    return true;
  }
});

task(1);
console.log(result);

//Create a new array containing only the expense transactions.
//Output 2) [["expense", 500], ["expense", 300]]
const result1 = transactions.filter((transaction) => {
  if (transaction[0] == "expense") {
    return true;
  }
});
task(2);
console.log(result1);

//Calculate the total income and return it.
//   Output 3) 3200

let sum = 0;
const result2 = transactions.forEach((num) => {
  if (num[0] == "income") {
    sum = num[1] + sum;
    return sum;
  }
});
task(3);
console.log(sum);

let sum2 = 0;
const result3 = transactions.forEach((num) => {
  if (num[0] == "expense") {
    sum2 = num[1] + sum2;
    return sum2;
  }
});
task(4);
console.log(sum2);

//Calculate the net total (total income - total expenses) and return it.
let sum3 = 0;
const result4 = transactions.forEach((num) => {
  if (num[0] == "income") {
    sum3 = num[1] + sum3;
  } else {
    sum3 = sum3 - num[1];
  }
});
task(5);
console.log(sum3);
const result5 = transactions.filter((trans) => {
  if (trans[1] > 500) {
    return true;
  }
});
console.log(result5);
