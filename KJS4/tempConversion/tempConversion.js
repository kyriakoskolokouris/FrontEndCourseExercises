const ftoc = function(fahrenheit) {
    let celsius = Math.round((( fahrenheit - 32 ) * 5/9) * 10) / 10;
    return celsius;
}

const ctof = function(celsius) {
    let fahrenheit = Math.round(((celsius * 9/5) + 32) * 10) / 10;
    return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}


// const ftoc = function(fahrenheit) {
//   let celsius;
//   celsius = (fahrenheit - 32) * 5/9;
//   celsius = Math.round(celsius * 10) / 10
//   return celsius;
// }

//   const ctof = function(celsius) {
//   let fahrenheit;
//   fahrenheit = (celsius * 9/5) + 32
//   fahrenheit = Math.round(fahrenheit * 10) / 10
//   return fahrenheit;
//   }
