function multiply_2(...a) {
  let multiply_3 = 1;
  a.forEach((element) => (multiply_3 *= element));
  return multiply_3;
}
console.log(multiply_2(5));
console.log(multiply_2(5, 3));
console.log(multiply_2(5, 3, 2));
