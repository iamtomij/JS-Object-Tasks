//  Loop through an object and print the key-value pairs with their types 

let myObject={
  name: "Tomij Uddin",
  age: 23,
  city: "Dhaka",
  isStudent: true,
}

for (let key in myObject){
  console.log(
    "Key:", key,
    "| Value:", myObject[key],
    "| Type:", typeof myObject[key]
  );
}