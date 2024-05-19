"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = require("../controllers/dataController");
const dataValidators_1 = require("../middleware/dataValidators");
const dataRouter = (0, express_1.Router)();
dataRouter.post("/", dataValidators_1.dataValidationRules, dataController_1.createUser);
dataRouter.put("/:id", dataValidators_1.dataValidationRules, dataController_1.updateUser);
dataRouter.delete("/:id", dataController_1.deleteUser);
exports.default = dataRouter;