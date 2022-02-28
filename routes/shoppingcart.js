module.exports = (shoppingcart, knex) => {
  shoppingcart.get("/shoppingcart", (req, res) => {
    knex
      .select("*")
      .from("shopping_cart")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  shoppingcart.get("/shoppingcart/:cart_id", (req, res) => {
    let cart_id = req.params.cart_id;
    knex
      .select("*")
      .from("shopping_cart")
      .where("cart_id", cart_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
