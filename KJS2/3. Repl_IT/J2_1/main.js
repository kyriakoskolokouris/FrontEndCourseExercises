/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	// Edit between these lines
	// =================================
	return a + b;
	console.log(return);
}

console.log(return);
module.exports = troubleshooting;

// I get it, you're curious, 
// but it's OK if you don't understand what's going on in here, you'll learn it in time.

const abTroubleshoot = require("./troubleshooting");

const result = abTroubleshoot();

if(result === 2) {
	console.log("Congrats! You got the correct answer");
} else if(typeof result === 'number') {
	console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
	console.log(`You returned string "${result}", the result should be the number 2`);
}