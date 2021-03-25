import express from "express";

import { setUser } from "./middleware.js";
import { permissions } from "./data.js";
import { router } from "./routes/resources.js";

const app = express();
app.use(express.json());

app.use(setUser);

app.use(router);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dashboard", (req, res) => {
  res.send("DASHBOARD PAGE");
});

app.get("/admin", (req, res) => {
  res.send("ADMIN PAGE");
});

app.listen(3000);
