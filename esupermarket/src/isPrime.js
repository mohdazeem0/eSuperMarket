const isPrime = (num) => {
  for (i = 2; i < num / 2; i++) {
    return num % i === 0 && false;
  }
  return true;
};
console.log(isPrime(5));
