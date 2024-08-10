// //db/mongoose.ts
 
// import mongoose from 'mongoose';
// declare global {
//   var mongoose: any;
// }
 
// const MONGODB_URI = process.env.MONGODB_URI!;
 
// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   );
// }
 
// let cached = global.mongoose;
 
// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }
 
// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }
 
//   return cached.conn;
// }
 
// export default dbConnect;

const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config({ path: './.env.local' });

const mongodbURI = process.env.MONGODB_URI;

if (!mongodbURI) {
    throw new Error ("MONGODB_URI environment variable not defined");
}

const client = new MongoClient(mongodbURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
});

const db = client.db(process.env.DB_NAME);

if (!db) {
    throw new Error("DB_NAME environment variable not defined");
}

async function connectMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectMongoDB();

module.exports = { client, db, connectMongoDB };
