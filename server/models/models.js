const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   email: { type: DataTypes.STRING, unique: true },
   password: { type: DataTypes.STRING },
   role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Cart = sequelize.define("cart", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartMedicine = sequelize.define("cart_medicine", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Medicine = sequelize.define("medicine", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
   description: { type: DataTypes.STRING, allowNull: false },
   price: { type: DataTypes.INTEGER, allowNull: false },
   img: { type: DataTypes.STRING, allowNull: "USER" },
});

const Shop = sequelize.define("shop", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartMedicine);
CartMedicine.belongsTo(Cart);

Shop.hasMany(Medicine);
Medicine.belongsTo(Shop);

Medicine.hasMany(CartMedicine);
CartMedicine.belongsTo(Medicine);

module.exports = {
   User,
   Cart,
   CartMedicine,
   Shop,
   Medicine,
};
