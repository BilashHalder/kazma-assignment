const express = require("express");
var url = require("url");
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  var url_parts = url.parse(req.url, true);
  // Extract params data from url
  var operator1 = url_parts.query.a == null ? 0 : Number(url_parts.query.a);
  var operator2 = url_parts.query.b == null ? 0 : Number(url_parts.query.b);
  var operand = url_parts.query.op == null ? null : url_parts.query.op.toLowerCase();
  console.log(operand)
  //calculate the result
  let result;
  if (operand == "add" || operand == "+")
    result = operator1 + operator2;
  else if (operand == "sub" || operand == "-")
    result = operator1 - operator2;
  else if (operand == "mul" || operand == "*")
    result = operator1 * operator2;
  else if (operand == "div" || operand == "/")
    result = operator2 == 0 ? undefined : operator1 / operator2;
  else
    result = null;
  const responseData = {
    a: operator1,
    b: operator2,
    op: operand,
    c: result,
  };
  return res.json(responseData);
});

module.exports = app;