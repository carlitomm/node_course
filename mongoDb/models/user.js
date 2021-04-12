const mongoDg = require('mongodb')
const getDb = require('../util/database').getDb;

const ObjectId = mongoDg.ObjectId;

class User {
  constructor(name, email, cart, id) {
    this.name = name;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save() {
    const db = getDb();
    let dbOp;
    dbOp = db
      .collection('users')
      .insertOne(this)
    return dbOp
      .then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
  }

  addToCart(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._idtoString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1
      updatedCartItems[cartProductIndex].quantity = newQuantity
    } else {
      updatedCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      item: updatedCartItems
    };
    const db = getDb();
    return db.collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    const db = getDb();
    const productsIds = this.cart.items.map(i => {
      return i.productId
    });
    return db
      .collection('products')
      .find({ _id: { $in: productsIds } })
      .toArray()
      .then(products => {
        return products.map(p => {
          return {
            ...p, quantity: this.cart.items.find(i => {
              return i.productId.toString() === p._id.toString();
            }).quantity
          };
        })
      });
  }

  deleteItemFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    const db = getDb();
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  getOrder() {
    const db = getDb();
    return db
    .collection('orders')
    .find({ 'user._id': new ObjectId(this._id) })
    .toArray();
  }

  addOrder() {
    const db = getDb();
    return this.getCart().then(products => {
      const order = {
        item: products,
        user: {
          _id: new ObjectId(this._id),
          name: this.name
        }
      }
      return db.collection('orders').insertOne(order)
    })
      .then(result => {
        this.cart = { items: [] };
        return db
          .collection('users')
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: updatedCartItems } } }
          );

      })
  }

  static findById(userId) {
    const db = getDb()
    return db.collection('users')
      .find({ _id: new ObjectId(userId) }).next()
      .then(user => {
        console.log(user)
        return user;
      })
      .catch(err => {
        console.log(err)
      })
  }
}
module.exports = User;
