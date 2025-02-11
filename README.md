# Incorrect Falsy Value Handling in JavaScript Function

This repository demonstrates a common error in JavaScript: incorrect handling of falsy values. The `foo` function intends to add two numbers, but it incorrectly handles falsy values such as `0` or an empty string. This leads to unexpected behavior.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version. 

## Bug

The original function only explicitly checks for `null` values. It fails to handle cases where the parameters are `0`, `""`, `false`, `undefined`, or `NaN`.  Depending on the desired functionality, all falsy values should be handled appropriately.

## Solution

The solution demonstrates how to check for falsy values using a more robust method or provides alternative logic to account for the intended behavior with falsy inputs. 