const vendorController = require("../controllers/vendorController");

const router = require("express").Router();

//Add Vendor
router.get("/", vendorController.getVendor);
router.get("/:id", vendorController.getVendorById);
router.post("/", vendorController.addVendor);
router.patch("/:id", vendorController.updateVendor);
router.delete("/:id", vendorController.deleteVendor);
module.exports = router;