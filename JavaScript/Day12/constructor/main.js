"use strict";

function User(arg1, arg2) {
  let name = arg1;
  let age = arg2;
  let sayHello = function () {
    console.log(`User1, ${name}, ${age}`);
  };

  sayHello();
}

User1("홍길동", 20);
let obj1 = new User1("홍길동", 30);
