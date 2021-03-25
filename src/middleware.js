import { permissions } from "./data.js";

export const setUser = (req, res, next) => {
  const userId = req.body.userId;
  if (userId) {
    req.user = permissions.users.find((user) => user.id === userId);
  }

  next();
};
