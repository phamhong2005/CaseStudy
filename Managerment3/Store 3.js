class StoreFootwear{
    ListProduct;
    constructor() {
        this.ListProduct = JSON.parse(localStorage.getItem("ListProduct"))
    }
    addProductFootwear(newProduct){
        this.ListProduct.push(newProduct);
        localStorage.setItem("ListProduct",JSON.stringify(this.ListProduct))
    }
    findAllProduct(){
        this.ListProduct = JSON.parse(localStorage.getItem("ListProduct"))
       return this.ListProduct;
    }
    remove(index){
        this.ListProduct.splice(index,1)
        localStorage.setItem("ListProduct",JSON.stringify(this.ListProduct))
    }
    EditProduct(index,newProduct){
        this.ListProduct[index] = newProduct
        localStorage.setItem("ListProduct",JSON.stringify(this.ListProduct))
    }
}