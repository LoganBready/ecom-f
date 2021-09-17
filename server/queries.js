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
  // const { user_id } = req.params.id;
  const { id } = req.params;
  // const user_id = parseInt(req.params.id);
  // const user_id = req.params.id;
  // console.log(user_id, typeof user_id, "here");

  // const { id } = req.params;

  const cart = await pool.query(
    "SELECT c.product_id, p.product_name, p.product_description, p.product_name, p.product_price, p.product_id FROM cart c JOIN product p ON c.product_id = p.product_id WHERE user_id = $1;",
    [id]
  );
  res.json(cart);
};

// const addCart = async (req, res) => {
//   const { product_id } = req.body;
//   const { user_id } = parseInt(req.params.id);
//   const getCartId = await pool.query(
//     "SELECT cart_id FROM cart WHERE user_id = $1",
//     [user_id]
//   );
//   const addP = await pool.query(
//     "INSERT INTO cart (product_id) VALUES ($1) WHERE cart_id = $2",
//     [product_id, getCartId.rows[0].cart_id]
//   );
//   res.status(200).send(`Product added into cart.`);
// };

// const updateCart = async (req, res) => {
//   // const user_id = parseInt(req.params.id);
//   // const user_id = req.params.id;
//   const user_id = 38;
//   console.log(typeof user_id);
//   console.log(req.params.id);
//   let { product_id } = req.body;
//   parseInt(product_id);

//   const cartId = () => {
//     pool.query("SELECT cart_id FROM cart WHERE user_id = $1", [user_id]);
//     pool.query("UPDATE cart SET product_id = $2 WHERE cart_id = $1", [
//       cartId.rows[0].cart_id,
//       product_id,
//     ]);
//   };

//   res.status(200).send(`success`);
// };

const updateCart = async (req, res) => {
  // const user_id = parseInt(req.params.id);

  let { product_id } = req.body;
  const user_id = parseInt(req.params.id);
  // console.log(user_id);

  parseInt(product_id, user_id);

  const cartId = await pool.query(
    "SELECT cart_id FROM cart WHERE user_id = $1",
    [user_id]
  );

  await pool.query("UPDATE cart SET product_id = $2 WHERE cart_id = $1", [
    cartId.rows[0].cart_id,
    product_id,
  ]);
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
  updateCart,
};
