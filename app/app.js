const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello, everyone! Welcome to end to end cicd project");
});

app.get("/_status/healthz", (req, res) => {
  res.status(200).send("OK");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
