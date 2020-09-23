function gmatrix(m, n) {
  var r = [];
  for(var i = 0; i < m; ++i) {
  	const row = [];
  	for(var j = 0; j < n; ++j) {
  	  row.push(Math.random());
    }
    r.push(row);
  }
  return r;
}

const a = gmatrix(100, 500);
const b = gmatrix(500, 100);

function multiply(left, right) {
   const m = left.length;
   const n = right.length;
   const l = right[0].length;

   const r = [];
   for(var i = 0; i < m; ++i) {
     const row = [];
     for(var j = 0; j < l; ++j) {
       let t = 0;
       for(var k = 0; k < n; ++k) {
         t += left[i][k] * right[k][j];
       }
       row.push(t);
     }
     r.push(row);
   }
   return r;
}

bec = new Date().getTime();

for (var i = 0; i < 1000; ++i) {
  multiply(a, b)
}

console.log('花费时间(毫秒) ' + ((new Date()).getTime() - bec));
