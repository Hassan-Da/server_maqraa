const HTTP = require("http");
const PORT = process.env.PORT || 5000;
const App = require("./src/App");

const server = HTTP.createServer(App);

const database = require("./config/database");

server.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
