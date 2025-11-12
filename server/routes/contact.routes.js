import express from "express";
import contactCtrl from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";


const router = express.Router();

router.route("/")
.get(authCtrl.requireSignin, contactCtrl.list)
.post(authCtrl.requireSignin, contactCtrl.create)
.delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.removeAll);

router.param("contactId", contactCtrl.contactById);

router.route("/:contactId")
.get(authCtrl.requireSignin, contactCtrl.read)
.put(authCtrl.requireSignin, contactCtrl.update)
.delete(authCtrl.requireSignin, authCtrl.isAdmin, contactCtrl.remove);


export default router;
