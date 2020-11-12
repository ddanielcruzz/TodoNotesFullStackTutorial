# Backend

DB Diagram: https://dbdiagram.io/d/5ee563929ea313663b3a810b

## Setup test DB

```bash
docker run --rm -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=pedrito -e POSTGRES_DB=todo_notes -v todo_notes:/var/lib/postgresql/data -p 5432:5432 postgres
```

## Automated Instructions

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

## Creation with TypeORM cli

```bash
npx typeorm init --name ToDoNotes --database postgres
```
## Dependencies use

```jsonc
{
  "devDependencies": {
    "@types/node": "^14.14.7", // node types 
    "@typescript-eslint/eslint-plugin": "^4.7.0",
    "@typescript-eslint/parser": "^4.7.0",
    "dotenv": "^8.2.0",
    "nodemon": "^2.0.6",
    "ts-node": "^9.0.0",
    "typescript": "^4.0.5"
  },
  "dependencies": {
    "apollo-server-express": "^2.19.0",
    "express": "^4.17.1",
    "graphql": "^15.4.0"
  }
}
```
