const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection URL and Database name
const url = 'mongodb+srv://strawsub:hibs12345@cluster0.ktreiil.mongodb.net/';
const dbName = 'baddie';

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    const db = client.db(dbName);
    console.log('Connected to database');

    // Define endpoint to fetch data
    app.get('/players', async (req, res) => {
        try {
            const collection = db.collection('players');
            const players = await collection.find().toArray();
            res.json(players);
        } catch (error) {
            res.status(500).send('Error retrieving data from database');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});