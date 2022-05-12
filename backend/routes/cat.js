const express = require("express");
const { getCatBreedsBySearch, getAllCats, getCatById } = require("../controllers/cat");

const router = express.Router();

router.route("/getCatByBreedSearch").post(getCatBreedsBySearch);
router.route("/getAllCats").get(getAllCats);
router.route("/getCatById/:id").get(getCatById);

module.exports = router;