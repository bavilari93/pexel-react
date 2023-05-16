
require('dotenv').config();

const Config = {
  PEXEL_API_KEY: `${process.env.PEXEL_API_KEY}`,
  PEXEL_API_URL: `${process.env.PEXEL_API_URL}`,
  PORT: `${process.env.PORT}`,
};

module.exports = Config;