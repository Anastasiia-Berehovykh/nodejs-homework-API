const express = require("express");

const ctrl = require("../../controllers/auth");

const {auth, validateBody, upload} = require("../../middlewares");
const {schemas} = require("../../models/user");

const router = express.Router();




router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", auth, ctrl.getCurrent);

router.get("/logout", auth, ctrl.logout);

router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;