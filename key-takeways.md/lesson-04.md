# JavaScript --- Object

Object is a data type used to store a set of key--value pairs.

Example:

``` javascript
let sinhVien = {
  hoTen: "Nguyễn Văn A",
  tuoi: 20,
  lop: "WEB01"
};
```

## Declare Object

### Object Literal

``` javascript
let xe = {
  hang: "Toyota",
  mau: "Trắng",
  namSanXuat: 2023
};
```

### new Object()

``` javascript
let xe = new Object();
xe.hang = "Toyota";
xe.mau = "Trắng";
xe.namSanXuat = 2023;
```

## Access Object Data

### Dot notation

``` javascript
console.log(sinhVien.hoTen);
```

### Bracket notation

``` javascript
console.log(sinhVien["hoTen"]);
```

## Add / Update / Delete Properties

``` javascript
let product = { ten: "Áo thun" };

product.gia = 150000;
product["mauSac"] = "Đen";

product.gia = 180000;

delete product.mauSac;
```

## Nested Object

``` javascript
let sinhVien = {
  hoTen: "Minh",
  tuoi: 21,
  diaChi: {
    soNha: "12",
    duong: "Lê Lợi",
    thanhPho: "Hồ Chí Minh"
  }
};

console.log(sinhVien.diaChi.duong);
```

------------------------------------------------------------------------

# JavaScript --- Array

Array stores an ordered list of values.

Example:

``` javascript
let monHoc = ["Toán", "Lý", "Hoá", "Anh", "Tin"];
```

Each element has an index starting from 0.

## Declare Array

``` javascript
let traiCay = ["Táo", "Cam", "Xoài"];
let diemSo = [8, 9, 7.5, 10];
let hocSinh = [];
```

## Access Elements

``` javascript
console.log(monHoc[0]);
console.log(monHoc[2]);
```

Last element:

``` javascript
monHoc[monHoc.length - 1];
```

## Array Operations

### Add element

``` javascript
arr.push(4);
arr.unshift(0);
arr.splice(2, 0, 1.5);
```

### Remove element

``` javascript
arr.pop();
arr.shift();
arr.splice(1, 1);
```

## Loop with Array

### Traditional for loop

``` javascript
for (let i = 0; i < diemSo.length; i++) {
  console.log(diemSo[i]);
}
```

### for...of

``` javascript
for (let qua of traiCay) {
  console.log(qua);
}
```

### forEach

``` javascript
traiCay.forEach(function(qua, viTri) {
  console.log(viTri + ": " + qua);
});
```

------------------------------------------------------------------------

# JavaScript --- Function

Function is a named block of code that can be reused multiple times.

Example:

``` javascript
function chaoMung() {
  console.log("Xin chào!");
}
```

Call function:

``` javascript
chaoMung();
```

## Function with Parameters

``` javascript
function chao(ten) {
  console.log("Xin chào " + ten + "!");
}

chao("Lan");
```

## Multiple Parameters

``` javascript
function tinhTong(a, b) {
  console.log(a + b);
}
```

## Return Value

``` javascript
function tinhTong(a, b) {
  return a + b;
}

let ketQua = tinhTong(3, 5);
console.log(ketQua);
```

------------------------------------------------------------------------

# JavaScript --- Variable Scope

Scope determines where variables can be accessed.

Types of scope: - Block scope - Function scope - Global scope

## Block Scope

Variables declared inside `{}`.

``` javascript
if (true) {
  var varVariable = "var";
  let letVariable = "let";
  const constVariable = "const";
}
```

-   var → not limited by block
-   let and const → limited inside block

## Function Scope

Variables declared inside a function cannot be accessed outside.

``` javascript
function myFunction() {
  var functionScoped = "inside function";
}
```

## Global Scope

Variables declared outside blocks or functions.

``` javascript
var globalVar = "global";
let globalLet = "global";
```

------------------------------------------------------------------------

# JavaScript --- break & continue

## break

Stops the loop immediately.

``` javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

## continue

Skip current iteration and move to next.

``` javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

------------------------------------------------------------------------

# Advanced Conditional Statements

## if...else

``` javascript
let score = 75;

if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

## if...else if

``` javascript
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Good");
}
```

## Ternary Operator

``` javascript
let status = (age >= 18) ? "Adult" : "Child";
```

------------------------------------------------------------------------

# Advanced Loops

## for...in

``` javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

## forEach

``` javascript
numbers.forEach(function(value) {
  console.log(value);
});
```

Note: cannot use break or continue.

------------------------------------------------------------------------

# Utils Functions

## String Utils

Operations: - trim spaces - convert case - check substring - split
string - replace text

``` javascript
text.trim();
text.trimStart();
text.trimEnd();

str.toUpperCase();
str.toLowerCase();

text.includes("World");

text.split(" ");

text.replace("World","JavaScript");
```

------------------------------------------------------------------------

## Array Utils

Operations: - add elements - remove elements - search - transform - sort

``` javascript
arr.push(val);
arr.unshift(val);
arr.splice(index, 0, val);

arr.pop();
arr.shift();
arr.splice(index, count);

numbers.find(num => num > 10);
numbers.filter(num => num > 10);

numbers.map(num => num * 2);

numbers.sort((a,b)=>a-b);
numbers.sort((a,b)=>b-a);
```

