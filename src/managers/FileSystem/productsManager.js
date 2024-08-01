const fs = require('fs');
const { stringify } = require('querystring');
const PATH = '../dbjson/productsDb.json';

class ProductsManagerFs {
    constructor(){
        this.path = PATH;
    }
    readProducts = async () =>{
        try{
        if(fs.existsSync(PATH)){
            const productsJson = await fs.promises.readFile(PATH, 'utf-8')
            const productsJs = JSON.parse(products.Json)
            return productsJs

        }}catch(error){
        return [];
        }
    }  

    getProducts = async () =>{
        try{
            const products = await this.readProducts()
            return products;
        }catch(error)
        {console.log(error)}
    }
    
    

    getProduct = async () =>{
        try{
            const product = await this.readProducts();
            return product;
        }catch(error){
            console.log(error);        
        }
    }    



    createProducts  = async newProduct =>{
        try{
            const products = await this.readProducts();
            if(products.length===0){
                newProduct.id =1
            }else{
                newProduct.id = products[products.length - 1].id + 1;
            }
            products.push(newProduct);

            await fs.promises.writeFile(PATH, JSON.stringify(products, null, '\t')); //sobreescribe el archivo  
            return 'se agrego el producto';

        }catch(error){
            console.log(error);
        }
    }  




    deleteProducts  = async () =>{}  
    updateProducts  = async () =>{}  
}
module.exports = ProductsManagerFs;