//  require multer :
const multer = require("multer");
const path = require("path");

/* //  create uploader middleware:  dest means destination location
const uploader = multer({ dest: "images/" });
 */

const storage = multer.diskStorage({
   destination: "images/",
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileName = uniqueSuffix + "_" + file.originalname;
      cb(null, fileName);
   },
});

const uploader = multer({
   storage: storage,
   fileFilter: (req, file, cb) => {
      const supported = /png|jpg|jpeg/;
      const extension = path.extname(file.originalname);
      if (supported.test(extension)) {
         cb(null, true);
      } else {
         cb(new Error("File extension not matched"));
      }
   },
   limits: {
      fileSize: 50000000,
   },
});

//  export uploader
module.exports = uploader;
