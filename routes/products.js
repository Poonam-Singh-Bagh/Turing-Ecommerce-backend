module.exports = (products, knex) => {
  products.get("/products", (req, res) => {
    knex
      .select("*")
      .from("product")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  products.get("/products/:product_id", (req, res) => {
    let product_id = req.params.product_id;
    knex
      .select("*")
      .from("product")
      .where("product_id", product_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
