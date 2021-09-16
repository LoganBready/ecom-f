const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const router = express.Router();
const queries = require("./queries");

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.get("/api/products", queries.getProducts);
app.post("/api/products", queries.addProduct);
app.put("/api/products/:id", queries.updateProduct);
app.delete("/api/products/:id", queries.deleteProduct);

app.get("/api/category", queries.getCategory);
// app.post("/api/category", queries.addCategory);
// app.put("/api/category/:id");
// app.delete("/api/category/:id");

// app.get("/api/cart", queries.getCart);
// app.post("/api/cart", queries.addCart);
app.post("/api/cart/:id", queries.getCart);
app.put("/api/cart/:id", queries.updateCart);
// app.delete("/api/cart/:id", queries.deleteCart);

app.listen(5000, () => {
  console.log("Running 5000.");
});
