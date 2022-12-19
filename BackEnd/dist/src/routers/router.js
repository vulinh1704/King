"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogRouter_1 = require("./blogRouter");
const router = (0, express_1.Router)();
router.use('/blogs', blogRouter_1.blogRouter);
//# sourceMappingURL=router.js.map