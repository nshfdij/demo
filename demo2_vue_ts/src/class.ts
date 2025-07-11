class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// 定义一个名为Snake的类，继承自Animal类
class Snake extends Animal {
  // 构造函数，接收一个字符串参数name，调用父类的构造函数
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

export { Animal, Snake, Horse };

//-----------------------------------------------------------------

class Person {
  private _fullName: string;
  protected _age: number;

  // 构造函数，用于初始化Person类的实例
  protected constructor(fullName: string, age: number) {
    // 将传入的参数赋值给实例的属性
    this._fullName = fullName;
    this._age = age;
  }
  public getinfo(): string {
    return `姓名：${this._fullName}，年龄：${this._age}`;
  }
}

class Student extends Person {
  private _grade: number;
  constructor(fullName: string, age: number, grade: number) {
    super(fullName, age);
    this._grade = grade;
  }
  public getinfo(): string {
    return `${super.getinfo()}，年级：${this._grade}`;
  }
}
export { Person, Student };

//-----------------------------------------------------------------

abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

// 泛型类
// class Department<T> {
//     name: T;
//     constructor(name: T) {
//         this.name = name;
//     }
// }
export { Department, AccountingDepartment };

//-----------------------------------------------------------------
