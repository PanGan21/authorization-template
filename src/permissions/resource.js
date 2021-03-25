import { ROLE } from "../data.js";

export const canViewResource = (user, resource) => {
  return user.role === ROLE.ADMIN || resource.userId === user.id;
};

export const canDeleteResource = (user, resource) => {
  return resource.userId === user.id;
};

export const scopedResources = (user, resources) => {
  if (user.role === ROLE.ADMIN) return resources;
  return resources.filter((resource) => resource.userId === user.id);
};
