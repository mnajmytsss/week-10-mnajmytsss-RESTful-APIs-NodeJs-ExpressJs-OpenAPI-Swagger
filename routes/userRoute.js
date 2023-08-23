const { Router } = require('express');
const userController = require('../controller/userController');

const userRouter = Router();

userRouter.use((req, res, next) => {
  console.log('user middleware');
  next();
});

// HTTP Request User

// POST User
userRouter.post('/', userController.createUser);

// GET All User
userRouter.get('/', userController.getAllUsers);

// DELETE User
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
