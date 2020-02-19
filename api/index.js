const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const controller = require("./controllers/index.js");
const port = 3000;
const Sequelize = require("sequelize");
const config = require("./config/config");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  config.db.DB,
  config.db.USER,
  config.db.PASSWORD,
  {
    host: config.db.HOST,
    dialect: "postgres"
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const { Model } = require("sequelize");

sequelize.sync({force:false})

class Contact extends Model {}

Contact.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    phoneNumber: {
      type: Sequelize.STRING,
    }
  },
  {
    sequelize,
    modelName: "contact"
    // options
  }
);

// sequelize.sync({force:true})

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/contacts", (req, res) => {
  Contact.findAll()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch(error => {
      res.sendStatus(500)
    })
});
app.get("/contacts/:id", controller.getContactById);
app.post("/contacts", (req, res) => {
  const data = req.body

  Contact.create(data)
    .then((newContact) => {
      res.json(newContact);
    })
    .catch(error => {
      res.sendStatus(500)
    })
});
app.put("/contacts/:id", controller.updateContact);
app.delete("/contacts/:id", controller.deleteContact);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
