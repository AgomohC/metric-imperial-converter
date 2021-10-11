const router = require("express").Router();
const converterHandler = require("../controllers/converterHandler");
router.route("/").get(converterHandler);
module.exports = router;
