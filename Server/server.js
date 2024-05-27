const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const database = require("./config/database");
const insightRoutes = require('./route/insightRoutes');

app.use(cors());
app.use(express.json());

//database Connected
database.connect();

// Use routes
app.use('/insights', insightRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
