export const authUser = (req, res, next) => {
  if (req.user == null) {
    res.status(403);
    return res.send("You need to signin");
  }
  next();
};

export const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("Not allowed");
    }
    next();
  };
};
