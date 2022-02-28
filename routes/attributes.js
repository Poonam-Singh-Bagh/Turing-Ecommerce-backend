module.exports = (attributes, knex) => {
  attributes.get("/attributes", (req, res) => {
    knex
      .select("*")
      .from("attribute")
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  attributes.get("/attributes/:attribute_id", (req, res) => {
    let attribute_id = req.params.attribute_id;
    console.log("attribute_id", attribute_id);
    knex
      .select("*")
      .from("attribute")
      .where("attribute_id", attribute_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
