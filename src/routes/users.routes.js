const { Router} = require("express"); 

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRouter = Router();

const usersController = new UsersController();

userRouter.post("/", usersController.create);
userRouter.put("/", ensureAuthenticated, usersController.update);

module.exports = userRouter;   // Exporting to those who want to use this file can use.
