import { MongoClient } from "mongodb";

const url = "mongodb+srv://dfl_01:13579@dfl.vzd4o3d.mongodb.net/";
const client = new MongoClient(url);

export async function conectarDb() {
  await client.connect();
  return client.db("agenda");
}
