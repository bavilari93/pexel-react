This repository contains a Node.js server that provides access to the Pexels API to search for and retrieve curated photos.

Installation
Install dependencies by running npm install.
Rename .env.example to .env and add your Pexels API key and desired server port to the file.

Usage
To start the server, run npm start-server. This will start the server on the port specified in the .env file.

The server has two endpoints:

/v1/search: returns a JSON array of photos matching the provided search query. Query parameters include query, per_page, and page.

/v1/curated: returns a JSON array of curated photos. Query parameters include per_page and page.


Configuration
The .env file contains the following configuration options:

PEXEL_API_KEY: Your Pexels API key. You can obtain an API key from https://www.pexels.com/api/new/.

PORT: The port on which the server will listen for incoming requests.
Contributing
