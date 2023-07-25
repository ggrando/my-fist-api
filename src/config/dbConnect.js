import mongoose from "mongoose"

mongoose.connect("mongodb+srv://guigrando2:123@cluster0.11ieqyo.mongodb.net/alura-example");

let db = mongoose.connection;

export default db;