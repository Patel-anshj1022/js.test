car = {
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2020
}

car["color"] = "Red"

car["year"] = 2023

del car["model"]

print("brand" in car)  # True

for key, value in car.items():
    print(f"{key}: {value}")

students = [
    {"name": "Alice", "age": 21},
    {"name": "Bob", "age": 23},
    {"name": "Charlie", "age": 20}
]

oldest = max(students, key=lambda s: s["age"])
print(oldest)

students.append({"name": "David", "age": 22})
print(students)