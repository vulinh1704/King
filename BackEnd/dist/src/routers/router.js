"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const blogRouter_1 = require("./blogRouter");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.use('/blogs', blogRouter_1.blogRouter);
//# sourceMappingURL=router.js.map