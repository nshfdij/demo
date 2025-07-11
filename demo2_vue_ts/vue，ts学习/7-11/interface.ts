//？表示可选属性，可以不传
export interface SquareConfig {
  color?: string;
  width?: number;
  readonly [index: number]: string; //索引签名, 索引类型为number, 值类型为string
}
//只读属性readonly
export interface Point {
  readonly x: number;
  readonly y: number;
}

//函数接口
export interface SearchFunc {
  (source: string, subString: string): boolean;
}

// //类接口
// export interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

//implements 实现接口
export interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

export interface ClockInterface {
  tick(): void;
}

//接口继承
// interface Shape {
//   color: string;
// }

// interface Circle extends Shape {
//   radius: number;
// }
