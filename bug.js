function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is incorrect if you want to handle other falsy values like 0 or "" 
  }
  return a + b;
}