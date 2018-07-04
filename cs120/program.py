import math

# animal="Elephant"
# color="Purple"
# number=3
# print "I have " + str(number)+ " " + color + " " + animal +"(s)"


# PT1
# ---------------------------------------------------------------------------------------------------

# name = "Abshir"
# age = 21
# GPA = 2.85
# space = " "

# print name + space + "is" + space + str(age) + space + "GPA" + space + str(GPA) 

# name = input("Whats your name ")

# age = input("How old are you? ")

# GPA = input("What is your GPA? ")

# print "Wassup my name is " + name + " and I am " + str(age) + " years old. Tbh my gpa is " + str(GPA)

# ------------------------------------------------------------------------------------------------------

# PT2
# ---------------------------------------------------------------------------------------------------

# Fname = input("Whats your first name: ")
# Lname = input("Whats your last name: ")
# Quiz1 = input("What was your grade on quiz 1: ")
# Quiz2 = input("What was your grade on quiz 2: ")
# Quiz3 = input("What was your grade on quiz 3: ")
# Quiz4 = input("What was your grade on quiz 4: ")
# Quiz5 = input("What was your grade on quiz 5: ")
# Average = float((Quiz1+Quiz2+Quiz3+Quiz4+Quiz5)/5)
# print "Hello " + Fname + " " + Lname + " your quiz score average is " + str(Average)

# ------------------------------------------------------------------------------------------------------

# PT3
# ---------------------------------------------------------------------------------------------------

# userinput = input("Gimme a number fam: ")
# if userinput %2 == 0:
#     print "even"

# else:
#     print "odd"
#     print userinput/2

# ------------------------------------------------------------------------------------------------------

# PT4
# ---------------------------------------------------------------------------------------------------

# userinput = input("What is 2+2: ")
# answer = 4
# if userinput==answer:
#     print "Good job bro!"
# else:
#     difference = answer - userinput 
#     print "You need to study more fam you were ", difference, " off"

# ------------------------------------------------------------------------------------------------------

# print 1.0 + 6

#5-3

# year = int(input("What year were you born?"))

# if year < 1800 or year >2015:
#     print "invalid"
# elif year >= 1943 and year < 1963:
#     print "Baby Boomer"
# elif year > 1963 and year < 1983:
#     print "Gen X"
# elif year > 1983 and year < 2003:
#     print "Millenial" 
# elif year >= 2003:
#     print "Gen Z" 

#5-8

# for i in range(1000,0,-1):
#     print i, i**2

# num = float(input("Gimme a number"))

# while num > .01:
#     num = num/2

# print num

# num = 25

# while num <= 100:
#     if num >= 0 and num <= 59:
#         print (num,"Your grade is an F fam ")
#         num+=1
#     elif num >=60 and num <=69:
#         print (num,"Your grade is an D fam ")
#         num+=1
#     elif num >=70 and num <=79:
#         print (num,"Your grade is an C fam ")
#         num+=1
#     elif num >=80 and num <= 89:
#         print (num,"Your grade is an B fam ")
#         num+=1
#     else:
#         print (num,"Your grade is an A fam ")
#         num+=1
   

# for num in range(1, 101):
#     if (num % 2 == 0):
#         num2 = num/2
#     else:
#         num2 = 3 * num 
#         num2 = num2 + 1
# print (num , "-->" , num2)


for i in range(10,21):
    if i%2==0:
        num = i/2
        print ("*"*num)
    else:
        print (i)

