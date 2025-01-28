interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome():string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
      return 'Working from home';
  }

  getCoffeeBreak() {
      return 'Getting a coffee break';
  }

  workDirectorTasks() {
      return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
  
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
  
    workTeacherTasks() {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director {

  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }

}

function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: TeacherInterface | DirectorInterface): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass:Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}


// task5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// task6
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// task7
console.log(teachClass('Math'));
console.log(teachClass('History'));
