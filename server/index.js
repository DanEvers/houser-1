require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const ctrl = require("./controllers/controller.js");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log(`DB connected`);
  })
  .catch(err => console.log(`DB connection error: `, err));

// houses endpoints
app.get("/api/houses", ctrl.getAllHouses);
app.post("/api/houses", ctrl.addNewHouse);
app.delete("/api/houses/:id", ctrl.deleteHouse);

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
);
