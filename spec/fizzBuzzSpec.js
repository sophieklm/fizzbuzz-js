describe("fizzBuzz", function() {

  it("returns fizz when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it('returns buzz when passed 5', function() {
    expect(fizzBuzz(5)).toEqual('buzz');
  });
});
