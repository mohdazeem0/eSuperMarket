const RemoveDuplicateFromString = (str) => {
  const arrStr = str.split(" ");
  const uniqueArr = [...new set(arrStr)];
  return uniqueArr.join(" ");
};
console.log(
  RemoveDuplicateFromString(
    "Iam good good good person person I live live in Nanded Nanded"
  )
);
