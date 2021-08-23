// console.log([..."how are you"].reverse().join(" "));

//Conditionals

const revStr = (str) => {
  const arrStr = str.split(" ");
  const newArr = [];
  for (i = arrStr.length - 1; i >= 0; i--) {
    newArr.push(arrStr[i]);
  }
  return newArr.join(" ");
};
console.log(revStr("IAM  LEGEND"));
