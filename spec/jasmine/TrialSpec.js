describe('fizzBuzz', function() {

  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz')
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz')
    });
  });

  describe('multiples of 5', function() {
    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz')
    });

    it('buzzes for 10', function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz')
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
    });

    it('fizzbuzzes for 10', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz')
    });
  });

  describe('not multiples of 3 and 5', function() {
    it('numbers for 4', function() {
      expect(fizzBuzz.play(4)).toEqual(4)
    });

    it('numbers for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11)
    });
  });
});
