const router = require("express").Router();
const converterHandler = require("../controllers/converterHandler");
router.route("/").post(converterHandler);
module.exports = router;
