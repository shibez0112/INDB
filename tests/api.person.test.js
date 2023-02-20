const request = require("supertest");
const app = require("../app");

describe("Get api/v1/person/", () => {
  it("should return get all people", async () => {
    const res = await request(app).get("/api/v1/person");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe("get all people");
  });
});
