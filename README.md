# authorization-template
Basic centralized authorization template

## Run
```npm install && npm start```

## Request the routes
```GET /dashboard```
```GET /admin```
```GET /resource/:resourceId```
```DELETE /resource/:resourceId```

### Body
```userId: <id>```

- id can be 1, 2, 3 and each id has different access to the routes
- id 1: admin
- id 2: basic
- id 3: basic
