import express from "express";
import { permissions } from "../data.js";

export const router = express.Router();

const setResource = (req, res, next) => {
  const resourceId = parseInt(req.params.resourceId);
  req.resource = permissions.resources.find(
    (resource) => resource.id === resourceId
  );

  if (req.resource == null) {
    res.status(404);
    return res.send("Resource not found");
  }

  next();
};

router.get("/resource/:resourceId", setResource, (req, res) => {
  res.json(req.resource);
});
