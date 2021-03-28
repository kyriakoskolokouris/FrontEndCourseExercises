const repeatString = function(string, times) {
    if (times <0 ) {
        return "ERROR";
       } 
   let repeatedString = "" ;
   while (times > 0) {
       repeatedString += string;
       times--;
   }
   return repeatedString;
} 

module.exports = repeatString
