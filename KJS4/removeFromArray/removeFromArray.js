const removeFromArray = function(array, ...theRest) {

    let myArray=[];

    for (let i = 0; i <array.length; i++) {

        if ( array[i]!==theRest[0] &&
             array[i]!==theRest[1] && 
             array[i]!==theRest[2] && 
             array[i]!==theRest[3] &&
             array[i]!==theRest[4]) {

            myArray.push(array[i]);
        }
    }
    return myArray;
}

module.exports = removeFromArray
