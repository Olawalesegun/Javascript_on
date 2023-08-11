const sum = require("../class/sum");

describe("testing the sum folder", () => {
    test("That 5 + 3 equals 8", () =>{
        //Give
        expect(sum(5, 3)).toBe(8);
}) 

});