function findrowwithmaxone(matrix){
  let maxrow =-1;
  let maxcount=0;
  let rowcount =matrix.length;
  let colcount = matrix[0].length;

  for(let i=0; i< rowcount; i++) {
    let count =0;
    for(let j=0; j< colcount; j++) {
      if(matrix[i][j] === 1) {
        count++;
      }

  }
   if(count > maxCount) {
    maxcount = count;
    maxrow =i;
   }
}

return maxrow;

let matrix 