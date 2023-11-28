const express= require('express');
const router = express.Router();


const UsersController= require('../Controllers/UsersController');


router.post("/registration",UsersController.registration);
router.post("/update-user/:id",UsersController.updateUser);
router.get("/delete-user/:id",UsersController.deleteUser);
router.get("/read-user",UsersController.readUser);
router.get("/read-user-by-id/:id",UsersController.readUserById);



module.exports=router;