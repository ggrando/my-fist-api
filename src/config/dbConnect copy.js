import mongoose from "mongoose"

mongoose.connect("______");

let db = mongoose.connection;

export default db;