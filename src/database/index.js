import Sequelize  from "sequelize";
import dbConfig from "../config/database"
import { Product } from "../models/product";

const connection = new Sequelize(dbConfig);

Product.init(connection);
Product.sync();


