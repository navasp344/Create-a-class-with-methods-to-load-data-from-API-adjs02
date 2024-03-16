class Product {
    constructor(id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.category = category;
        this.thumbnail = thumbnail;
        this.images = images;
    }
}

class  ProductRepository{
    getAllProducts(){
        return fetch("https://dummyjson.com/products").then((response)=>{
            return response.json().then((data)=>{
                let productsdata=[];
                for (let product of data.products){
                    productsdata.push(new Product(
                        product.id,
                        product.title,
                        product.description,
                        product.price,
                        product.discountPercentage,
                        product.rating,
                        product.stock,
                        product.brand,
                        product.category,
                        product.thumbnail,
                        product.images
                    ))
                }
                return productsdata;
            })
        })
            
    }
    
}

const pdt=new  ProductRepository();
pdt.getAllProducts().then((pdtdata)=>{
    console.log(pdtdata.data.products)
   
})








