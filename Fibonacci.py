# The Fibonacci numbers are the numbers in the following integer sequence (Fn)

def productFib(prod):
    arr, ans = [], []
    a, b = 0, 1
    arr.extend((a, b)) 
    for i in range(2, prod + 1):
        c = a + b
        a, b = b, c
        arr.append(c)   
        if arr[i-1]*arr[i] == prod:
            ans.extend((arr[i-1], arr[i], arr[i-1]*arr[i] == prod)) 
            break
        elif arr[i-1]*arr[i] > prod:
            ans.extend((arr[i-1], arr[i], arr[i-1]*arr[i] == prod)) 
            break
    return ans

productFib(4895) # [55, 89, true])
    