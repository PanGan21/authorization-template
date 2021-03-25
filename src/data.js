export const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

export const permissions = {
  users: [
    { id: 1, name: "ADMIN-NAME", role: ROLE.ADMIN },
    { id: 2, name: "BASIC-NAME-1", role: ROLE.BASIC },
    { id: 3, name: "BASIC-NAME-2", role: ROLE.ADMIN },
  ],
  resources: [
    { id: 1, name: "RESOURCE-1", userId: 1 },
    { id: 2, name: "RESOURCE-2", userId: 2 },
    { id: 3, name: "RESOURCE-3", userId: 3 },
  ],
};
