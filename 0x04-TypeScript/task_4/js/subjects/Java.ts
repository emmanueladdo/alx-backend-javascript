namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements = (): string => {
        return "Here is the list of requirements for Java";
      };
  
      getAvailableTeacher(): string {
        if (this._teacher && this._teacher.experienceTeachingJava && this._teacher.experienceTeachingJava > 0) {
          return `Available Teacher: ${this._teacher.firstName}`;
        } else {
          return `No available teacher`;
        }
      }
    }
  }
  