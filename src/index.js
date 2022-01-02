/**
 * const,letの変数宣言
 *
 */
// var val1 = "var1";
// console.log(val1);

// //var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// //varは変数再宣言可能
// var val1 = "val2";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

//letは再宣言不可能→エラー
// let val2 = "let変数を再宣言"

const val3 = "const変数";
console.log(val3);

//const変数は上書き不可→エラー
// val3 = "aaa";

//constは再宣言不可
// const val3 = 1

//constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "ゆう",
  age: 22
};
val4.name = "ゆすけ";
val4.address = "Tokyo";
console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
val5.unshift("pig");
console.log(val5);

/***
 * テンプレート文字列
 */
const name = "ゆす";
const age = 22;
//わたしのなまえはゆすです
console.log(`私の名前は${name}です。年齢は${age}です`);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };

//処理が一行で終わるなら{}とreturnは省略できる
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
const func4 = (num3, num4) => num3 + num4;

console.log(func3(12, 13));
console.log(func4(10, 10));

//分割代入→オブジェクトから指定のプロパティを抜き出せる
// const myProfile = {
//   name: "ゆすけ",
//   age: 22,
// };
// const message1 = `名前${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);//ここは正常に動きました

// /**
//  * /src/index.js: Identifier 'name' has already been declared
//  */
// const { name, age } = myProfile;

// const message2 = `名前${name}です。年齢は${age}です`;
// console.log(message2);

// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

// const myProfile = ["ゆすけ", "22"];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}`
// console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "noname") => console.log(`こんにちは、${name}さん！`);
sayHello("Kevin");
sayHello();
/**
 * スプレッド構文 ...
 */
//配列の展開→配列の中身を見る
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);//これでも上と同じに成る。順番に展開される

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4; //これは参照渡しなので変えた渡す方もも変わってしまう
console.log(arr8);

const nameArray1 = ["田中", "山田", "ゆすけ"];

// const Arra1 = nameArray1.map((name) => //新しい配列を作っている
//   return name;
// });
// console.log(Arra1);
// nameArray1.map((name,index) => console.log(`${index + 1}番目は${name}です`));//forループと同じ
// →このようにmapには２つの使い方がある

// const numArray = [1,2,3,4,5];
// const NewnumArray = numArray.filter((num)=>{
// return num % 2 === 1;//returnのあとに条件式を書く
// });
// console.log(NewnumArray);

const newNameArray = nameArray1.map((name) => {
  if (name === "ゆすけ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArray);

// const num = 1300;
// const num = "1300"; //文字列は弾きたい
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);
// console.log(num.toLocaleString());

//関数のreturn部分で三項演算子を使える
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えたよ" : "許容範囲内だよ";
};
console.log(checkSum(50, 70));

/***
 * 
 論理演算子の本当の意味→変数を設定するのにも使える
 */

//||は左側がfalseなら右側を返す。左側がtrueならそのまま左をかえす
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

//&& は左側がtrueなら右側を返す
// const num3 = 100;
const num3 = null;

const fee2 = num3 && "なにか設定されました";
console.log(fee2);
