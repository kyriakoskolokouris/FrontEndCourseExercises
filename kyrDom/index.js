
const paragraphOne = document.createElement('p');
document.body.append(paragraphOne)
paragraphOne.textContent = 'Hey I’m red!';
paragraphOne.style.color = 'red';

// Create <h3> with blue text that says "I’m a blue h3!"
const h3 = document.createElement('h3');
document.body.append(h3)
h3.textContent = 'I’m a blue h3!';
h3.style.color = 'blue'
// -------------------------------------------------------------------------------
// // Create a <div>  black border, pink background color incl. the following elements 
const div = document.createElement('div');
document.body.append(div)
div.style.backgroundColor = "pink";
div.style.border = "black 1px solid";
// another <h1> that says "I’m in a div"
const h1 = document.createElement('h1')
h1.textContent = 'I’m in a div';
div.append(h1);
// a <p> that says "ME TOO!"
const paragraphTwo = document.createElement('p')
 paragraphTwo.textContent= 'ME TOO!';
div.append(paragraphTwo);