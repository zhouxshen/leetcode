/*
 * @Author: zhouheping
 * @Date: 2020-07-02 10:51:47
 * @LastEditTime: 2020-07-03 16:00:43
 * @LastEditors: Please set LastEditors
 * @Description: 封装stack类，实现push、pop、peek方法
 * @FilePath: /leetcode/stack/Stack.js
 */ 

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack[this.stack.length] = item;
    return this.stack.length;
  }

  pop() {
    if (this.stack.length === 0) return undefined;
    const item = this.stack[this.stack.length - 1];
    this.stack.length -= 1;
    return item;
  }

  peek() {
    return this.stack[0];
  }
}

const stack = new Stack()
console.log(stack);

stack.push(1);
