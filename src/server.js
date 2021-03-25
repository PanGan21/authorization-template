import express from "express";

import { setUser } from "./middleware.js";
import { permissions, ROLE } from "./data.js";
import { router } from "./routes/resources.js";
import { authRole, authUser } from "./auth.js";

const app = express();
app.use(express.json());

app.use(setUser);

app.use(router);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/dashboard", authUser, (req, res) => {
  res.send("DASHBOARD PAGE");
});

app.get("/admin", authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send("ADMIN PAGE");
});

app.listen(3000);
