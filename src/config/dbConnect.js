import mongoose from "mongoose"

mongoose.connect("___");

let db = mongoose.connection;

export default db;