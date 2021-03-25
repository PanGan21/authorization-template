export const setUser = (req, res, next) => {
  const userId = req.body.userId;
  if (userId) {
    req.user = permissions.find((user) => user.id == userId);
  }

  next();
};
