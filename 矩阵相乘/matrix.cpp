//// matrix.cpp : Defines the entry point for the console application.
////
//
#include "stdafx.h"

double ** gmatrix(int m, int n, bool init = true) {
  double ** r = new double*[m];
  for(int i = 0; i < m; ++i){
    r[i] = new double[n];
  }
  if(!init) return r;
  for(int i = 0; i < m; ++i){
    for(int j = 0; j < n; ++j){
      r[i][j] = rand()/(double)(RAND_MAX);
    }
  }
  return r;
}

double ** matrix_mul(double ** left, double ** right, int m, int n, int l){
  double ** r = gmatrix(m, l);
  for(int i = 0; i < m; ++i){
    for(int j = 0; j < l; ++j) {
      double t = 0.0;
      for(int k = 0; k < n; ++k){
        t += (left[i][k] * right[k][j]);
      }
      r[i][j] = t;
    }
  }
  return  r;
}

void freemem(double **d, int m) {
  for(int i = 0; i < m; ++i){
    delete[] d[i];
  }
  delete[] d;
}

int _tmain(int argc, _TCHAR* argv[]) {
  DWORD bef = timeGetTime();
  int m,n,l;
  m = 100;
  n = 5000;
  l = 100;
  double ** left = gmatrix(m, n);
  double ** right = gmatrix(n, l);
  double ** r = matrix_mul(left, right, m, n, l);
  freemem(left, m);
  freemem(right, n);
  freemem(r, m);
  printf("%d\n", timeGetTime() - bef);
  system("pause");
	return 0;
}
