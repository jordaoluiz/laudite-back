const router = require('express')();
 const authController = require('../controllers/adController');

 // => Definindo as rotas de autenticação

 router.post('/auth', authController.loginAD); //{POST} localhost:3000/api/ad/login

 module.exports = router;