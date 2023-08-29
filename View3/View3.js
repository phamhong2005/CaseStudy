let shop = new StoreFootwear()

// function main() {
//     let sp1 = new ProductFootwear(1, "Balenciaga", "https://bexit.gumlet.io/media/catalog/product/i/m/img_2D_0001_144011.jpg?w=440&h=440&trim=5&mode=fill&pad=30", "Trắng Đỏ", 1500, 100)
//     let sp2 = new ProductFootwear(2, "Nike Air Force 1 While", "https://giaysneaker.com.vn/public/media/giay-nike-air-force-1-white-xanh-tim-rep-11-3.jpg", "Xanh tím", 450, 100)
//     let sp3 = new ProductFootwear(3, "Jordan 1 Low Paris", "https://giaysneakerhcm.com/wp-content/uploads/2020/09/giay-air-jordan-1-low-co-thap-trang-da-lon-1.jpg", "Trắng", 1150, 120)
//     let sp4 = new ProductFootwear(4, "Adidas Alpha Bounce", "https://giaysneaker.com.vn/public/media/giay-adidas-alpha-bounce-beyond-white-2.jpg", "Trắng", 1000, 200)
//     let sp5 = new ProductFootwear(5, "Converse", "https://bizweb.dktcdn.net/100/471/342/products/chuck70pluscounterclimateeggle.jpg?v=1670174520027", "CCVN022", 430, 120)
//     let sp6 = new ProductFootwear(6, "MLB", "https://admin.thegioigiay.com/upload/news/content/2022/05/cach-check-giay-mlb-chinh-hang-3-jpg-1651810222-06052022111022.jpg", "Trắng", 700, 175)
//     shop.addProductFootwear(sp1)
//     shop.addProductFootwear(sp2)
//     shop.addProductFootwear(sp3)
//     shop.addProductFootwear(sp4)
//     shop.addProductFootwear(sp5)
//     shop.addProductFootwear(sp6)
// }
//
// main()

function showAll() {
    let stringProduct = ``
    let ListProduct = shop.findAllProduct()
    for (let i = 0; i < ListProduct.length; i++) {
        stringProduct += `
                         <tr>
            <th>${ListProduct[i].id}</th>
            <th>${ListProduct[i].name}</th>
            <th><img src="${ListProduct[i].img}" alt="#"></th>
            <th>${ListProduct[i].color}</th>
            <th>${ListProduct[i].price}</th>
            <th>${ListProduct[i].quantity}</th>
            <th>
            <button style="background-color: red" onclick="EditProduct(${i})">Edit</button>
            <button style="background-color: yellow" onclick="Delete(${i})">Delete</button>
            </th>
        </tr>
        `
    }
    document.getElementById("showAll").innerHTML = stringProduct;
}

showAll()


function addProduct() {
    document.getElementById('addProduct').innerHTML = `
          <input type="number" name="" id="id" placeholder="id">
        <br>
        <input type="text" name="" id="name" placeholder="name">
        <br>
        <input type="text" name="" id="img" placeholder="image" >
        <br>
        <input type="text" name="" id="color" placeholder="color"> 
        <br>
        <input type="number" name="" id="price" placeholder="price"> 
        <br>
        <input type="number" name="" id="quantity" placeholder="quantity">
         <br>
        <button onclick="SaveProduct()">Save</button>       
    `
}

function SaveProduct() {
    let id = +document.getElementById("id").value
    let name = document.getElementById("name").value
    let img = document.getElementById('img').value
    let color = document.getElementById("color").value
    let price = +document.getElementById("price").value
    let quantity = +document.getElementById("quantity").value

    let newProductFootwear = new ProductFootwear(id, name, img, color, price, quantity);
    shop.addProductFootwear(newProductFootwear)
    document.getElementById("addProduct").innerHTML = ``
    showAll()

}

function Delete(index) {
    let check = confirm("Bam Nham A Con Zai")
    if (check) {
        shop.remove(index)
        showAll()
    }
}

function EditProduct(index) {
    let LisProductNew = shop.findAllProduct()[index]
    document.getElementById("EditProduct").innerHTML = `
     <input type="number" name="" id="idEdit" placeholder="id" value="${LisProductNew.id}">
        <br>
        <input type="text" name="" id="nameEdit" placeholder="name" value="${LisProductNew.name}">
        <br>
        <input type="text" name="" id="imgEdit" placeholder="image" value="${LisProductNew.img}">
        <br>
        <input type="text" name="" id="colorEdit" placeholder="color" value="${LisProductNew.color}"> 
        <br>
        <input type="number" name="" id="priceEdit" placeholder="price" value="${LisProductNew.price}"> 
        <br>
        <input type="number" name="" id="quantityEdit" placeholder="quantity" value="${LisProductNew.quantity}">
         <br>
        <button onclick="SaveEdit(${index})">Save</button>       
    `
}

function SaveEdit(index) {
    let idEdit = +document.getElementById("idEdit").value
    let nameEdit = document.getElementById("nameEdit").value
    let imgEdit = document.getElementById("imgEdit").value
    let colorEdit = document.getElementById("colorEdit").value
    let priceEdit = +document.getElementById("priceEdit").value
    let quantityEdit = +document.getElementById("quantityEdit").value

    let newProduct = new ProductFootwear(idEdit, nameEdit, imgEdit, colorEdit, priceEdit, quantityEdit)
    shop.EditProduct(index, newProduct);
    document.getElementById("EditProduct").innerHTML = ``
    showAll()

}

    function Thongbao() {
        alert("Xin Chào Mình Là Trương Đăng Vũ Linh Và Các Bạn Có Thể Gọi Mình Là Em Linh 2k1 , Mình Là AddMin Của Web Này Và Mình Là Em Anh Hồng")
    }

    showAll()
    // localStorage.setItem("ListProduct",JSON.stringify([]))


    showAll()

//* Tìm Kiếm
    function Search() {
        let search = document.getElementById("menu-search").value
        search = search.toLowerCase();// chuyển chữ hoa thành chữ thường
        if (search === ``) {
            showAll()
        } else {
            let ListProduct = shop.findAllProduct();
            let strings = ``
            for (let i = 0; i < ListProduct.length; i++) {
                if (ListProduct[i].name.toLowerCase().indexOf(search) !== -1) {        //index of tìm kí tự
                    strings += `
                                             <tr>
            <th>${ListProduct[i].id}</th>
            <th>${ListProduct[i].name}</th>
            <th><img src="${ListProduct[i].img}" alt="#"></th>
            <th>${ListProduct[i].color}</th>
            <th>${ListProduct[i].price}</th>
            <th>${ListProduct[i].quantity}</th>
            <th>
            <button style="background-color: red" onclick="EditProduct(${i})">Edit</button>
            <button style="background-color: yellow" onclick="Delete(${i})">Delete</button>
            </th>
        </tr>
                    `
                }
            }
            document.getElementById("showAll").innerHTML = strings

        }
    }

