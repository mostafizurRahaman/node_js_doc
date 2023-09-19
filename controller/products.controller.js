const products = [
   { id: 1, name: "tshirt" },
   {
      id: 2,
      name: "shirt",
   },
   {
      id: 3,
      name: "gense",
   },
   {
      id: 4,
      name: "pollo tshirt",
   },
   {
      id: 5,
      name: "blesure",
   },
   {
      id: 6,
      name: "cort",
   },
   {
      id: 7,
      name: "sari",
   },
   {
      id: 8,
      name: "panjabi",
   },
   { id: 9, name: "potuya" },
   { id: 10, name: "balis" },
];

module.exports.getProducts = (req, res, next) => {
   const { limit } = req.query;
   res.send(products.slice(0, limit));
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
