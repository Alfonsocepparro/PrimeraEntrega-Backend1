const { Router} = require ('express');
const ProductsManagerFs = require ('../managers/FileSystem/productsManager');
const { get } = require('./users.router');



const router = Router();
const {
    getProducts
} = new ProductsManagerFs();

//config:
router.get('/', async (req, res)=>{
    try{
        const productsDb = await getProducts();
        res.send({status: 'success', data: productsDb}); //devuelve productos

    }catch(error){
        console.log(error)
    }

})

router.post('/', async (req, res)=>{
    try{    
        const {body} = req
        console.log(body);
        res.send('postear productos');
    }catch(error){
        console.log(error);
    }
})

module.exports = router;