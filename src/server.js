const express = require('express');
const userRouter = require('./routes/users.router.js');
const productRouter = require('./routes/products.router.js');
const logger = require('morgan');
const path = require('path');
const cartRouter = require('./routes/cart.router.js')
const { uploader } = require('./utils/multer.js');

const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/public'))
app.use(logger('dev'));

app.use(function(req, res, next){
    console.log('Time: ', Date.now)
    next();
})

//ENDPOINTS: get http://localhost:8080 + algo!
app.post('/', uploader.single('myFile'), (req, res)=>{ //PARA SUBIR ARCHIVOS
    res.send('archivo subido correctamente amigo')
})
app.use('/api/users', userRouter); //INGRESAR A USERS
app.use('/api/products', productRouter); //VER PRODUCTOS
app.use('/api/cart', cartRouter); //VER CARt    

app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).send('error amigo');
})

app.listen(PORT, () => {
    console.log('el servidor esta corriendo en el puerto: ', PORT)
});