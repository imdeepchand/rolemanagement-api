const express = require("express");
const app = express();
const auth = require("../helpers/jwt.helper");
const {
  store,
  getImage,
  updateById,
  deleteById,
} = require("../controllers/image.controler");
const { uploadImg } = require("../midelware/upload.midel");
const unlinkImage = require("../midelware/fs.midelware");
// Express route
const imageRouter = express.Router();

//image
imageRouter.post("/image", auth, uploadImg, store);
imageRouter.post("/update/:id", auth, unlinkImage, uploadImg, updateById);
imageRouter.post("/delete/:id", auth, unlinkImage, deleteById);
imageRouter.get("/getimage", auth, getImage);
module.exports = imageRouter;
