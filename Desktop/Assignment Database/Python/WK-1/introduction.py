#get input from the user
number1 = float(input("Enter number1: "))
number2 = float(input("Enter number2: ")) 
operation = input("Enter operation (+,_,*,/,%,//,**): ")
#performing calculation
if operation == "+":
    result = number1 + number2
elif operation == "-":
    result = number1 - number2
elif operation == "*":
    result = number1 * number2        
elif operation == "%":
    result = number1 % number2  
elif operation == "//":
    result = number1 // number2
elif operation == "**":
    result = number1 ** number2
elif operation == "/":
    if number2 != 0:
        result = number1 / number2
    else:
        result = "Error: Division by Zero"
else:    
    print("invalid operation")
print(f"{number1} {operation} {number2} = {result}")