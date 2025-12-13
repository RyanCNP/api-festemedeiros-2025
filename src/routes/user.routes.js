const { Router } = require('express');
const controller = require('../controllers/user.controller');

const router = Router();

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;