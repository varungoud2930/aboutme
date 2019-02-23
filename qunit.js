function tempConverter(number) {
  valNum = parseFloat(number);
  fToC = (number - 32) / 1.8;
  return fToC;
  //document.getElementById("celsius").innerHTML = (number-32) / 1.8;
}
//Added QUnit Test
QUnit.test("tempConverter", function(assert) {
  assert.equal(tempConverter(32), 0, "32 degrees F* == 0 degrees C*");
  assert.equal(tempConverter(122), 50, "122 degrees F* == 50 degrees C*");
  assert.equal(tempConverter(77), 25, "77 degrees F* == 25 degrees C*");
  assert.equal(tempConverter(54.5), 12.5, "54.5 degrees F* == 12.5 degrees C*");
  assert.equal(tempConverter(10.4), -12, "10.4 degrees F* == -12 degrees C*");
  
});