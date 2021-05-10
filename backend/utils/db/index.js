import mongoose from "mongoose";

import config from "../../config";
import logger from "../logger";

mongoose.Promise = global.Promise;

const connection = mongoose.connect(config.database.uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

connection
  .then((db) => {
    logger.info(`Successfully connected to the database..`);
    return db;
  })
  .catch((err) => {
    if (err.message.code === "ETIMEDOUT") {
      logger.info("Attempting to re-establish database connection.");
      mongoose.connect(config.database.uri);
    } else {
      logger.error("Error while attempting to connect to database:");
      logger.error(err);
    }
  });

export default connection;
