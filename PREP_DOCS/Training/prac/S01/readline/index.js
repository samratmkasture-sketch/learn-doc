const { stdin: input, stdout: output } = require("node:process");
const readline = require("node:readline");

const rl = readline.createInterface({ input, output });

const add = (inArr) => {
  let total = 0;
  inArr.forEach((val) => {
    if (val) {
      total += parseInt(val);
    }
  });
  return total;
};
const mul = (inArr) => {
  return inArr.reduce((acc, current) => {
    return current ? (acc *= parseInt(current)) : acc;
  }, 1);
};

function math() {
  rl.question(
    `
    Please provide operator and input
    e.g + n1 n2
    `,
    (resData) => {
      let inData = resData.split(" ");
      let operator = inData[0];
      let operand = inData.slice(1);
      if (operator == "+") {
        console.log("Result: ", add(operand));
      } else {
        console.log("Result: ", mul(operand));
      }
      math();
    }
  );
}
math();
