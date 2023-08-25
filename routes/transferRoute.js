const { Router } = require("express");
const transfersController = require("../controller/transferController");
const { authorizationMiddlewareAll, authorizationMiddlewareApprover } = require("../middleware/authorizationMiddleware")
 

const transfersRouter = Router();

transfersRouter.use((req, res, next) => {
  console.log("transfer middleware");
  next();
});

// HTTP Request Transfer

// POST Transfer
transfersRouter.post("/", authorizationMiddlewareAll, transfersController.createTransfer);

// GET All Transfers
transfersRouter.get("/", authorizationMiddlewareAll, transfersController.getAllTransfers);

// PUT Transfer
transfersRouter.put("/:id", transfersController.updateTransfer);

// PATCH status
transfersRouter.patch("/:id",authorizationMiddlewareApprover, transfersController.updateTransferStatus);

// DELETE Transfer
transfersRouter.delete("/:id", transfersController.deleteTransfer);

module.exports = transfersRouter;
