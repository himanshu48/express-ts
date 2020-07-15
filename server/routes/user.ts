import express from "express";

import * as userService from "../service/user";
 const router = express();


router.get("/", userService.welcomeMsg);

export default router;