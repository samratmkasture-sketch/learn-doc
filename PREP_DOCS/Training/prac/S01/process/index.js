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
  let total = 1;
  inArr.forEach((val) => {
    if (val) {
      total *= parseInt(val);
    }
  });
  return total;
};

const cmdArg = process.argv;
const operator = cmdArg[2];
const operand = cmdArg.slice(3);
console.log(operator);

if (operator == "+") {
  console.log(`Result : `, add(operand));
} else {
  console.log(`Result : `, mul(operand));
}
