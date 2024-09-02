export interface departments {
  id: number;
  name: string;
  location: string;
  skills?: {
    name: string;
    proficiency: string;
  };
  rewards?: {
    name: string;
    points: string;
  };
}

export interface employees {
  empid: number;
  name: string;
  departmentId: number;
  position: string;
}

export class getAllDetails {
  public Emp: employees[];
  public Dep: departments[];
  constructor(Emp: employees[], Dep: departments[]) {
    this.Dep = Dep;
    this.Emp = Emp;
  }
  getAllEmpId() {
    return this.Emp.map((emp) => {
      const deptName = this.Dep.find((dept) => dept.id === emp.departmentId);
      return deptName
        ? `Employee id: ${emp.empid}, its department name is ${deptName.name}`
        : undefined;
    });
  }
  getFirstName() {
    return this.Emp.map((emp) => {
      const fName = emp.name.split(" ")[0];
      const Deptname = this.Dep.find((dept) => dept.id === emp.departmentId);
      return Deptname
        ? `Firstname of emp id:${emp.empid} is ${fName} and its respective department name is ${Deptname.name}`
        : undefined;
    });
  }
  getPosition() {
    return this.Emp.map((emp) => {
      const fName = emp.name.split(" ")[0];
      const DeptName = this.Dep.find((dept) => dept.id === emp.departmentId);
      return DeptName
        ? `Positions of ${fName} in ${DeptName.name} department is ${emp.position}`
        : undefined;
    });
  }
  getCivilEmpName() {
    return this.Emp.map((emp) => {
      const civilName = this.Dep.find(
        (dept) =>
          dept.id === emp.departmentId &&
          dept.skills?.name === "civil engineering"
      );
      return civilName
        ? `${emp.name} has ${civilName.skills?.name} skill and his department name is ${civilName.name}`
        : undefined;
    });
  }
}

/*const Department = [
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

const Employee = [
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

//Question 1: get all emp id and print the respective department name
console.log("Question: 1");

function getDepartmentName(): void {
  Employee.map((emp) => {
    const deptName = Department.find((dept) => dept.id === emp.departmentId);
    //find returns the first element in the array which passes the condition
    if (deptName) {
      console.log(
        `Employee id:${emp.empid}, its respective department is ${deptName.name}`
      );
    }
  });
}
getDepartmentName();

//Question 2: get all firstnmaes from emp loop and print the department names for respective first name
console.log("Question: 2");

//getting firstname from full name by using split method
function firstname(name: string): string {
  return name.split(" ")[0]; //splits by space & return 0th index value
}

function getFirstName(): void {
  Employee.map((emp1) => {
    const fdeptName = Department.find(
      (dept1) => dept1.id === emp1.departmentId
    );

    if (fdeptName) {
      const fName = firstname(emp1.name);
      console.log(
        `Firstname of emp id:${emp1.empid} is ${fName} and its respective department name is ${fdeptName.name}`
      );
    } else {
      return undefined;
    }
  });
}

getFirstName();

//Question 3: get all positions from emp loop and print the department names for respective first name
console.log("Question: 3");

function getPosition(): void {
  Employee.map((emp2) => {
    const pdeptName = Department.find(
      (dept2) => dept2.id === emp2.departmentId
    );
    if (pdeptName) {
      const fname2 = firstname(emp2.name);
      console.log(
        `Positions of ${fname2} in ${pdeptName.name} department is ${emp2.position}`
      );
    } else {
      return undefined;
    }
  });
}

getPosition();

//Question 4: get the employee name and department name who got civil engineering skill
console.log("Question: 4");

function CivilempName(): void {
  Employee.map((emp3) => {
    const civilName = Department.find(
      (dept3) =>
        dept3.id === emp3.departmentId &&
        dept3.skills?.name === "civil engineering"
    );
    if (civilName) {
      console.log(
        `${emp3.name} has ${civilName.skills?.name} skill and his department name is ${civilName.name}`
      );
    } else {
      return undefined;
    }
  });
}

CivilempName();*/

//Another way
/*
interface departments {
  id: number;
  name: string;
  location: string;
  skills?: {
    name: string;
    proficiency: string;
  };
  rewards?: {
    name: string;
    points: string;
  };
}

interface employess {
  empid: number;
  name: string;
  departmentId: number;
  position: string;
}
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

const Employee: employess[] = [
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

//Question 1: get all emp id and print the respective department name
console.log("Question 1");

function getDept(Id: number): string {
  const deptName = Department.filter((dept) => dept.id === Id);
  return deptName[0].name;
}

function getDepartmentName(): void {
  Employee.map((emp) => {
    const deptName = getDept(emp.departmentId);
    //find returns the first element in the array which passes the condition
    if (deptName) {
      console.log(
        `Employee id:${emp.empid}, its respective department is ${deptName}`
      );
    }
  });
}
getDepartmentName();

//Question 2: get all firstnmaes from emp loop and print the department names for respective first name
console.log("Question 2");

//getting firstname from full name by using split method
function firstname(name: string): string {
  return name.split(" ")[0]; //splits by space & return 0th index value
}

function getFirstName(): void {
  Employee.map((emp1) => {
    const fdeptName = getDept(emp1.departmentId);
    if (fdeptName) {
      const fName = firstname(emp1.name);
      console.log(
        `Firstname of emp id:${emp1.empid} is ${fName} and its respective department name is ${fdeptName}`
      );
    }
  });
}

getFirstName();

//Question 3: get all positions from emp loop and print the department names for respective first name
console.log("Question 3");

function getPosition(): void {
  Employee.map((emp2) => {
    const pdeptName = getDept(emp2.departmentId);
    if (pdeptName) {
      const fname2 = firstname(emp2.name);
      console.log(
        `Positions of ${fname2} in ${pdeptName} department is ${emp2.position}`
      );
    }
  });
}

getPosition();

//Question 4: get the employee name and department name who got civil engineering skill
console.log("Question 4");

function getSkill(): string | undefined {
  const skill = Department.filter(
    (dept4) => dept4.skills?.name === "civil engineering"
  );
  return skill[0].skills?.name;
}

function CivilempName(): void {
  Employee.map((emp3) => {
    const civilName = getDept(emp3.departmentId);
    const skillName = getSkill();
    if (civilName) {
      console.log(
        `${emp3.name} has ${skillName} skill and his department name is ${civilName}`
      );
    }
  });
}

CivilempName();*/
