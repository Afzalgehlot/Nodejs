
// Q.1 === find max
// let arr = [12,32,49,77,43];
// let max = 0 ;
// for(let i=0;i<arr.length;i++){
// if(arr[i] > max){
//    max = arr[i]
// }
// }

// console.log(max);

// *****************

// Q.2 find minimum

// let findMini = [12,9,49,77,43];
// let mini =findMini[0];
// for(let i=1;i<findMini.length;i++){
//     if(findMini[i] < mini){
//       mini = findMini[i];
//     }
// }
// console.log(mini);

// **************

// Q.3 find odd

// let findOdd= [12,9,49,77,43];
// let count = 0;
// for(let i=0;i<findOdd.length;i++){
//     if(findOdd[i]%2===1){
//         count++;
//     }
// }
// console.log(count);

// ******************

// Q.4 find even

// let findeven= [12,9,4,78,43];
// let count = 0;
// for(let i=0;i<findeven.length;i++){
//     if(findeven[i]%2===0){
//         count++;
//     }
// }
// console.log(count);

// **************************

// Q.5 find last element

// let lastElement = [12,9,4,78,43];
// let last = lastElement[lastElement.length-1]
// console.log(last);

// *********************

// Q.6 first element

// let firstElement = [12,9,4,78,43];
// let first = firstElement[0];
// console.log(first);

// *************************

// Q.7 find second Largest

// let secondLargeNumber  = [23,43,74,23,65,78];
// let largest = secondLargeNumber[0];
// let secLargest = secondLargeNumber[0];
// for(let i=0; i<secondLargeNumber.length; i++){
//     if(secondLargeNumber[i] > largest){
//         secLargest = largest;
//         largest = secondLargeNumber[i];
//     }else if(secondLargeNumber[i] > secLargest){
//         secLargest = secondLargeNumber[i];
//     }
// }
// console.log(secLargest);

// ***************

// Q.8 find second lowest

// let secondLowestNumber  = [23,43,74,19, 18,65,78];
// let lowest = secondLowestNumber[0];
// let seclowest = secondLowestNumber[0];
// for(let i=0; i<secondLowestNumber.length; i++){
//     if(secondLowestNumber[i] < lowest){
//         seclowest = lowest;
//       lowest = secondLowestNumber[i];
//     }else if(secondLowestNumber[i] < seclowest){
//      seclowest = secondLowestNumber[i];
//     }
// }
// console.log(seclowest);

// ****************

    // Q.9 find average 

    // let findAverage = [23,34,20,23];
    // let average = 0;
    // for(let i = 0; i<findAverage.length; i++){
    //     let curruntNum = findAverage[i];
    //     average += curruntNum;
    //     average =  average / findAverage.length
    // }
    // console.log(average);

    // *******************

    // Q.10 find repeated number

    let repeatedNumber = [2,3,2,4,4,2,3,5,6,3,3,3,4,4,4];
    let repeated = 0;
    for(let i = 0; i < repeatedNumber.length; i++){
        if(repeatedNumber[i] < 9){
            repeated = repeatedNumber[i]
        }
    }
    console.log(repeated);