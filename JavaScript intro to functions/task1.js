function areaOfRectangleDeclaration(width, height) {
  return width * height;
}

const areaOfRectangleExpression = function(width, height) {
  return width * height;
};

const areaOfRectangleArrow = (width, height) => width * height;

console.log(areaOfRectangleDeclaration(8, 8));
console.log(areaOfRectangleExpression(3, 4));
console.log(areaOfRectangleArrow(9, 9));