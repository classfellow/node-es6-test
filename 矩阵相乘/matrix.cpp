// VS C++ 2019

#include <Windows.h>
#include <math.h>
#include <stdlib.h>
#include <iostream>

#pragma comment( lib,"winmm.lib" )

double** gmatrix(int m, int n, bool init = true) {
    double** r = new double* [m];
    for (int i = 0; i < m; ++i) {
        r[i] = new double[n];
    }
    if (!init) return r;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            r[i][j] = rand() / (double)(RAND_MAX);
        }
    }
    return r;
}

double** matrix_mul(double** left, double** right, int m, int n, int l) {
    double** r = gmatrix(m, l);
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < l; ++j) {
            double t = 0.0;
            for (int k = 0; k < n; ++k) {
                t += (left[i][k] * right[k][j]);
            }
            r[i][j] = t;
        }
    }
    return  r;
}

void freemem(double** d, int m) {
    for (int i = 0; i < m; ++i) {
        delete[] d[i];
    }
    delete[] d;
}

int main() {
    int m, n, l;
    m = 100;
    n = 500;
    l = 100;
    double** left = gmatrix(m, n);
    double** right = gmatrix(n, l);
    DWORD bef = timeGetTime();
    for (int i = 0; i < 1000; ++i) {
        double** r = matrix_mul(left, right, m, n, l);
        freemem(r, m);
    }
    freemem(left, m);
    freemem(right, n);
    printf("%d\n", timeGetTime() - bef);
    system("pause");
    return 0;
}
