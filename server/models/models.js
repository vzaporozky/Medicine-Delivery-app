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
   name: { type: DataTypes.STRING, allowNull: true },
});

const Medicine = sequelize.define("medicine", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
   price: { type: DataTypes.INTEGER, allowNull: false },
});

const Shop = sequelize.define("shop", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
   address: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// User.hasOne(Cart);
// Cart.belongsTo(User);

// Cart.hasMany(Medicine);
// Medicine.belongsTo(Cart);

Shop.hasMany(Medicine);
Medicine.belongsTo(Shop);

module.exports = {
   User,
   Cart,
   Shop,
   Medicine,
};
