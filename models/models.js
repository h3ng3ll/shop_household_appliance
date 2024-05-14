const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstname : {type: DataTypes.STRING , allowNull: false },
  lastname : {type: DataTypes.STRING , allowNull: false },
  email: {type: DataTypes.STRING , unique: true , allowNull: false},
  password: { type: DataTypes.STRING },
  birthday: { type: DataTypes.DATE },
  role: {type:DataTypes.ENUM("USER" , "ADMINISTRATOR") , defaultValue: "USER"}
});

const Product = sequelize.define("product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  model_name: {type: DataTypes.STRING , allowNull: false},
  raiting: { type: DataTypes.DOUBLE, defaultValue: 0.0 },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  discount: { type: DataTypes.DOUBLE },
  release_date: { type: DataTypes.DATE , },
  details: {type: DataTypes.TEXT}
});

const Basket = sequelize.define("basket", {
  basket_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Basket_Product = sequelize.define("basket_product", {
  basket_product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

const Basket_Cart = sequelize.define("basket_cart", {
  basket_cart_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  count: { type: DataTypes.INTEGER, defaultValue: 1},

});

const Supplier = sequelize.define("supplier", {
  supplier_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  country_of_origin: {type: DataTypes.INTEGER , defaultValue: 6},
  contact_email: {type: DataTypes.STRING , defaultValue: "supplier@mail.ua"},
  isActive: {type: DataTypes.BOOLEAN , defaultValue: false}
});

const Brand = sequelize.define("brand", {
  brand_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  country_of_origin: {type: DataTypes.INTEGER  },
  established_year: {type: DataTypes.INTEGER  },
});

const Type = sequelize.define("type", {
  type_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Order = sequelize.define("order", {
  order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  status: {
    type: DataTypes.ENUM("PROCESS", "FINISH", "CANCELL"),
  },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

  comments: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.DOUBLE, allowNull: false },
  order_products: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
});

const Payment = sequelize.define("payment", {
  payment_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  payment_method: { type: DataTypes.ENUM("CARD", "CASH") },
  payment_status: {
    type: DataTypes.ENUM("WAIT", "DONE", "ERROR"),
  },
  payment_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

const Review = sequelize.define("review", {
  review_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  rating: { type: DataTypes.DOUBLE, allowNull: false },
  comment: { type: DataTypes.STRING, allowNull: false },
  review_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

const Category = sequelize.define("category" , {
  category_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img : {type: DataTypes.STRING }
})
/// Intermediate table

const OrderProduct = sequelize.define("order_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const ProductType = sequelize.define("product_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const ProductSuppliar = sequelize.define("product_type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const UserProduct = sequelize.define("user_product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  count: {type: DataTypes.INTEGER , defaultValue: 1}
});

const ProductBrand = sequelize.define("product_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


Type.hasMany(Product); /////
Product.belongsTo(Type); ////

Brand.hasMany(Product); ////
Product.belongsTo(Brand); ////

Supplier.hasMany(Product); ////
Product.belongsTo(Supplier); ////

User.hasMany(Product)
Product.belongsTo(User)



User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasOne(User)
User.belongsTo(Basket)

//// Good on back 

Payment.belongsTo(Order)
Order.hasMany(Payment)

Basket_Product.belongsTo(Basket)
Basket.hasMany(Basket_Product)

Basket_Product.belongsTo(Product)
Product.hasMany(Basket_Product)


Product.belongsTo(Category),
Category.hasMany(Product),

Basket.belongsTo(Basket_Cart),
Basket_Cart.hasMany(Basket),

Basket_Cart.belongsTo(Product)
Product.hasMany(Basket_Cart)

Basket_Cart.belongsTo(Basket)
Basket.hasMany(Basket_Cart)

Review.belongsTo(Product)
Product.hasMany(Review);
// Review.hasMany(Product)
// Product.belongsTo(Review)

User.belongsTo(Review)
Review.hasMany(User)
// Product.hasMany(User);
// User.belongsTo(Product);

// User.hasOne(Basket);
// Basket.belongsTo(User);

// Basket.hasMany(Basket_Product);
// Basket_Product.belongsTo(Basket);

// Basket_Product.belongsTo(Product); /// Product has not any basket id
// Review.belongsTo(Product); /// Review

// Order.belongsTo(Product);
// Order.belongsTo(User);

// Payment.hasOne(Order);
// Order.belongsTo(Payment);

// Product.belongsToMany(Type, { through: ProductType });
// Product.belongsToMany(Supplier, { through: ProductSuppliar });
// Product.belongsToMany(Brand, { through: ProductBrand });

// Basket.hasOne(User); // Корзина имеет 1 пользователя
// User.belongsTo(Basket); // Пользователю принадлежит 1 корзина

// // Basket.hasMany(Product); // Корзина имеет много продуктов
// // Product.belongsTo(Basket); // Но она одна

// Basket.hasMany(Basket_Product);
// Basket_Product.belongsTo(Basket);

// // Basket_Product.hasMany(Product);
// // Product.belongsTo(Basket_Product);

// Review.belongsTo(User); // Один отзыв принадлежит одному пользователю
// User.hasMany(Review); // Пользователь имеет много отзывов

// // Product.hasMany(Review); // Имеет много отзывов ,
// Review.belongsTo(Product); // но они все пренадлежат 1 продукту

// Order.belongsToMany(Product, { through: OrderProduct }); // Заказ имеет много продуктов
// Product.belongsToMany(Order, { through: OrderProduct }); // Продукт имеет много заказов

// User.hasMany(Product); // Пользователь может добавить много  продуктов
// Product.belongsTo(User); // Все добавленные продукты   имеют 1 пользоваля

// Order.belongsToMany(User, { through: UserProduct }); // 1 Заказ имеет 1 пользователя
// User.belongsToMany(Order, { through: UserProduct }); // Пользователь имеет много заказов

// Payment.hasOne(Order); // Оплата имеет 1 Заказ
// Order.belongsTo(Payment); // Заказу принадлежит 1 продукт

// // Product.hasMany(Supplier); // Продукт имеет много поставщиков
// Supplier.hasOne(Product); // Поставщик поставляет 1 тип продукт

// Product.belongsToMany(Brand, { through: ProductBrand });
// Brand.belongsToMany(Product, { through: ProductBrand });

// Product.belongsToMany(Type, { through: ProductType }); // Продукт имеет много типов(микроволновка , холодильник и т.п.)
// Type.belongsTo(Product); // Типы являються всего лишь 1 продуктом

// Brand.belongsToMany(Supplier, { through: BrandTypeSupplier });
// Supplier.belongsToMany(Brand, { through: BrandTypeSupplier });

// Type.belongsToMany(Supplier, { through: BrandTypeSupplier });
// Supplier.belongsToMany(Type, { through: BrandTypeSupplier });

// Brand.belongsToMany(Type, { through: BrandTypeSupplier });
// Type.belongsToMany(Brand, { through: BrandTypeSupplier });

// Product.belongsTo(Type);
// Product.belongsTo(Brand);

module.exports = {
  User,
  Basket,
  Payment,
  Review,
  Product,
  Order,
  Brand,
  Type,
  Supplier,
  Category,
  Basket_Product,
  Basket_Cart,
  // BrandTypeSupplier,
  ProductBrand,
  UserProduct,
  OrderProduct,
};
