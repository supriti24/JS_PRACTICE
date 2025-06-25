// Non-primitive data types store references to memory locations, not the actual data itself.
// i.e non-primitive types store references to the value.

//object  // array // functions

let person = {
    firstName: "Jane",  // Key: "firstName", Value: "Jane" (String)
    lastName: "Doe",    // Key: "lastName", Value: "Doe" (String)
    age: 28,            // Key: "age", Value: 28 (Number)
    isStudent: false    // Key: "isStudent", Value: false (Boolean)
  };
  
  // Accessing object properties
  console.log(person.firstName);  // Output: Jane
  console.log(person["lastName"]);  // Output: Doe
  //print typeof
  console.log(typeof person);  // Output: object

  // Dynamic Nature of object : 
  // You can add or modify properties of an object at any time.

  person.nationality = "Canadian";  // Adding a new property
  person.age = 29;  // Modifying an existing property

// Nested Objects

  let student = {
    name: "Alice",
    grade: 12,
    subjects: {
      math: "A",
      science: "B"
    }
  };
  console.log(student.subjects.math);  // Output: A

// Objects for Functionality
// Objects can also hold methods (functions as values), allowing them to store behavior along with data.
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("Car started");
  }
};

car.start();  // Output: Car started

//  Nested Objects with Multiple Levels

let company = {
  name: "TechCorp",
  location: "San Francisco",
  departments: {
    engineering: {
      head: "John Doe",
      employees: 50
    },
    marketing: {
      head: "Jane Smith",
      employees: 30
    }
  }
};

console.log(company.departments.engineering.head);  // Output: John Doe
console.log(company.departments.marketing.employees);  // Output: 30

// Object with Nested Arrays and Objects
// Objects can contain both arrays and other objects, forming mixed data structures.

let library = {
  name: "City Library",
  location: "Downtown",
  books: [
    {
      title: "JavaScript Basics",
      author: "John Doe",
      copies: 5
    },
    {
      title: "Advanced Python",
      author: "Jane Smith",
      copies: 3
    }
  ]
};

console.log(library.books[0].title);  // Output: JavaScript Basics
console.log(library.books[1].author);  // Output: Jane Smith

// Nested Objects with Methods
// Nested objects can also include methods to perform actions or retrieve data.

let smartphone = {
  brand: "PhoneCorp",
  model: "X500",
  specs: {
    display: "6.5-inch",
    storage: "128GB",
    camera: {
      resolution: "12MP",
      video: function() {
        return "4K video recording";
      }
    }
  }
};

console.log(smartphone.specs.camera.resolution);  // Output: 12MP
console.log(smartphone.specs.camera.video());  // Output: 4K video recording

// Object with Functions Returning Nested Data
// You can also have functions that return objects or nested data inside an object.

let university = {
  name: "Global University",
  location: "New York",
  getStudentInfo: function() {
    return {
      name: "Alice Johnson",
      year: "Sophomore",
      courses: {
        major: "Computer Science",
        electives: ["Mathematics", "Physics"]
      }
    };
  }
};

let studentInfo = university.getStudentInfo();
console.log(studentInfo.courses.major);  // Output: Computer Science
console.log(studentInfo.courses.electives[1]);  // Output: Physics

// Complex Data Models
// You can model real-world systems using nested objects to represent complex data. 
// For example, an e-commerce platform might use nested objects to represent products, orders, and customers.

let order = {
  orderId: "A12345",
  customer: {
    name: "Emily",
    address: "123 Main St",
    contact: {
      email: "emily@example.com",
      phone: "555-1234"
    }
  },
  products: [
    {
      productName: "Laptop",
      quantity: 1,
      price: 1200
    },
    {
      productName: "Mouse",
      quantity: 2,
      price: 20
    }
  ],
  getTotal: function() {
    return this.products.reduce((total, product) => total + (product.quantity * product.price), 0);
  }
};

console.log(order.customer.contact.email);  // Output: emily@example.com
console.log(order.getTotal());  // Output: 1240

// Modifying Nested Object Properties

let car = {
  make: "Tesla",
  model: "Model 3",
  features: {
    autopilot: true,
    battery: "75 kWh"
  }
};

// Modifying nested object properties
car.features.battery = "80 kWh";
car.features.color = "Red";  // Adding new property to nested object

console.log(car.features.battery);  // Output: 80 kWh
console.log(car.features.color);  // Output: Red