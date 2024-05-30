const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   email: { type: DataTypes.STRING, unique: true },
   password: { type: DataTypes.STRING },
   role: { type: DataTypes.STRING, defaultValue: "USER" },
});

// const Type = sequelize.define("type", {
//    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//    name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

const Cart = sequelize.define("cart", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, allowNull: true },
});

const Clock = sequelize.define("clock", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, allowNull: false },
   price: { type: DataTypes.INTEGER, allowNull: false },
   isFavorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
   },
});

const Shop = sequelize.define("shop", {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: DataTypes.STRING, unique: true, allowNull: false },
   address: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Cart);
Cart.belongsTo(User);

Shop.hasMany(Clock);
Clock.belongsTo(Shop);

// Cart.hasMany(Clock);
// Clock.belongsTo(Cart);

module.exports = {
   User,
   Cart,
   Shop,
   Clock,
};
