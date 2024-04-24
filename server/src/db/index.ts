import { MongoClient, Db } from "mongodb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function connectToDb(): Promise<Db | undefined> {
  try {
    const client = new MongoClient(process.env.DATABASE_URL || "");
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    const db: Db = client.db();
    return db;
  } catch (err) {
    console.log(err);
  }
}
export default connectToDb;
