const fastify = require("fastify");

const build = (opts = {}) => {
  const app = fastify(opts);
  app.register(require("fastify-cors"));
  app.register(require("fastify-helmet"));

  app.register(require("./routes/base"), { prefix: "/api" });

  return app;
};

module.exports = build;
