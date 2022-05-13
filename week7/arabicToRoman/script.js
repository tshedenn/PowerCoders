// Convert arabic numbers to Roman
// Write a function to convert from arabic (normal) numbers to Roman Numerals. The Romans wrote numbers using letters: I, V, X, L, C, D, M. There is no need to be able to convert numbers larger than about 3000.

// Example: 7 returns VII

// Arabic numbers : 1,2,3,4,5...
// Roman numbers : i,ii,iii,iv,v....

let arabicToRoman = num => {
  let romAndArabicPairs = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
 };

 let roman = '';

 for(let key in romAndArabicPairs){
   //console.log(key);
  //  console.log(romAndArabicPairs[key]);
 while(num >= romAndArabicPairs[key]){
   roman += key;
   num -= romAndArabicPairs[key];
   console.log(`num is decreased to ${num}`);
   //console.log(roman);
  }
 }
  console.log(roman);
  return roman;  
}
arabicToRoman(prompt('Enter a number to translate to roman: '));
  // const keyRules = Object.keys(rules);
  // const objectRules = Object.values(rules);
  // console.log(keyRules);
  // console.log(objectRules);
  // 2,3
  // 1+1
  // 1+1+1

  



// let arabicToRoman = () => {     
//   let number = [];
//   let romanNum=[];
//   for(let i= 0;i<10;i++){
//     number.push(i);
//     switch(number[i]){
//       case 1:
//       romanNum='i';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 2:
//       romanNum='ii';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 3:
//       romanNum='iii';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 4:
//       romanNum='iv';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 5:
//       romanNum='v';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 6:
//       romanNum='vi';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 7:
//       romanNum='vii';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 8:
//       romanNum='viii';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 9:
//       romanNum='ix';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//       case 10:
//       romanNum='x';
//       console.log(`Roman conversion of ${i} is ${romanNum}`);
//       break;
//     }
//   }
// }
// arabicToRoman();


// function convertToRoman(num) {
//   var roman = '';
//   var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//   for (var i = 0; i < decimal.length; i++) {
//       while (decimal[i] <= num) {
//           roman += romanNum[i];
//           num -= decimal[i];
          
//       }
//   }
//   return roman;
// }
// convertToRoman(3000);