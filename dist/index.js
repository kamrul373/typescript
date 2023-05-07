"use strict";
var x = "Hello World";
console.log(x, "typescript");
// string //array
const user = [1, "abul_1", 880171222];
console.log(user);
const array = ["ami", "tumi", "amara"];
// object
const userInfo = {
    name: "kamrul hasan",
    role: "Frontend developer",
    company: "Lemon hive",
};
console.log(userInfo);
// function 
const add = (a, b) => a + b;
const account = {
    name: "kamrul",
    id: 2,
    balance: 120,
    deposit(money) {
        return `Your new balance is ${this.balance + money} taka`;
    }
};
const newbalance = account.deposit(30);
console.log(newbalance);
