//My solution
var letterCombinations = function(digits) {
  if(digits.length === 0) return [];
    const mapping = {
      "2": 'abc',
      "3": 'def',
      "4": "ghi",
      "5": "jkl",
      "6": "mno",
      "7": "pqrs",
      "8": "tuv",
      "9":"wxyz"
    }
    
  if(digits.length === 1) {
    const str = mapping[digits[0]];
    return str.split("");
  };
  let letters = [];
  for(let i = 0; i < digits.length; i++){
    letters.push(mapping[digits[i]].split(""));
  }
  const totalCombinations = letters.reduce((acc, cur) => acc+cur.length, 0);
  
  let combArray = [];
  
  digits.split("").forEach((item, index) => {
    if(combArray.length === 0){
      combArray = [...mapping[item]];
    } else {
      let copy = [...combArray];
      let newCopy = [];
      copy.forEach(c => {
        let combi = mapping[item].split("").map(i => c+i);
        newCopy.push(...combi);
      });
      combArray = [...newCopy];
    }
   
  });
  
  return combArray;
  
    
};
  
console.log(letterCombinations("23")); //["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations("")); //[]
// console.log(letterCombinations("2"));//[a,b,c]


//other solutions better
//Backtracking
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    const n = digits.length;
    
    let output = [];
    let current = [];
    
    function helper (idx = 0) {
        if (idx === n) {
            output.push(current.join(''));
            return;
        }
        
        for (const char of map[digits[idx]]) {
            current.push(char);
            helper(idx + 1);
            current.pop();
        }
    }
    
    helper();
    
    return output;
};
//Another backtracking
/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
    if(!digits.length) return [];
    
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    let result = [];
    
    function permute(string, index) {
        if(index === digits.length) {
            result.push(string);
            return;
        }
        
        for(let x of map[digits[index]]) {
            permute(string+x, index+1);
        }
    }
    permute('', 0);
    return result;
};
//Recursion
var letterCombinations = function(digits) {
    if (digits.length === 0) {
      return [];
    }
    const digitMap = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    };
    if(digits.length > 1) {
      const firstDigit = digits.slice(0, 1);
      const otherDigits = digits.slice(1);
      const otherLetterCombinations = letterCombinations(otherDigits);
      const firstDigitletters = digitMap[firstDigit];
      let resultArr = [];
      firstDigitletters.forEach(item1 => {
        otherLetterCombinations.forEach(item2 => {
          resultArr.push(item1 + item2);
        })
      })
      return resultArr;
    } else {
      return digitMap[digits];
    }
  };