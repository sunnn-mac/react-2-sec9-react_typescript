// 使ってない変数の警告を出さないように
/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列 どちらも使う
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple あんまり使わない
let tuple: [number, string] = [0, "A"];

// any なるべく使わないのが理想
let any1: any = false;

// void   戻り値がないことを示す
// const funcA = ():void => {
//   const test = 'TEST';
// }

// voidがなくても、関数の中でreturnしていなければ暗黙でvoidとみなす
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aaa" };
