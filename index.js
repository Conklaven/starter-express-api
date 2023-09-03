const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 3001;

const uri = "mongodb+srv://jacobklaven:Natalie613@fantasydraft.bhrubtq.mongodb.net//?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/players', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('Players');
    const collection = database.collection('playerNames');
    const players = await collection.find({}).toArray();
    res.json(players);
  } catch (error) {
    console.log(error);
  } } );
app.listen(process.env.PORT || 3000)
