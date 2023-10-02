//  require multer :
const multer = require("multer");
const path = require("path");

/* //  create uploader middleware:  dest means destination location
const uploader = multer({ dest: "images/" });
 */

const storage = multer.diskStorage({
   destination: "images/",
   filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "_" + file.originalname);
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
         cb(null);
      }
   },
   limits: {
      fileSize: 1000000,
   },
});

module.exports = uploader;
