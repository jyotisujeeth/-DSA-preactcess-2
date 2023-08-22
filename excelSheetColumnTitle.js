/*
Given an integer column number, return its corresponding column title as it appears in an Excel sheet.
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
Input: columnNumber = 1
Output: "A"
  */
var convertToTitle = function(n) {
    if (n == 0) return null;
    let result = '';
    while (n > 0) {
        let r = n % 26;
        let d = parseInt(n / 26);
        if (r == 0) {
            r = 26;
            d = d - 1;
        }
        result += String.fromCharCode (64 + r);
        n = d;
    }
    return result.split('').reverse().join("");
};
