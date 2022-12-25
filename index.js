const express = require("express");
const format = require("date-format");

const app = express();

//swagger docs related
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from mayur!");
});

//creating social routes (API's)

//instagram API
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "learncode.dev",
    followers: 79,
    follows: 100,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

//facebook API
app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "mayurpatil",
    followers: 100,
    follows: 102,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});

//linkedin API
app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "patilmayur15",
    followers: 500,
    follows: 200,
    date: format.asString("dd[MM] hh:mm:ss", new Date()),
  };
  res.status(200).json(instaSocial);
});

//to return whatever there in URL
app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({
    params: req.params.token,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}...`);
});
