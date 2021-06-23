// Take each city with their corresponding farenheit temperature
// convert the temp to celcius
// if <20 cold
// if >20 and <30 moderate
// if >30 hot
// print out all of the cities by temp rating

var input = "Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0"
;
var result = input.split(/[|*]/);
var coldArray = [];
var moderateArray = [];
var hotArray = [];

for (i=0;i<result.length;i++){
  if ((result[i] - 32)*(5/9) < 20) {
    coldArray.push(" " + result[i-1]);
    
  }
  if (((result[i] - 32)*(5/9) > 20) && ((result[i] - 32)*(5/9) < 30)) {
    moderateArray.push(" " + result[i-1]);
  }
  if ((result[i] - 32)*(5/9) > 30) {
    hotArray.push(" " + result[i-1]);
  }
}

console.log("Cold Cities: " + coldArray);
console.log("Moderate Cities: " + moderateArray);
console.log("Hot Cities: " + hotArray);