# encoding: utf-8
from random import  *
from  time  import  *

bef = int(time()*1000)
N = 123
x_ = [0 for i in range(N + 1)]
v_ = 0

def cfun(t):
  global x_
  global v_
  sum = 0
  i = 1
  while i < t:
    sum = sum + x_[i]
    i += 1
  if sum >= N:
    if sum == N:
      v_ += 1
    else:
      return
  else:
    i = 1
    while i <= 2:
      if i == 1:
        x_[t] = 3
      else:
        x_[t] = 5
      cfun(t + 1)
      i += 1
  return

cfun(1)
print(u'花费时间 ' + str(int(time()*1000) - bef))
print(v_)


#python jump.py