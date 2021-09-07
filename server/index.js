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

app.listen(5000, () => {
  console.log("Running 5000.");
});
