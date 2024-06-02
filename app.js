function simpleCalculator(n1, n2, sign) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return `unknown value`;
  } else {
    if (sign == "+") {
      return n1 + n2;
    }
    if (sign == "-") {
      return n1 - n2;
    }
    if (sign == "*") {
      return n1 * n2;
    }
    if (sign == "/" && n2 != 0) {
      return n1 / n2;
    }

    return `unknown value`;
  }
}

console.log(simpleCalculator(1, 2, "+"));
console.log(simpleCalculator(1, 2, "&"));
console.log(simpleCalculator(1, "k", "*"));
console.log(simpleCalculator(5, 3, "*"));
console.log(simpleCalculator(5, 0, "/"));