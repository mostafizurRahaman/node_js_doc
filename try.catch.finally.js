const myPromise = new Promise((resolve, reject) => {
   const user = { id: 1, name: "Ratul hossain" };
   if (!user.id) {
      reject({ result: "Promise not resolve" });
   } else {
      setTimeout(() => {
         resolve(user);
      }, 1000);
   }
});

// myPromise.then(res => console.log(res)).catch((err)=> console.log(err));

const getUsers = async () => {
   try {
      undefined.find();
      const res = await myPromise;
      console.log(res);
      // throw new Error("Python is undefined");
   } catch (err) {
      ErrorHanlder(err);
   }
};

const ErrorHanlder = (err) => {
   const { name, message, cause, stack } = err;
   console.log(name);
   console.log(message);
   console.log(cause);

   // console.log("satack" + stack);
};

getUsers();
