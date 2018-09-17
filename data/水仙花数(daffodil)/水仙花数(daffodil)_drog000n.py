#!/usr/bin/env python

if __name__ == "__main__":
    
    for i in range(100,1000):
        a = i % 10
        b = (i / 10) % 10
        c = (i / 100) % 10
        if i == pow(a,3) + pow(b,3) + pow(c,3):
            print i