import { Router } from "express";
import * as controller from "./controller.js"
import Auth from './Auth.js'
// import multer from "multer";
const router=Router();
router.route("/addadmin").post(controller.AddAdmin);
router.route("/addcategory").post(controller.AddCategory);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:username").get(controller.forgotUsername);
router.route("/adminpassword").patch(controller.forgotAdminpwd);
router.route("/categorygetdata").get(controller.Category_getdata);
router.route("/deletecategory/:id").delete(controller.deleteCategory);
router.route("/getcategorydetails/:id").post(controller.getcategoryfulldata);
router.route("/editcategorydetails/:id").patch(controller.editCategorydetails);
router.route("/addCustomer").post(controller.AddCustomer);
router.route("/customerLogin").post(controller.CustomerLogin);
router.route("/CustHome").get(Auth,controller.customerHome);

///////// Products
router.route("/editproducts/:id").patch(controller.editProdect);
router.route("/addProduct").post(controller.AddProducts);
router.route("/getCatWiseProducts/:category_name").get(controller.getCategoryWisedProduct);
router.route("/getProduct/:id").get(controller.getProduct);
router.route("/deleteproduct/:id").delete(controller.deleteProduct);

// const storage = multer.diskStorage({
//     destination: "./images",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage: storage });
// router.route('/addProduct').post(upload.array( 'images'), controller.AddProducts);
// router.route("/image/:filename").get(controller.SetPath)

export default router;