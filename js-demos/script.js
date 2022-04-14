
// JS engines - 
// chrome - v8 

// console.log("js demo"); // sop java 
// console.log(10 + 20);


// java 
// int num = 10;
// sop(num);
// num = "abc";
// sop(num);

// js variable declaration 

// let num = 10;
// console.log(num);
// num = "abc";
// console.log(num);
// num = true;
// console.log(num);

// datatypes in JS 
// number, string, boolean 

// num = 10; // don't use 
// var num2 = 20; // don't use 
// let num3 = 30; // use for normal variables 
// const num4 = 40; // use for constants = java final 
// console.log(num);
// console.log(num2);
// console.log(num3);
// console.log(num4);

// console.log("abc");
// console.log('abc');
// console.log(`abc`);


// datatypes identification 

// let num = 10;
// console.log(num);
// console.log(typeof (num));
// num = `abc`;
// console.log(num);
// console.log(typeof (num));
// num = true;
// console.log(num);
// console.log(typeof (num));

// let num = 10;
// console.log(num);
// num = 20;
// console.log(num);
// const num2 = 10;
// console.log(num2);
// num2 = 20;
// console.log(num2);

// let myMarks = [10, 20, 30]; // array 
// console.log(myMarks);
// console.log(myMarks[0]);

// let arr = [10, 20.5, `abc`, false];
// console.log(arr[3]);

// let obj = {}; // proper js object 

// let empData = {
//     employeeId: 101,
//     firstName: `Sonu`,
//     salary: 50000.25,
//     address: { street: `ECIL Road`, city: `Hyderabad`, pin: 123456 },
//     phones: [9876543210, 7418529630],
//     isMarried: false
// };
// console.log(empData);
// console.log(empData.address.street);
// console.log(empData.phones[1]);
// console.log(typeof(empData));



// null
// NaN 
// undefined 

// let v1 = 10;
// let v2 = `abc`;
// let v3 = false;

// // truthy, falsy 
// // falsy : false, 0, NaN, undefined, null
// // truthy : everything else 

// let userInput = `abc`;

// // if (/*userInput has a value*/) {
// if (userInput == 'abc') {
//     // code 
// }
// else {
//     // code 
// }

// let v1 = 10;
// let v2 = `10`;

// if (v1 === v2) {
//     console.log(`true`);
// }
// else {
//     console.log(`false`);
// }


// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// console.log(arr1);
// console.log(arr2);

// let arr3 = [...arr1, ...arr2]
// // let arr3 = [arr1, arr2];
// console.log(arr3);
// console.log(typeof (arr3));

// functions in JS 
// function == method == hook == routine == subroutine == ??

// class Delete {

// }

// function fun() {
//     console.log(`fun function`);
// }

// function fun2() {
//     console.log(`fun2 function`);
//     return 10;
// }

// console.log(fun());
// console.log(fun2());

// function fun3(arg1, arg2) {
//     console.log(arg1 + arg2);
//     return arg1 + arg2;
// }

// console.log(fun3());
// console.log(fun3(10));
// console.log(fun3(10, 20));
// console.log(fun3(10, 20, 30));

// arrrow functions 
//   =>       ->     

// let fun4 = () => {

// }

// let fun4 = () => {
//     console.log(`fun4 function`);
// }
// fun4();

// let fun5 = () => console.log(`fun5 function`);

// fun5();

// let fun6 = v1 => console.log(v1);
// // let fun6 = (v1) => console.log(v1);
// // let fun6 = v1 => {console.log(v1)};
// // let fun6 = (v1) => {console.log(v1)};

// fun6(10);


// asynchronous JS - non-blocking JS 

// console.log('one');

// // setTimeout(arg1, arg2);
// // setTimeout(callback function, MS);
// // setTimeout(() => { }, 2000);

// setTimeout(() => {
//     console.log('two');
// }, 2000);

// console.log('three');

// // async issue 
// let fun = () => {
//     setTimeout(() => {
//         return { message: `fun function` };
//     }, 2000);
// }
// console.log(`start`);
// let getFun = fun();
// console.log(getFun.message);

// async issue - solution 1 callback 

let fun = (arg) => {
    setTimeout(() => {
        arg({ message: `fun function` });
    }, 2000);
}

console.log(`start`);

fun((abc) => {
    console.log(abc.message);
});












