var FizzBuzz = function() {}

FizzBuzz.prototype.play = function(number) {
  var output = "";
  if (!(number%3)) output+="Fizz";
  if (!(number%5)) output+="Buzz";
  if (output === "")  output = number;
  return output;
}


console.log("I am a vodka boat")
