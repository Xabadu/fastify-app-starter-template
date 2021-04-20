module.exports = (fastify, opts, done) => {
  fastify.get("/", async () => {
    return { message: "👋" };
  });

  done();
};
