const mongoose = require("mongoose");

const PORT = process.env.MONGO_URI || "mongodb://localhost/book_search";

const db = async () => {
  try {
    const connect = await mongoose.connect(PORT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`DB connected @ ${PORT} : ${connect.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = db;
