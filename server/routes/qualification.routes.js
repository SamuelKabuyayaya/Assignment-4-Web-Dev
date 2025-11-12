import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";
import authCtrl from "../controllers/auth.controller.js";


const router = express.Router();

router.route("/")
.get(authCtrl.requireSignin, qualificationCtrl.list)
.post(authCtrl.requireSignin, authCtrl.isAdmin, qualificationCtrl.create)
.delete(authCtrl.requireSignin, authCtrl.isAdmin, qualificationCtrl.removeAll);

router.param("qualificationId", qualificationCtrl.qualificationById);

router.route("/:qualificationId")
.get(authCtrl.requireSignin, qualificationCtrl.read)
.put(authCtrl.requireSignin, authCtrl.isAdmin, qualificationCtrl.update)
.delete(authCtrl.requireSignin, authCtrl.isAdmin, qualificationCtrl.remove);


export default router;
