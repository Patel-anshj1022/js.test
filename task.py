fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"]
print(fruits[1])  

fruits.append("Kiwi")
print(fruits)


fruits.pop(0)
print(fruits)


fruits.sort()
print(fruits)


fruits.reverse()
print(fruits)

print("Mango" in fruits)  

print(len(fruits))

for fruit in fruits:
    print(fruit.upper())