import express from "express";
import { authUser } from "../auth.js";
import { resources } from "../data.js";
import {
  canViewResource,
  scopedResources,
  canDeleteResource,
} from "../permissions/resource.js";

export const router = express.Router();

const setResource = (req, res, next) => {
  const resourceId = parseInt(req.params.resourceId);
  req.resource = resources.find((resource) => resource.id === resourceId);

  if (req.resource == null) {
    res.status(404);
    return res.send("Resource not found");
  }

  next();
};

const authGetResource = (req, res, next) => {
  if (!canViewResource(req.user, req.resource)) {
    res.status(401);
    return res.send("Not allowed");
  }

  next();
};

const authDeleteResource = (req, res, next) => {
  if (!canDeleteResource(req.user, req.resource)) {
    res.status(401);
    return res.send("Not allowed");
  }

  next();
};

router.get("/resource/all", authUser, (req, res) => {
  res.json(scopedResources(req.user, resources));
});

router.get(
  "/resource/:resourceId",
  setResource,
  authUser,
  authGetResource,
  (req, res) => {
    res.json(req.resource);
  }
);

router.delete(
  "/resource/:resourceId",
  setResource,
  authUser,
  authDeleteResource,
  (req, res) => {
    res.send("Fake deleting complete");
  }
);
