const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

app.use(cors());
app.use(express.json());

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => {
        console.log('Failed to connect database :c', err)
    });

const products = require('./routes/products');
const bases = require('./routes/bases');
const frostings = require('./routes/frostings');
const addons = require('./routes/addons');
const designs = require('./routes/designs');

app.use('/', products);
app.use('/api/bases', bases);
app.use('/api/frostings', frostings);
app.use('/api/addons', addons);
app.use('/api/designs', designs);

// const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});