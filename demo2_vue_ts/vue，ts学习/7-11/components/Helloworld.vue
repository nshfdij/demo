<script setup lang="ts">
import { ref } from 'vue'
import type { SquareConfig, SearchFunc, ClockInterface, ClockConstructor } from '../interface'
import { Snake, Animal, Horse, Student } from '../class' // 类
import { Department, AccountingDepartment } from '../class' // 抽象类
let count = ref(0)

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

console.log(mySquare)

// as 断言，告诉编译器，mySquare1的类型是SquareConfig
// let mySquare1 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);


// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!，无法为x属性赋值，因为它是只读的


//ReadonlyArray<T>类型，表示只读数组，不能对数组的元素进行修改
// let a: number[] = [1, 2, 3]
// let b: ReadonlyArray<number> = a
// b[0] = 4 // error!，无法为b数组的元素赋值，因为它是只读的

// 
let mySearch: SearchFunc = (source: string, subString: string) => {
    return source.includes(subString);
    // includes方法是字符串的方法，用于判断字符串中是否包含指定的子字符串
}

console.log(mySearch("hello world", "world")) // true

// 构造函数实现接口，构造函数的参数类型必须与接口一致
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

// 类实现接口，类必须实现接口的所有属性和方法
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
        console.log(`DigitalClock: ${h}:${m}`);
    }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
        console.log(`AnalogClock: ${h}:${m}`);
    }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

console.log(digital, analog)
console.log(digital.tick(), analog.tick())

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

let xiaoming = new Student('xiaoming', 20, 3);
console.log(xiaoming.getinfo());


let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 泛型
function indentity<T>(arg: T): T {
    return arg;
}

let result = indentity(10);
console.log(result);
// 泛型约束
function indentity1<T extends number>(arg: T): T {
    return arg;
}

let result1 = indentity1(10);
console.log(result1);

// let result2 = indentity1('10'); // 类型“string”的参数不能赋给类型“number”的参数。
</script>

<template>

    <button @click="count++">count is: {{ count }}</button>

</template>

<style></style>