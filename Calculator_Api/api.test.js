const request = require("supertest");
const app = require("./app");

describe("Api Request Testing", () => {

    // Addition
    test("Add two Number using add or %2B", async () => {
        let response = await request(app).get("/?a=11&b=33&op=add");
        expect(response.body).toEqual({ "a": 11, "b": 33, "c": 44, "op": "add" });
        response = await request(app).get("/?a=11&b=33&op=%2B");
        expect(response.body).toEqual({ "a": 11, "b": 33, "c": 44, "op": "+" });
        expect(response.statusCode).toBe(200);
    });

    // Substration
    test("Subtract two Number  using sub or -", async () => {
        let response = await request(app).get("/?a=33&b=11&op=sub");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": 22, "op": "sub" });
        response = await request(app).get("/?a=33&b=11&op=-");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": 22, "op": "-" });
        expect(response.statusCode).toBe(200);
    });
    // Multiplication
    test("Multiplication two Number using * or mul ", async () => {
        let response = await request(app).get("/?a=33&b=11&op=mul");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": 363, "op": "mul" });
        response = await request(app).get("/?a=33&b=11&op=*");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": 363, "op": "*" });
        expect(response.statusCode).toBe(200);
    });
    //Division
    test("Division two Number using / or div", async () => {
        let response = await request(app).get("/?a=33&b=11&op=div");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": 3, "op": "div" });
         response = await request(app).get("/?a=33&b=11&op=/");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": 3, "op": "/" });
        expect(response.statusCode).toBe(200);
    });
    //Others
    test("Other Request Should be null", async () => {
        const response = await request(app).get("/?a=33&b=11&op=abccnn");
        expect(response.body).toEqual({ "a": 33, "b": 11, "c": null, "op": "abccnn" });
        expect(response.statusCode).toBe(200);
    });
});

