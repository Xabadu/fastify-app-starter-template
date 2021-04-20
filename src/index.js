require("dotenv").config();

const server = require("./app")({ logger: true });

server.listen(process.env.PORT || 5000, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
