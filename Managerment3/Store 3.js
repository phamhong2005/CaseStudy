class StoreFootwear{
    ListProduct;
    constructor() {
        this.ListProduct = []
    }
    addProductFootwear(newProduct){
        this.ListProduct.push(newProduct);
    }
    findAllProduct(){
       return this.ListProduct;
    }
    remove(index){
        this.ListProduct.splice(index,1)
    }
    EditProduct(index,newProduct){
        this.ListProduct[index] = newProduct
    }
}