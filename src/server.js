import express from "express";

import { permissions } from "./data.js";

const app = express();
app.use(express.json());

const setUser = (req, res, next) => {
  const userId = req.body.userId;
  if (userId) {
    req.user = permissions.find((user) => user.id == userId);
  }

  next();
};

app.listen(3000);
