import "reflect-metadata";
import { createConnection } from "typeorm";
import { User, Category, Note } from "./entity";

createConnection()
  .then(async connection => {
    // console.log("Inserting a new user into the database...");
    const user = new User();
    user.username = "Pedrito";
    user.email = "mail@mail.com";
    user.password = "secret25";
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    const category = new Category();
    category.name = "chisme";
    await connection.manager.save(category);

    const category2 = new Category();
    category2.name = "chisme";
    await connection.manager.save(category2);

    const note = new Note();
    note.user = user;
    note.categories = [category, category2];
    note.description = "Hacer cosas";
    note.status = 0;
    note.title = "ahi la llevas prro";
    note.scheduledDatetime = "2016-06-22 19:10:25-06";
    await connection.manager.save(note);

    const foundNote = await connection
      .getRepository(Note)
      .findOne(3, { relations: ["user", "categories"] });
    console.log(foundNote);
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch(error => console.log(error));
