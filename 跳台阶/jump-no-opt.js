'use strict';

var N = 123;
var x_ = new Array(N + 1);
var v_ = 0;

function cfun(t){
  let sum = 0;
  var i;
  for(i = 1; i < t; ++i){
    sum += x_[i];
  }
  if(sum >= N){
    if(sum == N){
      ++v_;
  }else
    return;
  }else{
    for(i = 1; i <= 2; ++i){
      if(1 == i)
        x_[t] = 3;
      else
        x_[t] = 5;
      cfun(t + 1);
    }
  }
}

var bec = new Date().getTime();
cfun(1);
console.log('花费时间(毫秒) ' + ((new Date()).getTime() - bec));
console.log(v_ + '种');
