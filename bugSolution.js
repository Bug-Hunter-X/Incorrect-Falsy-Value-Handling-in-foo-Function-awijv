function foo(a, b) {
  // Check if either a or b is falsy.  Use a more comprehensive check if needed to suit specific use case.
  if (!a || !b) {
    // Handle falsy values.  Decide on the appropriate behavior for your use case. 
    // For example, you might return 0, throw an error, use default values etc.
    return 0; 
  }
  return a + b;
}
// Example demonstrating the correct handling:
console.log(foo(null, 5)); // Output: 0
console.log(foo(0, 5)); // Output: 0
console.log(foo(5, "")); // Output: 0
console.log(foo(5, 5)); // Output: 10