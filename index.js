// #region Two Sum
/****************************************************************
Two Sum

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

@param {number[]} nums
@param {number} target
@return {number[]}

***************************************************************/
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
};
// #endregion

// #region Richest Customer Wealth
/* 
Richest Customer Wealth
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }

    if (total > max) max = total;
    total = 0;
  }
  return max;
};
// #endregion

// #region Roman to Integer
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
*/

/**
 * @param {string} s roman string
 * @return {number}
 */
 var romanToInt = function(s) {
  let answer = 0;
  let romanString = s;
  const romanChars = {
    I: 1,
    V: 5, 
    X: 10, 
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  
  for (let i = 0; i < romanString.length; i++){
    let char = romanString[i];
     
    let nextChar = romanString[i + 1]
    let currentNumber = romanChars(char);
    let nextNumber = romanChars(nextChar);

    if(currentNumber < nextNumber && nextNumber !== 0){
        answer -= currentNumber;
    } else {
        answer += currentNumber;
    }
  }
  
  return answer;
};
// #endregion