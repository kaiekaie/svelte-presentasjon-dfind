require("svelte/register");

const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

const App = require("./src/App.svelte").default;

const { html } = App.render({ name: "test SRR" });

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  const indexFileContent = fs.readFileSync(
    path.resolve(__dirname, "public", "index.html"),
  );

  res.send(
    indexFileContent.toString().replace(
      '<div id="svelte_app"></div>',
      `<div id="svelte_app">${html}</div>`,
    ),
  );
});

app.listen(3000, () => console.log("The server started at localhost:3000"));
