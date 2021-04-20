const build = require("../src/app");

test("GET base route should return 200", async () => {
  const app = build();
  const resp = {
    message: "👋",
  };

  const response = await app.inject({
    method: "GET",
    url: "/api",
  });

  expect(response.statusCode).toBe(200);
  expect(response.body).toBe(JSON.stringify(resp));
});

test("GET a non-existing route should return 404", async () => {
  const app = build();

  const response = await app.inject({
    method: "GET",
    url: "/invalid-route",
  });

  expect(response.statusCode).toBe(404);
});
