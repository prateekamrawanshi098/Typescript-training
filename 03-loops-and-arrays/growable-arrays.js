"use strict";
let spotsTwo = ["Golf", "Cricket", "baseBall"];
console.log("Initial Array");
for (let temp of spotsTwo) {
    console.log(temp);
}
spotsTwo.push("Tennis");
spotsTwo.push("BascketBall");
console.log("Later Array");
for (let temp of spotsTwo) {
    console.log(temp);
}
