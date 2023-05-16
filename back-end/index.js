const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Config = require("./config");

const app = express();
const port = Config.PORT || 3001;
app.use(cors());

//pexel search
app.get("/v1/search", async (req, res, next) => {
  try {
    const { query, page} = req.query;

    if (!query) {
      res.status(400).json({ error: "Query parameter is required" });
      return;
    }
    const response = await axios.get(
      `${Config.PEXEL_API_URL}/search`,
      {
        headers: {
          Authorization: Config.PEXEL_API_KEY,
        },
        params: {
            query,
            per_page: 10,
            page,
          },
      }
    );

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

app.get("/v1/curated", async (req, res, next) => {
    try {
      const {page} = req.query;
  
      const response = await axios.get(
        `${Config.PEXEL_API_URL}/curated/`,
        {
          headers: {
            Authorization: Config.PEXEL_API_KEY,
          },
          params: {
            per_page: 10,
            page,
          },
        }
      );  
      res.json(response.data);
    } catch (error) {
      next(error);
    }
  });
  

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
