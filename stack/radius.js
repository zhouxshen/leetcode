/*
 * @Author: zhouheping
 * @Date: 2020-07-02 09:06:00
 * @LastEditTime: 2020-07-02 10:31:57
 * @LastEditors: Please set LastEditors
 * @Description: 将10进制转化为2进制
 * @FilePath: /leetcode/stack/radius.js
 */ 

function ten2two(n) {
  const result = [];
  while (n > 1) {
    result.push(n % 2);
    n = parseInt(n / 2);
  }
  result.push(n);
  let string = '';
  for (let i = result.length - 1; i >= 0; i -= 1) {
    string += result[i]
  }
  return Number(string);
}

console.log(ten2two(35));
