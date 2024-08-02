import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Books = connection.define("books", {
  title: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING(13),
    allowNull: false,
    unique: true,
  },
  publishYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
});

