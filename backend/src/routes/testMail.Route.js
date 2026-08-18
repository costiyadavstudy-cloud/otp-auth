import express from "express";
import testMail from "../controllers/testMail.Controller.js";

const router = express.Router();

router.get("/test-mail", testMail);

export default router;