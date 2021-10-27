const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//KS74843KyYHyw1IJ

const uri =
  'mongodb+srv://admin:KS74843KyYHyw1IJ@cluster0.a4iwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db('ema-jhon');
    const productCollection = database.collection('products');

    app.get('/products', async (req, res) => {
      const cursor = productCollection.find({});
      const products = await cursor.toArray();
      res.send(products);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('This is HOme route response');
});

app.listen(port, () => {
  console.log('Server is runnign at port', port);
});
