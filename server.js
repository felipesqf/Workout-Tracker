const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PWD = 'Fel!pe012021';
// const PWD = process.env.MYDB_PWD;
const databaseUrl = `mongodb+srv://felipesqf:${encodeURIComponent(PWD)}@cluster0.prkbb.mongodb.net/workout`;

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || databaseUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// app.use(require("./routes/apiRoute.js"));
// app.use(require("./routes/htmlRoutes.js"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoute.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
