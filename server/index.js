const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8181;


// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello there!");
})

app.get('/gift', (req, res) => {
  let item_queried = req.query["item"];
  switch (item_queried){
    case "books": res.send({'books':['Archies','Ninjago','Alex Rider']});
    case "toys": res.send({'toys':['cars','lego blocks','nerf guns']});
    case "clothes": res.send({'clothes':['tshrits','jeans','trackpants']});
    default: res.send({"Unknown":item_queried})
    }
});

  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
