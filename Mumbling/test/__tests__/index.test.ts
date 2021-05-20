import {Mumbling} from "../../src/index"

describe("Mumbling",()=>{
    test("should print R if write R or r ",()=>{
        const expected = 'R';
        const result = Mumbling('R');
        expect(expected).toEqual(result);
    })

    test("should print R if write R or r ",()=>{
        const expected = 'R';
        const result = Mumbling('r');
        expect(expected).toEqual(result);
    })

    test("should print R if write R or r ",()=>{
        const expected = 'R-Aa';
        const result = Mumbling('ra');
        expect(expected).toEqual(result);
    })
    test("should print R if write R or r ",()=>{
        const expected = 'R-Aa';
        const result = Mumbling('RA');
        expect(expected).toEqual(result);
    })

    test("should print R if write R or r ",()=>{
        const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy';
        const result = Mumbling('RqaEzty');
        expect(expected).toEqual(result);
    })
})