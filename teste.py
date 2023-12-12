def foo(x, y):
    if x == 0:
        return 1
    xx = x - 1
    yy = y + 1
    return yy * 2 + foo(xx, yy)
    
print(foo(2, 3))