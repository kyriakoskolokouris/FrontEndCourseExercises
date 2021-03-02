const {a, b, c, d, e} = require("./math");

if(a === 9) {
	console.log("'a' is correct!")
} else {
	console.log(`'a' is incorrect, got ${a}, expected 9`)
}
console.log("\n");

if(b === 66) {
	console.log("'b' is correct!")
} else {
	console.log(`'b' is incorrect, got ${b}, expected 66`)
}
console.log("\n");

if(c === 1) {
	console.log("'c' is correct!")
} else {
	console.log(`'c' is incorrect, got ${c}, expected 1`)
}
console.log("\n");

if(d === -8) {
	console.log("'d' is correct!")
} else {
	console.log(`'d' is incorrect, got ${d}, expected -8`)
}
console.log("\n");

if(e === 68) {
	console.log("'e' is correct!")
	console.log("\n Congrats! You've solved them all, you may move onto the next lesson")
} else {
	console.log(`'e' is incorrect, got ${e}, expected 68`)
}