//
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minnum(a,b,c){
//     if (a>b && a>c){
//         if (b>c){
//             console.log(a, b, c)
//         } else{
//             console.log(a,c,b)
//         }
//     } else if (b>a && b>c){
//         if (a>c){
//             console.log(b, a, c)
//         } else {
//             console.log(b, c, a)
//         } else {
//             if (a>b){
//                 console.log(c, a, b)
//             }else {
//                 console.log(c, b ,a)
//             }
//         }
//     }
// }
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxnum(a,b,c){
//     if (a<b && a<c){
//         if (b<c){
//             console.log(a, b, c)
//         } else{
//             console.log(a,c,b)
//         }
//     } else if (b<a && b<c){
//         if (a>c){
//             console.log(b, a, c)
//         } else {
//             console.log(b, c, a)
//         } else {
//             if (a>b){
//                 console.log(c, a, b)
//             }else {
//                 console.log(c, b ,a)
//             }
//         }
//     }
// }
// - створити функцію яка повертає найбільше число з масиву


// function maxnumarr(num){
//    let max=num[0]
//     for (const numElement of num) {
//         if (numElement > max ){
//             max= numElement
//         }
//     }
//     return max
//}
// - створити функцію яка повертає найменьше число з масиву
//
// function minnum(num){
//     let min=num[0]
//     for (const minElement of min) {
//         if (minElement < min){
//             min= minElement
//         }
//
//     }
//     return min
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sum(numbs){
//     let result= 0;
//     for (const numb of numbs) {
//         result=result +numb;
//     }
//     return result;
// }

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function  midarray(array){
//     let sum=0;
//     for (const arrayElement of array) {
//         sum +=arrayElement;
//     }
//     return sum/array.length
// }


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function array(nums){
//     let max=nums[0];
//     let min=nums[0];
//     for (const num of nums) {
//         if (num>max){
//             max=num
//         }
//         if (num<min){
//             min=num
//         }
//     }
//     console.log(max)
//     return min;
//
// }

// - створити функцію яка заповнює масив рандомними числами

// function randomizer(arr){
//    for (let i=0; i<10; i ++){
//        arr[i]= math.round(math.random()*100)
//
//     }
//    return arr
// }

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(array,limit){
//     for (let i=0; i<10; i++){
// array[i]=math.round(math.random()*limit)
//     }
//     return array;
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse(arr){
//     let newarray=[];
//     for (let i = newarray.length - 1; i >= 0; i--) {
//         const newarrayElement = newarray[i];
//     }
//     return newarray
//


}