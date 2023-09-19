module.exports.getProducts = (req, res, next) => {
   res.send("I get my products");
};

module.exports.saveProducts = (req, res, next) => {
   const { baseUrl, ip, headers, body, params, query } = req;
   console.log(baseUrl, ip, headers, body, params, query);
   res.send("I save a new products");
};

module.exports.updateProducts = (req, res, next) => {
   res.send("I udpated my products");
};

module.exports.deleteProducts = (req, res, next) => {
   res.send("I deleted my products ");
};

module.exports.getProductsById = (req, res, next) => {
   const { id } = req.params;
   res.send("I get my products by " + id);
};
module.exports.updateProductsById = (req, res, next) => {
   const { id } = req.params;
   res.send("I update products by " + id);
};
module.exports.deleteProductsById = (req, res, next) => {
   const { id } = req.params;
   res.send("I delete products by " + id);
};
