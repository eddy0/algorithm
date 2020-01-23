def judgeSquareSum(c: int) -> bool:
    from math import sqrt
    start = 0
    end = int(sqrt(c))
    while start <= end:
        a = start ** 2
        b = end ** 2
        if (a + b) == c:
            return True
        elif (a + b) < c:
            start += 1
        else:
            end -= 1
    return False
