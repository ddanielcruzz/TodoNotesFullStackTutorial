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
    "@typescript-eslint/eslint-plugin": "^4.7.0", // Plugin to help TS parser lint your code
    "@typescript-eslint/parser": "^4.7.0", // Parser for TS as eslint has a JS parser
    "dotenv": "^8.2.0",
    "nodemon": "^2.0.6", 
    "ts-node": "^9.0.0", // TypeScript execution and REPL for node.js
    "typescript": "^4.0.5"
  },
  "dependencies": {
    "apollo-server-express": "^2.19.0",
    "express": "^4.17.1",
    "graphql": "^15.4.0"
  }
}
```
## TypeScript Compiler options 

```jsonc
{
"compilerOptions": {
    "lib": ["es5", "es6"], // Set of type definitions
    "target": "ES6", // Think of it as Babbel, your code will be compiled to es6 syntax
    "module": "CommonJS", // Same as target, your ES6 module imports will be compiled to require() imports as per CommonJS
    "rootDir": "./src", // Directory where the compiler will look for TS files
    "outDir": "./build", // Directory where the compiler will put compiled code
    "esModuleInterop": true, // Import CommonJS modules in compliance with ES6 modules spec. 
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "moduleResolution": "node", // The way the compiler resolves the import of modules, with 'node' it will mimick node resolution starting at node_modules
    "sourceMap": true, // Allow source map of TS files for debugging
    "strict": true // All strict rules in TS 
  }
}
```
