interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  yearsOfExperience: 1,
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    numberOfReports: 17,
  };
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
  
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher('John', 'Doe'));

interface StudentClassConstructor{
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass{
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
    firstName: string;
    lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

  const student = new Student('John', 'Doe');

  console.log(student.displayName());
  console.log(student.workOnHomework());
