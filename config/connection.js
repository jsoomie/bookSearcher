const { connect, connection } = require("mongoose");
require("dotenv").config();

const URI = process.env.DB_URI;

const db = async () => {
  try {
    await connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log("\x1b[36m%s\x1b[0m", `Database: ${connection.name} connected!`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = db;
