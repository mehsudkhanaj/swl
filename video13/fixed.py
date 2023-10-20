def bisect(x):
    return x**3-5*x-9
def bisection(x0,x1,e):
    step = 1
    condition = True
    while condition:
        x2 = (x0 + x1)/2
        print('Iteration-%d, x2 = %0.6f and bisect(x2) = %0.6f' % (step, x2, bisect(x2)))

        if bisect(x0) * bisect(x2) < 0:
            x1 = x2
        else:
            x0 = x2
        
        step = step + 1
        condition = abs(bisect(x2)) > e

    print('\nRequired Root is : %0.8f' % x2)

x0 = input('First Guess: ')
x1 = input('Second Guess: ')
e = input('Tolerable Error: ')

x0 = float(x0)
x1 = float(x1)
e = float(e)



if bisect(x0) * bisect(x1) > 0.0:
    print('Given guess values do not bracket the root.')
    print('Try Again with different guess values.')
else:
    bisection(x0,x1,e)
