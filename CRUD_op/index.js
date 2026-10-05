const { MongoClient } = require("mongodb");

const url = "mongodb+srv://nithinpathak2005_db_user:G5XEqWKqXHCgFnOO@cluster0.kb9vjdi.mongodb.net/?appName=Cluster0&compressors=zlib";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        console.log("Connected to MongoDB");

        const db = client.db("college");
        const students = db.collection("students");

        // CREATE
        await students.insertOne({
            name: "Rahul",
            age: 20,
            course: "AIML"
        });

        console.log("Document inserted successfully");

        // READ
        const data = await students.find().toArray();

        console.log("Student Records:");
        console.log(data);

        // UPDATE
        await students.updateOne(
            { name: "Rahul" },
            { $set: { age: 21 } }
        );
        console.log("Document updated successfully");
        const udata = await students.find().toArray();
        console.log(udata);

        // DELETE
        await students.deleteOne({
            name: "Rahul"
        });

        console.log("Document deleted successfully");
        const u1data = await students.find().toArray();
        console.log(u1data);


    } catch (error) {
        console.log("Error:", error);
    } finally {
        await client.close();
    }
}

main();