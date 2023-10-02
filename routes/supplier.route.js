const express = require('express'); 
const router = express.Router(); 
const supplierController = require('../controller/supplier.controller')


router.route('/').get()