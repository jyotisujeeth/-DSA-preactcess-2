                       
function areBracketsBalanced(s) {
let i = -1;
	let stack = [];
	for (let ch of s) {
		if (ch === '(' || ch === '{' || ch === '[') {
			stack.push(ch);
			i++;
		} else {
			if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
				stack.pop();
				i--;
                return "Not Balanced";
			} else {
				return "Not Balanced";
			}
		}
	}
	return i === -1;
}

let expr = "]{{}}[[()()]][";

// Function call
console.log (areBracketsBalanced(expr))
	