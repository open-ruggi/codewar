import {tribonacci} from "../../src/index"

describe("tribonacci",()=>{
    test("should print empty if n = 0 ",()=>{
        const expected = [];
        const result = tribonacci([0,0,1],0);
        expect(expected).toEqual(result);
    })
    test("should print [x] if n = 1 ",()=>{
        const expected = [0];
        const result = tribonacci([0,0,1],1);
        expect(expected).toEqual(result);
    })
    test("should print [x] if n <=3 ",()=>{
        const expected = [0,0];
        const result = tribonacci([0,0,1],2);
        expect(expected).toEqual(result);
    })

    test("should print list if n > 3 ",()=>{
        const expected = [0,0,1,1];
        const result = tribonacci([0,0,1],4);
        expect(expected).toEqual(result);
    })
})