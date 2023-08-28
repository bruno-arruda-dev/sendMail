"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sendmailController_1 = __importDefault(require("./controllers/sendmailController"));
const router = express_1.default.Router();
router.post('/sendmail', sendmailController_1.default.post);
exports.default = router;
