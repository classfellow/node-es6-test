//// matrix.cpp : Defines the entry point for the console application.
////
//
#include "stdafx.h"

/*
  Name: 
  Copyright: 
  Author: 
  Date: 
  Description: 跳台阶问题（递归）
题目：一个台阶总共有n级，如果一次可以跳3级，也可以跳5级,求总共有多少跳法
*/

using namespace std;
// 总共台阶数目
int n_;
// 工作数组
int *x_ = NULL;
// 记录总体数目
int v_ = 0;

void cfun(int t){
  int sum = 0;
  for(int i = 1; i < t; ++i)
    sum += x_[i];
  if(sum >= n_){
    if(sum == n_){
      ++v_;
    }else
      return;
  }else{
    for(int i = 1;i <= 2; ++i){
      if(1 == i)
        x_[t] = 3;
      else
        x_[t] = 5;
      cfun(t+1);
    }
  }
}

int _tmain(int argc, _TCHAR* argv[]) {
  cout<<"N=";
  cin>>n_;
  DWORD bef = timeGetTime();
  x_ = new int[n_+1];
  cfun(1);
  printf("花费时间 %d\n", timeGetTime() - bef);
  cout<<v_<<"种"<<endl;
  system("pause");
  return 0;
}