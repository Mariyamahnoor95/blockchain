class Product {
    constructor(_name, _price) {
    this.name = _name;
    this.price = _price;
    }
    get Name() {
    return this.name;
    }
    get Price() {
    return this.price;
    }
    }
    class Basket {
    constructor() {
    this.products = [];
   
    }
   
    addProduct(amount, product) {
    //this.products.push(...Array(amount).fill(product));
    console.log(this.products.push(...Array(amount).fill(product)) );
    }
    get calculateTotal() {
    return this.products.map(function(product){
    return product.Price
    })
    .reduce(function(a, b){
    return a + b;
    }, 0);
    }
    get printShoppingInfo() {
    let total = this.calculateTotal;
    console.log('one has to pay in total: ' + total);
    }
    }
   const bread = new Product('bread', 2);
   const water = new Product('water', 1.5);
   const basket = new Basket();
   basket.addProduct(3, bread);
   basket.addProduct(3, water);
   basket.printShoppingInfo;
   basket.addProduct(7, bread);
   basket.printShoppingInfo;