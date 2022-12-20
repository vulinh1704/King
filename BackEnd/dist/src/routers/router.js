"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const categoryRouter_1 = require("./categoryRouter");
const commentRouter_1 = require("./commentRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/category', categoryRouter_1.categoryRouter);
exports.router.use('/comment', commentRouter_1.commentRouter);
//# sourceMappingURL=router.js.map