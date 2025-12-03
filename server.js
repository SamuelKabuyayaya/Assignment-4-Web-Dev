import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;


mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

  
mongoose.connection.on("error", (err) => {
  console.error(`Unable to connect to database: ${config.mongoUri}`, err);
});

const PORT = process.env.PORT || config.port; 
app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}.`);
});
