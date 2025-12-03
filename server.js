import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;


mongoose
  .connect(config.mongoUri) 
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("MongoDB connection error:", err));


  
mongoose.connection.on("error", (err) => {
  console.error(`Unable to connect to database: ${config.mongoUri}`, err);
});

const PORT = process.env.PORT || config.port; 
app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}.`);
});
