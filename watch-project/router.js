import { Router } from "express";
import * as controller from "./controller.js"
import Auth from './Auth.js'
const router=Router();
router.route("/addadmin").post(controller.AddAdmin);
router.route("/addcategory").post(controller.AddCategory);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:username").get(controller.forgotUsername);
router.route("/adminpassword").patch(controller.forgotAdminpwd);
router.route("/categorygetdata").get(controller.Category_getdata);
router.route("/deletecategory/:id").delete(controller.deleteCategory);

export default router;