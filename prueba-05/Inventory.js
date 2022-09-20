class Product {
  static counterProducts = 0;

  constructor(name, price) {
    this._idProduct = ++Product.counterProducts;
    this._name = name;
    this._price = price;
  }

  get idProduct() {
    return this._idProduct;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    return (this._price = price);
  }

  toString() {
    return `idProduct: ${this._idProduct}, nombre: ${this._name}, price: $${this._price}  `;
  }
}

class Order {
  static orderCounter = 0;

  static get MAX_PRODUCTS() {
    return 5;
  }

  constructor() {
    this._idOrder = ++Order.orderCounter;
    this._Products = [];
  }

  get idOrder() {
    return this._idOrder;
  }

  addProduct(Product) {
    if (this._Products.length < Order.MAX_PRODUCTS) {
      this._Products.push(Product);
    } else {
      console.log('No se pueden add más Products');
    }
  }

  calcularTotal() {
    let totalSale = 0;
    for (let Product of this._Products) {
      totalSale += Product.price;
    }
    return totalSale;
  }

  showOrder() {
    let ProductsOrder = '';
    for (let Product of this._Products) {
      ProductsOrder += '\n{' + Product.toString() + '}';
    }

    console.log(
      `Order: ${
        this._idOrder
      } Total: $${this.calcularTotal()}, Products: ${ProductsOrder} `
    );
  }
}

let Product1 = new Product('Pantalón', 200);
let Product2 = new Product('Camisa', 100);

let Order1 = new Order();

Order1.addProduct(Product1);
Order1.addProduct(Product2);

Order1.showOrder();

let Order2 = new Order();
let Product3 = new Product('Cinturon', 50);

Order2.addProduct(Product3);
Order2.addProduct(Product1);
Order2.addProduct(Product2);
Order2.addProduct(Product3);
Order2.addProduct(Product1);
Order2.addProduct(Product2);
Order2.showOrder();
