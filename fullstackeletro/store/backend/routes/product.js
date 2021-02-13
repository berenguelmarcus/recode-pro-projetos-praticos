const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const feedback = require("../mongodb/models/message");

Router.get("/product", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM registered_products",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.get("/order", (req, res) => {
  mysqlConnection.query(
    "SELECT customers.customer_name, registered_products.product_name, registered_products.product_img FROM customers JOIN orders ON customers.customer_id = orders.customer_id JOIN registered_products ON registered_products.product_id = orders.product_id",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

Router.post("/register-feedback", async (req, res) => {
  const { nome, msg } = req.body;
  res.json(await feedback.create({ email, text }));
});

Router.get("/get-feedback", async (req, res) => {
  res.json(await feedback.find());
});

module.exports = Router;
