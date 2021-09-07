const pool = require("./db");
const getProducts = async (req, res) => {
  const products = await pool.query("SELECT * FROM product;");
  res.json(products);
};

const addProduct = async (req, res) => {
  const { category_id, product_name, product_price, product_description } =
    req.body;
  const addP = await pool.query(
    `INSERT INTO product (category_id, product_name, product_price, product_description) VALUES ($1, $2, $3, $4);`,
    [category_id, product_name, product_price, product_description]
  );
  res.status(200).send(`${product_name} was added into database.`);
};

const updateProduct = async (req, res) => {
  const {
    product_id,
    category_id,
    product_name,
    product_price,
    product_description,
  } = req.body;
  const update = await pool.query(
    `UPDATE product SET product_name = $1 WHERE product_id = $2;`,
    [product_name, product_id]
  );
  res.status(200).send(`success`);
};
const deleteProduct = async (req, res) => {
  const { product_id } = req.body;
  const deleteProd = await pool.query(
    "DELETE FROM product WHERE product_id = $1",
    [product_id]
  );
  res.status(200).send(`Product deleted.`);
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
