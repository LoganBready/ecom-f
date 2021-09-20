const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const router = express.Router();
const queries = require("./queries");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.get("/api/products", queries.getProducts);
app.post("/api/products", queries.addProduct);
app.put("/api/products/:id", queries.updateProduct);
// app.delete("/api/products/:id", queries.deleteProduct);

app.get("/api/category", queries.getCategory);

// app.get("/api/cart", queries.getCart);
// app.post("/api/cart/:id", queries.addCart);
app.get("/api/cart/:id", queries.getCart);
app.put("/api/cart/:id", queries.updateCart);
app.delete("/api/cart/:id/:productid", queries.deleteCartProduct);

app.delete("api/allcart/:id", queries.deleteAll);

app.get("/api/user/price/:id", queries.getPrice);

app.listen(5000, () => {
  console.log("Running 5000.");
});
