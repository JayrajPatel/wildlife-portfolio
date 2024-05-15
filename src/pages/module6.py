import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import newton

# Define the functions
f1 = lambda x: x**3 - x**2 + 2*x - 2
f2 = lambda x: 2*x**4 + 6*x**2 + 8
f3 = lambda x: -2 + 6.2*x - 4*x**2 + 0.7*x**3
f4 = lambda x: x**4 - 2*x**3 + 6*x**2 - 2*x + 5

# Muller's method
def mullers_method(f, x0, x1, x2, tol=1e-6, max_iter=100):
    x = [x0, x1, x2]
    iter_count = 0
    while True:
        iter_count += 1
        h1 = x[1] - x[0]
        h2 = x[2] - x[1]
        delta1 = (f(x[1]) - f(x[0])) / h1
        delta2 = (f(x[2]) - f(x[1])) / h2
        d = (delta2 - delta1) / (h2 + h1)
        b = delta2 + h2 * d
        D = np.sqrt(b**2 - 4*f(x[2])*d)
        if np.abs(b - D) < np.abs(b + D):
            E = b + D
        else:
            E = b - D
        h = -2 * f(x[2]) / E
        p = x[2] + h
        if np.abs(h) < tol or iter_count >= max_iter:
            break
        x = x[1], x[2], p
    return p, iter_count

# Bairstow's method
def bairstows_method(coefficients, r, s, tol=1e-6, max_iter=100):
    n = len(coefficients)
    g = np.array(coefficients)
    h = np.zeros_like(g)
    iter_count = 0
    while n >= 3 and iter_count < max_iter:
        iter_count += 1
        b = np.zeros(n)
        c = np.zeros(n)
        b[n-1] = g[n-1]
        b[n-2] = g[n-2] + r*b[n-1]
        c[n-1] = b[n-1]
        c[n-2] = b[n-2] + r*c[n-1]
        for i in range(n-3, -1, -1):
            b[i] = g[i] + r*b[i+1] + s*b[i+2]
            c[i] = b[i] + r*c[i+1] + s*c[i+2]
        det = c[2]*c[2] - c[3]*c[1]
        dr = (-b[1]*c[2] + b[0]*c[3]) / det
        ds = (-b[0]*c[2] + b[1]*c[1]) / det
        r += dr
        s += ds
        if np.abs(dr) < tol and np.abs(ds) < tol:
            roots = np.roots([1, -r, -s])
            g = g[:n-2]
            n -= 2
    if n == 2:
        roots = np.roots([1, -r, -s])
    elif n == 1:
        roots = [-g[0] / g[1]]
    else:
        roots = []
    return roots, iter_count

# Plot the functions
def solve_polynomial(f, title):
    x = np.linspace(-5, 5, 1000)
    y = f(x)
    plt.figure(figsize=(10, 6))
    plt.plot(x, y, label='f(x)')
    plt.title(title)
    plt.xlabel('x')
    plt.ylabel('f(x)')
    plt.legend()
    plt.grid(True)
    plt.show()

    # Initial guesses for Muller's method
    x0, x1, x2 = -1, 0, 1
    root, iter_count = mullers_method(f, x0, x1, x2)
    print(f'Muller\'s method: root = {root}, iterations = {iter_count}')

    # Initial guesses for Bairstow's method
    r, s = -1, -1
    roots, iter_count = bairstows_method(np.poly1d(f).coefficients, r, s)
    print(f'Bairstow\'s method: roots = {roots}, iterations = {iter_count}')

# Solve the polynomials
solve_polynomial(f1, "f(x) = x^3 - x^2 + 2x - 2")
solve_polynomial(f2, "f(x) = 2x^4 + 6x^2 + 8")
solve_polynomial(f3, "f(x) = -2 + 6.2x - 4x^2 + 0.7x^3")
solve_polynomial(f4, "f(x) = x^4 - 2x^3 + 6x^2 - 2x + 5")
