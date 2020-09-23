# encoding: utf-8

from random import  *
from  time  import  *

bef = 0

def gmatrix(m, n):
  r = []
  for i in range(m):
    row = []
    for j in range(n):
      row.append(random())
    r.append(row)
  return r

left = gmatrix(100, 500)
right = gmatrix(500, 100)

def multiply():
  global left
  global right
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

def loop1000():
  i = 0
  global bef
  bef = int(time()*1000)
  while i < 1000:
    r = multiply()
    i += 1

loop1000()

print(str(int(time()*1000) - bef))
