const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: 'item1',
    enhancement: Math.floor(Math.random() * 21),
    durability: Math.floor(Math.random() * 101)
}

const item1 = {
    name: 'item1',
    enhancement: 15,
    durability: 51
}

describe("enhancer.js", () => {

    describe("succeed() function", () => {
        it("should return a successful enhancement", () => {
            const succeed = enhancer.succeed(item);
            expect(succeed).toEqual(item);
        })
    })

    describe("fail() function", () => {
        it("should return a failed enhancement", () => {
            const fail = enhancer.fail(item);
            expect(fail).toEqual(item);
        })
    })

    describe("repair() function", () => {
        it("should return a repaired enhancement", () => {
            const repair = enhancer.repair(item);
            expect(repair).toEqual(item);
        })
    })

    describe("get() function", () => {
        it("should get the enhancements", () => {
            const get = enhancer.get(item);
            expect(get).toEqual(item);
        })
    })

})
