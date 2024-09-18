const request = require("supertest");
const app = require("../app/app");

describe("GET / ", () => {
  it("should return a welcome message", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /text\/html/)
      .expect(200)
      .expect("Hello, everyone! Welcome to end to end cicd project", done);
  });
});
