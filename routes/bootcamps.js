const express = require("express");
const {
  createBootcamp,
  deleteBootcamp,
  getAllBootcamps,
  getBootcamp,
  updateBootcamp,
} = require("../controllers/bootcamps.controller");
const router = express.Router();

//creating routes
router.route("/").get(getAllBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
