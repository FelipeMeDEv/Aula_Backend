require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/`;

const client = new MongoClient(url);
let db = null;

async function conectar() {
  try {
    if (db == null) {
      await client.connect();
      db = client.db("agenda");
    }
    return db;
  } catch (e) {
    console.log("erro ao conectar ao mongodb", e.message);
  }
}

module.exports = conectar;
