// const colors = require("colors");

//?START
console.log("mostaifizur rahaman");
setTimeout(() => {
   console.log("ami mostafiz async");
}, 2000);
console.log("Ratul hossain");

// Call back fuction :
setTimeout(() => {
   const user = { id: 1, name: "Mostafiz" };

   if (user) {
      //  load user products by depending on user id :
      setTimeout(() => {
         const products = [
            { id: 1, name: "tshirt" },
            { id: 2, name: "shirt" },
         ];
         console.log(products);
         if (products) {
            setTimeout(() => {
               const prices = [100, 200, 300];
               console.log(prices);
            }, 200);
         }
      }, 500);
      console.log(user);
   }
}, 1000);
//  Promise Making or Define:

const myPromise = new Promise((resolve, reject) => {
   const user = true;
   if (!user) {
      reject({ result: "now found", success: false });
   } else {
      setTimeout(() => {
         resolve({ id: 1, name: "jhone" });
      }, 500);
   }
});

//  Promise Consuming :

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

const userIds = [1, 2, 3, 4, 5, 6];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
   userData.push(myPromise);
}

Promise.all(userData)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));

console.log("userData after promise", userData);

// handle promise with async/ await:

const friendPromise = new Promise((resolve, reject) => {
   const gifts = { id: "4", gift: "headphone" };
   if (gifts.id) {
      setTimeout(() => {
         resolve(gifts);
      }, 5000);
   } else {
      reject({ result: "is't success" });
   }
});

const friends = [1, 2, 3];
const myGiftPromise = [];
for (let i of friends) {
   myGiftPromise.push(friendPromise);
}

const getData = async () => {
   const res = await Promise.all(myGiftPromise);
   console.log(res);
};

getData();

// ----------------------- load

const getPosts = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
   const data = await res.json();
   console.log(data);
};

getPosts();
