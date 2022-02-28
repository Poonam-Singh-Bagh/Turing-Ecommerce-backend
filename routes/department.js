module.exports = (department, knex) => {
  department.get("/departments", (req, res) => {
    knex
      .select("*")
      .from("department")
      .then((data) => {
        res.json(data);
        res.status(200).send({
          success: true,
          message: "Success",
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });

  department.get("/departments/:department_id", (req, res) => {
    console.log("req", req.params.department_id);
    let department_id = req.params.department_id;
    knex
      .select("*")
      .from("department")
      .where("department_id", department_id)
      .then((data) => {
        res.json(data);
        res.status(200).send({
          success: true,
          message: "Success",
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
