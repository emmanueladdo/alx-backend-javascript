//task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  interface Director extends Teacher {
    numberOfReports: number;
  }
  
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: PrintTeacherFunction = function (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  };
  
  class StudentClass implements StudentInterface {
    public firstName: string;
    public lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    public workOnHomework(): string {
      return 'Currently working';
    }
  
    public displayName(): string {
      return this.firstName;
    }
  }
  
  interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  