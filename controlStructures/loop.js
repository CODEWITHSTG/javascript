// Loops are used to execute a block of code repeatedly until
// specific conditions are met.

// whenever you see ++, it means it increasing by 1

for (let i = 0; i < 5; i++) {
    console.log("hello from Loop " + i);
};

const colors = ["red", "green", "blue", "yellow"]

for (let i = 0; i < colors.length; i++) {
    console.log("Color:", colors[i]);
}

const fruits = ["apple", "banana", "pineapple"]

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

const students = [
    {name: "John", grade: 85},
    {name: "Robin", grade: 92},
    {name: "Michael", grade: 100}
]

for(let i = 0; i < students.length; i++) {
    console.log("Student:", students[i].name, "Grade:", students[i].grade);
}

const portfolio = [
    { name: "Opeyemi:", school: "New Horizon", course: "Full Stack Development" }
]

for(let i = 0; i < portfolio.length; i++) {
    console.log("My name is " + portfolio[i].name, "My school is ",
        portfolio[i].school, "My course is ", portfolio[i].course)
}

// While Loop
let i = 0;
while (i < 5){
    console.log("count is: " + i)
    i++
}

// class details containing student names, course, age, let it be different courses, gender. look through it and explain it through comment

const classDetails = [
// Each object represents a student

    { name: 'John Doe', course: 'FrontEnd', age: 20, country: 'Australia', Phone: '+61 345768909', gender: 'Male' },
    { name: 'Jane Smith', course: 'Backend', age: 22, country: 'UK', phone: +'44 1234567890', gender: 'Female' },
    { name: 'Bob Johnson', course: 'Web design', age: 21, country: 'Canada', phone: '+1 123-456-7890', gender: 'Male' },
    { name: 'Alice Williams', course: 'UI/UX Design', age: 20, country: 'Germany', phone: '+49 123-456-7890', gender: 'Female' },
    { name: 'Mike Davis', course: 'Freelancing', age: 23, country: 'USA', phone : '+1 657493356', gender: 'Male' }
  ];
  
  // Loop through each student in the array

  for (let i = 0; i < classDetails.length; i++) {
    // Log student details to the console

    console.log(`Name: ${classDetails[i].name}, Course: ${classDetails[i].course}, Age: ${classDetails[i].age}, Gender: ${classDetails[i].gender}, Country: ${classDetails[i].country} 
    Phone: ${classDetails[i].phone}`);
  }
  