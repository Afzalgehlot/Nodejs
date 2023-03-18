// const fruits = ["apple","banana","orange"];
// let check = fruits.includes("orange");
// console.log(check);

function sum(arr){
let num = 0;
for(let value of arr){
    if(value % 2 === 0){
        num += value;
    }
}
return num;
}
let ans = sum([1,2,3,4,5,6,7,8,9]);
console.log(ans);