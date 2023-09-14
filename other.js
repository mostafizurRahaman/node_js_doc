const add = (num1, num2) => {
   return num1 + num2;
};

const sub = (num1, num2) => {
   if (num1 > num2) {
      return num1 - num2;
   } else {
      return num2 - num1;
   }
};

module.exports = { add, sub };
