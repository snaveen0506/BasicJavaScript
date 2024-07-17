/*Arrays:
// Customer object
let customers = [
   {
      'id': 001,
      'f_name': 'Abby',
      'l_name': 'Thomas',
      'gender': 'M',
      'married': true,
      'age': 32,
      'expense': 500,
      'purchased': ['Shampoo', 'Toys', 'Book']
   },
   {
      'id': 002,
      'f_name': 'Jerry',
      'l_name': 'Tom',
      'gender': 'M',
      'married': true,
      'age': 64,
      'expense': 100,
      'purchased': ['Stick', 'Blade']
   },
   {
      'id': 003,
      'f_name': 'Dianna',
      'l_name': 'Cherry',
      'gender': 'F',
      'married': true,
      'age': 22,
      'expense': 1500,
      'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
   },
   {
      'id': 004,
      'f_name': 'Dev',
      'l_name': 'Currian',
      'gender': 'M',
      'married': true,
      'age': 82,
      'expense': 90,
      'purchased': ['Book']
   },
   {
      'id': 005,
      'f_name': 'Maria',
      'l_name': 'Gomes',
      'gender': 'F',
      'married': false,
      'age': 7,
      'expense': 300,
      'purchased': ['Toys']
   }
];*/

"use script";

let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

//Question 1

//1) what items senior citizens have purchased >60

customers.forEach((item) => {
  if (item.age > 60) {
    console.log(
      `Items purchased by ${item.f_name} ${item.l_name} (${item.age}) are: ${item.purchased}`
    );
  }
});

//another way

/*let seniorCitizen = customers.filter((cus) => cus.age > 60);

let purchasedItem = [];
for (const items of seniorCitizen) {
purchasedItem = purchasedItem.concat(items.purchased);
}
console.log(purchasedItem);
*/

//Question 2

//2) add full_name to existing list where married Female its Mrs, unmarried female its Ms., for all male its Mr.
//example :
//'full_name': Ms.Maria Gomes

customers = customers.map((fullName) => {
  let name1 = "";
  if (fullName.gender === "F") {
    name1 = fullName.married ? "Mrs" : "Ms";
  } else {
    name1 = "Mr";
  }
  fullName.full_name = `${name1}. ${fullName.f_name} ${fullName.l_name}`;
  return fullName;
});

console.log(customers);

//Question 3

//3) check for young customer, the out put will be true of false,
//true if any customer found with age < 10 else it should be false

for (let young of customers) {
  if (young.age < 10) {
    console.log(
      `True! We have young customers: ${young.f_name} ${young.l_name} (${young.age})`
    );
  }
}

//another way

/*let youngCustomer = customers.some((y) => y.age > 60);
console.log(youngCustomer);  //some method returns true if pass
*/

//Question 4

// 4) for each element in the array use call back to multiply by 2
// function forEachElement(arr, callback)
// callback: will multiply each element with 2

let ages = [];
for (let a of customers) {
  ages = ages.concat(a.age);
}
console.log(ages); //to filter only age from that object.

function call(age) {
  return age * 2;
}

function forEachElement(arr, callback) {
  //callback=call method
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a.push(callback(arr[i])); //add element at last
  }
  return a;
}

let ans = forEachElement(ages, call);
console.log(ans);

//Question 5

// 5) Asych callback
// create a function
// function fetchData(url, callback)
// add a condition
// const error = Math.random() > 0.5
//  should be asynchronous use setTimeout check if above error value is true then call the callback
// with message argument as error,url else send the argument as success,url
//  the callback function will have message and url as argument,
// if error is null then print error occured {message} {url}
// else print the response is successfull the url is {url} and message is {message}
