import { departments, employees } from "./tasks";
import { getAllDetails } from "./tasks";

const Department: departments[] = [
  {
    id: 1,
    name: "Human Resources",
    location: "Building A",
    skills: {
      name: "communication",
      proficiency: "100",
    },
  },
  {
    id: 2,
    name: "Engineering",
    location: "Building B",
    skills: {
      name: "civil engineering",
      proficiency: "50",
    },
  },
  {
    id: 3,
    name: "Marketing",
    location: "Building C",
    rewards: {
      name: "MBA in marketing",
      points: "10",
    },
  },
];
const Employee: employees[] = [
  {
    empid: 101,
    name: "Alice Johnson",
    departmentId: 1,
    position: "HR Manager",
  },
  {
    empid: 102,
    name: "Bob Smith",
    departmentId: 2,
    position: "Software Engineer",
  },
  {
    empid: 103,
    name: "Charlie Brown",
    departmentId: 3,
    position: "Marketing Specialist",
  },
];

const task = new getAllDetails(Employee, Department);
//Question 1
console.log(task.getAllEmpId());

//Question 2
console.log(task.getFirstName());

//Question 3
console.log(task.getPosition());

//Question 4
console.log(task.getCivilEmpName());
