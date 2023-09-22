const colors = require("colors");

module.exports.errorHandler = (err, req, res, next) => {
   res.status(401).send({
      name: err.name,
      message: err.message,
      type: err.type,
   });
   console.log(colors.blue(err));
   //  others code here:
};
