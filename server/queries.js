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
    `UPDATE product SET (product_id, category_id, product_name, product_price, product_description) = ($1, $2, $3, $4, $5) WHERE product_id = $1;`,
    [product_id, category_id, product_name, product_price, product_description]
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

const getCategory = async (req, res) => {
  const category = await pool.query("SELECT * FROM category;");
  res.json(category);
};

const getCart = async (req, res) => {
  const { user_id, user_name, user_email, cart_id } = req.body;
  const { id } = req.params;
  console.log(id);
  const cart = await pool.query(
    "SELECT u.user_id, u.user_name, u.user_email, c.cart_id, c.product_id, c.quantity FROM users u JOIN cart c on c.user_id = u.user_id WHERE u.user_id = $1",
    [id]
  );
  res.json(cart);
};

const addCart = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const addP = await pool.query(
    "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)",
    [user_id, product_id, quantity]
  );
  res.status(200).send(`Product added into cart.`);
};

const updateCart = async (req, res) => {
  const { cart_id, user_id, product_id, quantity } = req.body;
  const updateC = await pool.query(
    "UPDATE cart SET (cart_id, user_id, product_id, quantity) = ($1, $2, $3, $4) WHERE cart_id = $1",
    [cart_id, user_id, product_id, quantity]
  );
  res.status(200).send(`success`);
};

// const deleteCart = async (req, res) => {
//   const { cart_id, product_id, quantity } = req.body;
//   const deleteC = await pool.query(
//     "DELETE (product_id, quantity) FROM cart WHERE cart_id = $1;",
//     [cart_id]
//   );
//   res.status(200).send(`Product deleted from cart.`);
// };

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getCategory,
  getCart,
  addCart,
  updateCart,
};
