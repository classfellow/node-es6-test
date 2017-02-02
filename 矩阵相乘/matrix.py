# encoding: utf-8
from random import  *
from  time  import  *

bef = int(time()*1000)

def gmatrix(m, n):
  r = []
  for i in range(m):
    row = []
    for j in range(n):
      row.append(random())
    r.append(row)
  return r

def multiply():
  left = gmatrix(100, 5000)
  right = gmatrix(5000, 100)
  m = len(left)
  n = len(right)
  l = len(right[0])
  r = []
  for i in range(m):
    row = []
    for j in range(l):
      t = 0
      for k in range(n):
        t += (left[i][k] * right[k][j])
      row.append(t)
    r.append(row)
  return r

r = multiply()
print(u'花费时间 ' + str(int(time()*1000) - bef))