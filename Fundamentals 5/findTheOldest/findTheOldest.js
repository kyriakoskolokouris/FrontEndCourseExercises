let findTheOldest = function(arr) {
    arr.sort((a, b) => {
        return a.yearOfBirth - b.yearOfBirth;
    });
     return arr[0];
}



module.exports = findTheOldest

