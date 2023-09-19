const express = require("express");

//  define a router :
const router = express.Router();

//  define get api with router:

router.get("/", (req, res) => {
   res.send("products founded");
});

router.post("/", (req, res) => {
   res.send("product posted");
});

router.put("/", (req, res) => {
   res.send("product updated");
});

router.patch("/", (req, res) => {
   res.send("product patached");
});

router.delete("/", (req, res) => {
   res.send("product deleted");
});

//  all define router for products id :

// we aslo call multiple method of router.route('/path').get((req,res)=> {}).post((req,res)=>{}).delete((req,res)=>{})

router
   .route("/:id")
   .get((req, res) => {
      const { id } = req.params;
      res.send(`get data for ${id}`);
   })
   .post((req, res) => {
      const { id } = req.params;
      res.send(`post data for ${id}`);
   })
   .delete((req, res) => {
      const { id } = req.params;
      res.send(`delete data for ${id}`);
   });

module.exports = router;
