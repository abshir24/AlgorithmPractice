# Homework 3
# cs120
# Abshir Mohamed
# This is a program that prompts the user for various questions  
# the third part of this program works as follows a software company sells a package that retails for $99. 
# Quantity discounts are given according to the following table. 
# This program will ask for the number of units sold and computes the total cost. 
# 5/13/2018

# Part one
# ****************************************************
name = input("Whats your name ")

age = int(input("How old are you? "))

if age < 16:
    print (name, "You can stay at home and study")
elif age < 18:
    print (name, "You can drive but that is all.")
elif age < 21:
    print (name, "You can drive and vote.")
else:
    print (name, "You can drive, vote, and gamble.")

# Part two
# ****************************************************
max = 0

print "Input 4 numbers"
for i in range(4):
    num = int(input())  

    if num>max:
        
        max=num

print ("The biggest number is ", max)



# Part three
# ****************************************************

units = int(input("How many units were sold? "))

if units < 10:
    price = (units*99)
    print ("Your price is $", price)
elif units >=10 and units <=19:
    price = float((units*99)-(units*99*.2))
    print ("Your price is $", round(price,2))
elif units >=20 and units <=49:
    price = float((units*99)-(units*99*.3))
    print ("Your price is $", price)
elif units >=50 and units <=99:
    price = float((units*99)-(units*99*.4))
    print ("Your price is $", round(price,2)
