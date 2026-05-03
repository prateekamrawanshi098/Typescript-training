"use strict";
let found = true; //explicit typing
let grade = 88.6;
let firstName = "prateek"; // Type interference (automatic) :string now u cannot assign value other than string further
let lastName = "Amrawanshi";
/*
*lets break it
*tsc compiler will generate error here
*but by default tsc will also generate .js file
*So we need to add a compiler flag tsc-noEmitOnError sample-types.ts

found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("Thge grade is " + grade);
console.log("hi " + firstName + " " + lastName);
