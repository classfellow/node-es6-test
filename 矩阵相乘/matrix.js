'use strict';

function gmatrix(m, n){
  let r = [];
  for(let i = 0; i < m; ++i) {
  	let row = [];
  	for(let j = 0; j < n; ++j){
  	  row.push(Math.random());
    }
    r.push(row);
  }
  return r;
}

let bec = new Date().getTime();

let a = gmatrix(100, 5000);
let b = gmatrix(5000, 100);

// let a = [[1,2,3],[4,5,6],[7,8,9]];
// let b = [[3, 4, 5], [6, 7, 8], [9, 10, 11]];

function multiply(left, right){
   const m = left.length;
   const n = right.length;
   const l = right[0].length;
   let r = [];
   for(let i = 0; i < m; ++i){
     let row = [];
     for(let j = 0; j < l; ++j){
       let t = 0;
       for(let k = 0; k < n; ++k){
         t += left[i][k] * right[k][j];
       }
       row.push(t);
     }
     r.push(row);
   }
   return r;
}

let r = multiply(a, b);

console.log('花费时间(毫秒) ' + ((new Date()).getTime() - bec));