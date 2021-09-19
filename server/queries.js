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
  res.status(200).send(`Successfully added product!`);
};

const deleteCartProduct = async (req, res) => {
  const { id, productid } = req.params;
  console.log(id, productid);
  const deleteC = await pool.query(
    "DELETE FROM cart WHERE product_id = $1 AND user_id = $2",
    [productid, id]
  );
  res.status(200).send(`Product deleted from cart.`);
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

const updateCart = async (req, res) => {
  // const user_id = parseInt(req.params.id);

  let { product_id } = req.body;
  const user_id = parseInt(req.params.id);

  parseInt(product_id, user_id);

  await pool.query("INSERT INTO cart (user_id, product_id) VALUES ($1, $2)", [
    user_id,
    product_id,
  ]);

  res.status(200).send(`success`);
};

const getPrice = async (req, res) => {
  const { id } = req.params;
  const first = await pool.query(
    "SELECT SUM(product_price) FROM (SELECT c.user_id, c.product_id, p.product_price FROM cart c JOIN product p on c.product_id = p.product_id WHERE c.user_id = $1) AS Price",
    [id]
  );
  res.json(first);
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  getCategory,
  getCart,
  updateCart,
  deleteCartProduct,
  getPrice,
};
