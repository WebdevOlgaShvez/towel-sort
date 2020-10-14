
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!matrix) return [];

  for (let i = 0; i < matrix.length; i++){
    if(i%2 !==0) matrix[i].reverse();
  }
  let myNewArray = [];
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j <  matrix[i].length; ++j)
    myNewArray.push(matrix[i][j]);
  }
  
  return myNewArray;
}
