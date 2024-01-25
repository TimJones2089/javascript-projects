

function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++){
        line += '#';
    }
    return line;
}
// console.log(makeLine(6));

function makeSquare(size){
    square = '';
    for (let i = 0; i < size; i++){
        square += `\n ${makeLine(size)}`;
    }
    return square;
}
// console.log(makeSquare(5));

function makeRectangle(width, height){
    let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}
// console.log(makeRectangle(20,3));

function makeDownStairs(height){
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
}
// console.log(makeDownStairs(7));

function makeSpaceLine(numSpace, numChar){
    let space = '';
    let charCount = '';
    
    for (let i = 0; i < numChar; i++){
      charCount = makeLine(numChar);
    } for (let j = 0; j < numSpace; j++) {
      space += " ";
    }
    return space + charCount + space;
}
// console.log(makeSpaceLine(10,5));

function makeIsoscelesTriangle(height){
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}
// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
  let diamond = '';
  for (let i = 0; i < height; i++){
    diamond = makeIsoscelesTriangle(height) + `\n${makeIsoscelesTriangle(height).split('').reverse().join('')}`;
  }
  return diamond;
}
console.log(makeDiamond(3));
