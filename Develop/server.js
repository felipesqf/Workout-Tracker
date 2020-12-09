const express = require("express");
const mongoose = require("mongoose");
const PWD = 'Fel!pe012021';
const databaseUrl = `mongodb+srv://felipesqf:${encodeURIComponent(PWD)}@cluster0.prkbb.mongodb.net/workout`;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || databaseUrl, {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
