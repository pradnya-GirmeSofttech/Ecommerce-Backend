const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
