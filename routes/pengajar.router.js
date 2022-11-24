const express = require("express");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../controllers/auth.controller");

const {
  getAllPengajar,
  getPengajarByID,
  addPengajar,
  deletePengajarByID,
  updatePengajarByID,
  deleteAllPengajar,
} = require("../controllers/pengajar.controller");

router.get("/", getAllPengajar);
router.get("/:id", getPengajarByID);
router.post("/",verifyAdmin, addPengajar);
router.delete("/:id",verifyAdmin, deletePengajarByID);
router.put("/:id",verifyAdmin, updatePengajarByID);
router.delete("/all/:id", deleteAllPengajar);

module.exports = router;
