

const values = require("./follow");
let errored = false;

console.log("\n---------------------------------\n\n")

if(values.testGroup === "a") {
	if(values.birthYear !== 1948) {
		console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
		errored = true;
	}
	
	if(values.thisYear !== 1965) {
		console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
		errored = true;
	}
	
	if(values.firstName !== "Carlos") {
		console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
		errored = true;
	}
	
	if(values.lastName !== "Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
		errored = true;
	}
	
	if(values.greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
		console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
		errored = true;
	}
}

if(values.testGroup === "b") {
	if(values.birthYear !== 1948) {
		console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
		errored = true;
	}
	
	if(values.thisYear !== 1965) {
		console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
		errored = true;
	}
	
	if(values.firstName !== "Carlos") {
		console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
		errored = true;
	}
	
	if(values.lastName !== "Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
		errored = true;
	}

	if(values.age !== 17) {
		console.error(`lastName is incorrect, it's currently: "${values.age}"`);
		errored = true;
	}

	if(values.fullName !== "Carlos Stevenson") {
		console.error(`lastName is incorrect, it's currently: "${values.fullName}"`);
		errored = true;
	}
	
	if(values.greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
		console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
		errored = true;
	}
}

if(!errored && values.testGroup === "a") {
	console.log("Congrats! Move onto the next step!");
} else if (errored && values.testGroup === "a") {
	console.log("Try again")
}

if(!errored && values.testGroup === "b") {
	console.log("Congrats! Move onto the next lesson!");
} else if (errored) {
	console.log("Try again")
}

console.log("\n---------------------------------\n\n")