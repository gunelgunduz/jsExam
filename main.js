// Task 1:
// Elementləri fərqli tiplər olan bir array yazın (məsələn, number, string, boolean və s.)
// Bu elementin ancaq string tipdə olan elementlərini ekrana və ya console-a çıxarın.
// Acceptance-criteria:
// Array methodlarından istifadə etməyin.
// Loops-lardan hər hansısa birini istifadə edin.

// function printStringElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             console.log(arr[i]);
//         }
//     }
// }

// const mixedArray = [123, "hello", true, "world", 45, false, "Matrix"];
// printStringElements(mixedArray);


// Task 2:
// Elementləri fərqli tiplər olan bir array yazın (məsələn, number, string, boolean və s.)
// Bu elementin ancaq string tipdə olan elementlərini ekrana və ya console-a çıxarın.
// Acceptance-criteria:
// Array methodlarından istifadə etməyin.
// Loops-lardan hər hansısa birini istifadə edin

// function printStringElements(arr) {
//     let i = 0;

//     while(i < arr.length) {
//         if(typeof arr[i] === 'string') {
//             console.log(arr[i]);
//         }
//         i++;
//     }
// }
// const mixedArray = [123, "apple", false, "banana", true, 78, "grape"];
// printStringElements(mixedArray);

// Task 3:
// Elementləri string tipləri olan bir array yazın.
// Əgər elementin hər hansısa bir elementi “Matrix”ə bərabərdirsə, onu bu array-dən silin.
// Acceptance-criteria:
// Array.some(), array.include() - Bu array methodlarini istifadə etməyin.
// Tapşırıq Loops-lardan hər hansısa birini tətbiq etməklə yazılmalıdır.

// function removeMatrix(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Matrix") {
//             arr.splice(i, 1); 
//             i--; 
//         }
//     }
//     return arr;
// }


// const stringArray = ["apple", "Matrix", "banana", "Matrix", "grape"];
// const resultArray = removeMatrix(stringArray);
// console.log(resultArray); 


// Task 4:
// 1-dən 100-ə qədər ədədləri döndürün.Bu ədədlərdən 45-ə çatdıqda loop dayansın və
// console-da “Sonuncu rəqəm 45dir” deyə mesaj çıxsın.
// Acceptance-criteria:
// Array methodlarından istifadə etməyin.
// Loops (while) və condition-lar istifadə edin.

// function countTo45() {

//     let num = 1; 
    
//     while (num <= 100) {
//         console.log(num); 
//         if (num === 45) {
//             console.log("Sonuncu reqem 45dir");
//             break;         
//         }
        
//         num++; 
//     }
// }

// countTo45();


// Task 5:
// Elementləri number tipi olan bir array yazın.Bu array-in elementlərinin uzunluğunu tapin
// və console-da çıxarın. (Məsələn, 108 ədədi 3 rəqəmlidir).
// Acceptance-criteria:
// Array methodlarından istifadə etməyin.
// Tapşırıq Loops-lardan hər hansısa birini tətbiq etməklə yazılmalıdır.

// let arr = [108, 45, 9, 12345, 7, 234];  

// for (let i = 0; i < arr.length; i++) {
//   let number = arr[i];
//   let length = 0;

//   while (number > 0) {
//     number = Math.floor(number / 10);
//     length++;
//   }

//   console.log(`${arr[i]} ədədi ${length} rəqəmlidir`);
// }


// Task 6:
// Tərkibində adam adları olan bir array yazın.
// Daha sonra həmin array-in hər bir elementinin qarşısına “Hello” sözü əlavə edin.
// Nəticəni console-da çıxarın
// Acceptance-criteria:
// Array methodlarından istifadə etməyin.
// Tapşırıq Loops-lardan hər hansısa birini tətbiq etməklə yazılmalıdır

// function greetNames() {
    
//     const names = ["ElAn", "Fidan", "Selcan", "Uzi"];

//     for(let i=0; i < names.length; i++) {
//         console.log("Hello " + names[i]);
//     }
// }
// greetNames();

// Task 7:
// Elementləri ədədlərdən ibarət olan bir array yazın. Bu array-ın içində olan bütün
// ədədlərin cəmini tapın. Nəticəni console-da çıxarın.
// Acceptance-criteria:
// Bu tapşırıqda array methodlarindan (Array.reduce() və s.) istifadə olunmamalıdır.
// Loops-lar istifadə edərək yazın.

// function sumArayElements() {
    
//     const numbers = [10, 20, 30, 40, 50];

//     let sum = 0;

//     for(let i=0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     console.log("Sum Array: " + sum);
// }

// sumArayElements();

// Task 8:
// Yalnız ədədlərdən ibarət bir array yazın.
// Daha sonra array-ın hər bir elementini 2-yə vurun.
// Nəticəni console-da ekrana çıxarın
// Acceptance-criteria:
// Bu tapşırıqda array methodlarindan istifadə olunmamalıdır.
// Loops-lardan birini istifadə edərək yazın

// function multiplyArrayByTwo() {

//     const numbers = [5, 10, 20, 25];

//     for(let i=0; i < numbers.length; i++) {

//         console.log(numbers[i] * 2);
//     }

// }
// multiplyArrayByTwo();]

// Task 9:
// Bir string yazın.
// Bu string-in hərflərindən hər hansısa biri ‘M’ hərfi olarsa console-da success çıxarın.
// Acceptance-criteria:
// Bu tapşırıqda hər hansısa method (built-in functionlar) istifadə olunmamalıdır.
// Loops-lardan birini istifadə edərək yazın.

// function checkForM(string) {

//     for(let i = 0; i < string.length; i++) {
        
//         if(string[i] === 'M') {
        
//             console.log("success");
        
//             return;
//         }
//     }
// }
// checkForM("Hello Matrix");

// Task 10
// Bir array yazın.
// Bu array-in elementlərini sondan əvvələ doğru sıralayın.
// Acceptance-criteria:
// Bu taskda Array.reverse() istifadə etməyin.
// Loops-lardan birini istifadə edərək yazın.

// function reverseArray(arr) {

//     let reversedArray = [];

//     for(let i = arr.length - 1; i >= 0; i--) {

//         reversedArray.push(arr[i]);
//     }

//     console.log(reversedArray);
// }

// reverseArray([1, 2, 3, 4, 5]);