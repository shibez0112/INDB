const request = require('supertest');
const app = require('../app');


describe('GET api/v1/movies/', () => {
    it("should return all movie", async () =>{
        const res = await request(app).get('/api/v1/movies/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBe("get all movie");
    })
});