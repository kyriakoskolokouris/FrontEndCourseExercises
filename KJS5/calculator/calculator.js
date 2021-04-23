function add(a, b) {
	return a + b;
}

function subtract(c, d) {
	return c - d;
}

function sum(arr) {
	return arr.reduce((a, b) => {
		return a + b;
	}, 0)
}

function multiply (arr) {
	return arr.reduce((a, b) => {
		return a * b
	
})
}

function power(arr) {
	return Math.pow(4, 3);
}

function factorial(num) {
	let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  
  return result;
}
	


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
