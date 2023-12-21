// Function: reverseNumber
// Description: Reverses the digits of a given number.
/*
function reverseNumber(num) {
    let rev = num.toString().split('').reverse().join('');
    return parseInt(rev);
}

// Function: fakeBinary
// Description: Converts each digit in a given string to '1' if it's greater than or equal to 5, and '0' otherwise.
function fakeBinary(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        result += parseInt(x[i]) >= 5 ? '1' : '0';
    }
    return result;
}

// Function: DNAStrand
// Description: Converts DNA strand characters ('G', 'T', 'A', 'C') to their complementary pairs.
function DNAStrand(dna) {
    let result = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'G') {
            result += 'C';
        } else if (dna[i] === 'T') {
            result += 'A';
        } else if (dna[i] === 'A') {
            result += 'T';
        } else if (dna[i] === 'C') {
            result += 'G';
        }
    }
    return result;
}

// Function: countPositivesSumNegatives
// Description: Counts positive numbers and calculates the sum of negative numbers in an array.
function countPositivesSumNegatives(input) {
    let highNum = 0;
    let sumNegNum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > highNum) {
            highNum = input[i];
        }

        if (input[i] < 0) {
            sumNegNum += input[i];
        }
    }
    return [highNum, sumNegNum];
}

// Function: summation
// Description: Calculates the sum of all integers from 1 to a given number.
function summation(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

// Function: correct
// Description: Replaces certain characters in a string with correct substitutions.
function correct(string) {
    let correct = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '5' || string[i] === '0') {
            correct += 'O';
        } else if (string[i] === '1') {
            correct += 'I';
        } else {
            correct += string[i];
        }
    }
    return correct;
}

// Function: areaOrPerimeter
// Description: Calculates the area or perimeter of a rectangle based on whether it's a square or not.
function areaOrPerimeter(l, w) {
    let result;
    if (l === w) {
        result = l * w; // Area of a square
    } else {
        result = 2 * (l + w); // Perimeter of a rectangle
    }
    return result;
}

// Function: disemvowel
// Description: Removes vowels from a given string.
function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newWrd = '';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            newWrd += str[i];
        }
    }
    return newWrd;
}

// Function: feast
// Description: Checks if the first character of two strings is the same.
function feast(beast, dish) {
    return beast[0] === dish[0];
}

// Function: findMiddleCharacter
// Description: Finds the middle character(s) of a string.
function findMiddleCharacter(str) {
    let midNum = Math.floor(str.length / 2);
    let midChar = (str.length % 2 === 0) ? str[midNum - 1] + str[midNum] : str[midNum];
    return midChar;
}

// Function: boolToWord
// Description: Converts a boolean value to "Yes" or "No".
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}

// Function: sumArray
// Description: Calculates the sum of an array excluding the smallest and largest numbers.
function sumArray(array) {
    let newArr = array.sort((a, b) => a - b);
    newArr.pop();
    newArr.shift();
    let sum = newArr.reduce((acc, num) => acc + num, 0);
    return sum;
}

// Function: count
// Description: Counts the occurrences of each character in a string.
function count(string) {
    let occur = {};
    for (let i = 0; i < string.length; i++) {
        if (occur[string[i]]) {
            occur[string[i]]++;
        } else {
            occur[string[i]] = 1;
        }
    }
    return occur;
}

// Function: min
// Description: Finds the minimum value in an array.
function min(list) {
    let minNum = list.sort((a, b) => a - b);
    return minNum[0];
}

// Function: max
// Description: Finds the maximum value in an array.
function max(list) {
    let maxNum = list.sort((a, b) => a - b);
    return maxNum[maxNum.length - 1];
}

// Function: greet
// Description: Calls another function "x" that logs "Hey".
function greet() {
    x();
}

// Function: findNumber
// Description: Finds the first number greater than 2 in an array.
function findNumber(numbers) {
    const found = numbers.find(num => num > 2);
    return found;
}

// Function: bmiCategory
// Description: Determines the BMI category based on weight and height inputs.
function bmiCategory(weight, height) {
    let calBmi = weight / (height * height);
    if (calBmi <= 18.5) {
        console.log("Underweight");
    } else if (calBmi <= 25) {
        console.log("Normal");
    } else if (calBmi <= 30) {
        console.log("Overweight");
    } else if (calBmi > 30) {
        console.log("Obese");
    }
}

// Function: filterList
// Description: Filters out non-number elements from an array.
function filterList(l) {
    let arr = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            arr.push(l[i]);
        }
    }
    return arr;
}

// Function: findAverage
// Description: Calculates the average of numbers in an array and rounds up to the nearest integer.
function findAverage(array) {
    if (array.length === 0) {
        console.log(0);
    } else {
        let sum = array.reduce((acc, num) => acc + num, 0);
        let avgNum = sum / array.length;
        return Math.ceil(avgNum);
    }
}

// Function: evenOrOdd
// Description: Checks if a number is even or odd and returns the corresponding string.
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Function: descendingOrder
// Description: Sorts the digits of a number in descending order.
function descendingOrder(n) {
    let rev = n.sort((a, b) => a - b);
    return rev.reverse();
}

// Function: arrayDiff
// Description: Finds the difference between two arrays.
function arrayDiff(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        let found = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            arr.push(a[i]);
        }
    }
    return arr;
}

// Function: duplicateEncode
// Description: Encodes a string by replacing characters with '(' if they are repeated and ')' otherwise.
function duplicateEncode(word) {
    let unique = '';
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
            unique += '(';
        } else {
            unique += ')';
        }
    }
    return unique;
}

// Function: findOdd
// Description: Finds the only odd occurring number in an array.
function findOdd(A) {
    let result;
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            result = A[i];
            break;
        }
    }
    return result;
}

// Function: validatePIN
// Description: Validates a PIN to have either 4 or 6 digits and contain only numeric characters.
function validatePIN(pin) {
    let result = true;
    if (pin.length !== 4 && pin.length !== 6) {
        result = false;
    }
    for (let i = 0; i < pin.length; i++) {
        if (isNaN(pin[i])) {
            result = false;
        }
    }
    return result;
}

// Function: removeEveryOther
// Description: Removes every other element from an array.
function removeEveryOther(arr) {
    let newArr = arr.filter((num, index) => index % 2 === 0);
    return newArr;
}

// Function: check
// Description: Checks if a given element exists in an array.
function check(a, x) {
    let found = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            found = true;
            break;
        } else {
            found = false;
        }
    }
    return found;
}

// Function: towerBuilder
// Description: Builds a tower with a given number of floors using asterisk characters.
function towerBuilder(nFloors) {
    let star = "";
    for (let i = 0; i < nFloors; i++) {
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        star += "\n";
    }
    return star;
}

// Test the towerBuilder function

function rentalCarCost(d) {
    let rentPerDay=40;
      let totalRent=0;
      if(d<3){
        totalRent=rentPerDay*d
      }
    else if(d>=3 && d<7){
      totalRent=(rentPerDay*d)-20;
    }
      else{totalRent=(rentPerDay*d)-50;}
      return totalRent;}
 */
//return the total number of smiling faces in the array

// function countSmileys(arr) {
//     let validSmile=[':)' ,':D' ,';-D' ,':~)'];
//      let count=0;
//      for(let i=0;i<arr.length;i++){
//        for(let j=0;j<validSmile.length;j++){
//          if(arr[i]===validSmile[j]){
//            count++
//          }
//        }
//      }
//      return count;
//    }
//    console.log(countSmileys([':)', ';(', ';}',':-D']))
// function findUniq(arr) {
//     let unique;
//       arr.find((a,b)=>{
//    if(a!=b){
//           unique=b;
//         }
//       })
//       return unique;
//     }
//     console.log(findUniq[1,1,1,1,1,2])


// const reverseSeq = n => {
//     let arr=[]
//     for(let i=n;i>0;i--){
//   arr.push(i) }
//     console.log(arr)
//   };
//   reverseSeq(5)

// function findNeedle(haystack) {

//     for(let i=0;i<haystack.length;i++){
//       if(haystack[i]==="needle"){
//         console.log(`found the needle at position ${i}`)
//       }
//     }     findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// function sumStr(a,b) {
//     let sum=0;
//     if(a===""||b===""){
//       sum+=0;
//     }
//     else{sum=parseInt(a)+parseInt(b)}
//     return sum;
//   }
// //   console.log(sumStr("3","4"))
    
// function getSum(a, b)
// {
// let sum=0;
// if(a===b){
//   sum=a;
// }
// else{sum=eval(a+b)}
// return sum;
// }
// console.log(getSum(471,223))
    
// function solution(str, ending){
//     let found=false;
//       let newStr=str.slice(-ending.length);
//       if(ending===newStr){
//         found=true;
//       }

//       if(ending===''){
//         found=true;
//       }
//     return found;
//     }
//     console.log(solution('abc',''))

// var uniqueInOrder=function(iterable){
//     let newArr=[];
     
//      for(let i=0;i<iterable.length;i++){
//        if(iterable[i]!==iterable.slice(1,i)){
//          newArr.push(iterable[i])
//        }
//      }
     
//      return newArr;
//    }
//    console.log(uniqueInOrder('AAAABBBCCDAABBB'))
   


// function squareSum(numbers){
//     let sum=0;
//       for(let i=0;i<numbers.length;i++){
//         sum+=numbers[i]*numbers[i]
//       }
      
//       return sum;
      
//     }

//     console.log(squareSum([1,2,2]))

// function sumTwoSmallestNumbers(numbers) {  
//     let arr=numbers.sort((a,b)=>a-b);
//       return arr[0]+arr[1];
//     }
//     console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))


// function friend(friends){

//     let frnd=[];
      
//       for(let i=0;i<friends.length;i++){
//         if(friends[0].length===friends[i].length){
//           frnd.push(friends[i])
//         }
//         else{return frnd=friends[0]}
//       }
//       return frnd;
//     }
//     console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))

// function add(a, b) {
//     return (BigInt(a) + BigInt(b)).toString();
// }

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
// function numberToString(num) {
//   let arr=toString(num);
//   return arr;
//     }
//     console.log(numberToString(123))

// function toJadenCase(sentence) {
//     let sentence1=sentence.split(' ');

//     sentence1.map(word=>{wrod[0].toUpperCase()+word.slice(1)});
//     return sentence1.join("")

//     }
    
//     const originalSentence = "How can mirrors be real if our eyes aren't real";
//     const jadenCasedSentence = toJadenCase(originalSentence);
    
//     console.log(jadenCasedSentence);

// function points(games) {
//     let points1=0;
//       for(let i=0;i<games.length;i++){
//         let gaming=games[i].split('')
//         gaming.splice(1,1);
//         console.log(gaming)
//         if(gaming[0]>gaming[1]){
//           points1+=3;
//         }
//         else if(gaming[0]<gaming[1]){
//           points1+=0
//         }
//         else{points1+=1}
        
//       }
//       return points1;
//     }
//     console.log(points(["3:1", "2:2", "0:1"]))

// function reverseWords(str) {
//     let newStr;
//      for(let i=0;i<str.length;i++){
//        let word=str[i]
//        newStr+=word;
//      }
//      return newStr;
//    }
//    console.log(reverseWords("This is an example!"))

// function reverseWords(str) {
//     let newStr = '';

//     for (let i = 0; i < str.length; i++) {
//         let word = str[i].split('').reverse().join('');
//         newStr += word + ''; // Add a space between reversed words
//     }

//     return newStr
// }

// // console.log(reverseWords("This is an example!"));

// function solution(nums){
//     if(typeof nums===null){
//       return []
//     }
    
//   return nums.sort((a,b)=>a-b)
    
    
// //   }

// function doubleChar(str) {
//     let newWord=[];
//       for(let i=0;i<str.length;i++){
//         newWord.push(str[i]+str[i])
//       }
//       return newWord.join('');
//     }
//     console.log(doubleChar("Hey"))


// function abbrevName(name){

//     let name1=name.split(" ");
//       let result=[]
//       for(let i=0;i<name1.length;i++){

// result.push(name1[i][0].toUpperCase())


//       }
      
// return result.join('.')
    
//     }
//    console.log(abbrevName("chinmaya kumar"))


// function findDifference(a, b) {
//     let aResult=1;
//     let bResult=1;
    
//     for(let i=0;i<a.length;i++){
//       aResult*=a[i]
//     }
//     for(let i=0;i<b.length;b++){
//       bResult*=b[i]
//     }
    
//     let finalResult=[aResult,bResult];
    
//     let sortResult=finalResult.sort((a,b)=>a-b);
    
//     let resultS=sortResult[0]-sortResult[1];;
//     return resultS;
    
  
    
//   }
  
//   console.log(findDifference([2, 2, 3], [5, 4, 1]))



