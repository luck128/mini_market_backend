const express = require('express');
const router = express.Router();
const { getHealth } = require('../controllers/health');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/products');

/**
 * @desc Rota 'PRODUCTS' para manipulação dos produtos da Loja
 * @access Public
 */
router.route('/products')
    .get(getProducts);

router.route('/products/:id')
    .get(getProduct)

router.route('/products')
    .post(createProduct);

router.route('/products')
    .put(updateProduct);

router.route('/products')
    .delete(deleteProduct);

/**
 * @desc Rota para checagem da saúde da API
 * @access Public
 */
router.route('/')
    .get(getHealth)

module.exports = router;
