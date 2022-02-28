const express = require("express");
const knex = require("./connection/knex_connection");

const app = express();
app.use(express.json());

const department = express.Router();
app.use("/", department);
require("./routes/department")(department, knex);

const categories = express.Router();
app.use("/", categories);
require("./routes/categories")(categories, knex);

const attributes = express.Router();
app.use("/", attributes);
require("./routes/attributes")(attributes, knex);

const products = express.Router();
app.use("/", products);
require("./routes/products")(products, knex);

const shoppingcart = express.Router();
app.use("/", shoppingcart);
require("./routes/shoppingcart")(shoppingcart, knex);

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
