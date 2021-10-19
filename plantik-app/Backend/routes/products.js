const {Router} = require('express');
const router = Router();


const ProductController = require("../controllers/products");

router.post(
    '/add', 
    ProductController.addProduct
);

module.exports = router;