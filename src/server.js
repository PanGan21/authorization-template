import express from "express";

import { permissions } from "./data.js";

const app = express();
app.use(express.json());

app.listen(3000);
