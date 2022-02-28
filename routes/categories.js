module.exports = (categories, knex) => {
  categories.get("/categories", (req, res) => {
    knex
      .select("*")
      .from("category")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  categories.get("/categories/:category_id", (req, res) => {
    console.log("poonam");
    let category_id = req.params.category_id;
    knex
      .select("*")
      .from("category")
      .where("category_id", category_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
