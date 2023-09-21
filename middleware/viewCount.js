let counter = 0;
const viewCount = (req, res, next) => {
   counter++;
   console.log(counter);
   // res.send(" i send data "); // send the resposne directly
   next(); // call the next middleware:
};

module.exports = viewCount;
 