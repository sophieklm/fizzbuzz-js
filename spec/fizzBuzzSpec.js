describe("fizzBuzz", function() {

  it("returns fizz when passed number divisible by 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it('returns buzz when passed number divisible by 5', function() {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  it('returns fizzbuzz when passed number divisible by 15', function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('returns the given number when not divisble by 3 or 5', function() {
    expect(fizzBuzz(4)).toEqual(4);
  });

});
