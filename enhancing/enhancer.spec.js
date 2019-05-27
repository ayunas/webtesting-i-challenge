const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: 'item1',
    enhancement: Math.floor(Math.random() * 21),
    durability: Math.floor(Math.random() * 101)
}

// const item1 = {
//     name: 'item1',
//     enhancement: 15,
//     durability: 51
// }

describe("enhancer.js", () => {

    describe("succeed() function", () => {
        it("should return a successful enhancement", () => {
            const succeed = enhancer.succeed(item);
            expect(succeed).toEqual({ ...item, enhancement: item.enhancement + 1 });
        })
    })

    describe("fail() function", () => {
        it("should return a failed item, reducing the durability of the item", () => {
            console.log('item in describe fail()', item);
            const newItem = { ...item };
            const fail = enhancer.fail(newItem);
            console.log('failed item', fail);
            expect(fail).toEqual({ ...item, durability: (item.durability - 5) });
        })
    })

    describe("repair() function", () => {
        it("should return a repaired enhancement", () => {
            const repair = enhancer.repair(item);
            expect(repair).toEqual({ ...item, durability: 100 });
        })
    })

    describe("get() function", () => {
        it("should get the enhancements", () => {
            const newItem = { ...item }
            const get = enhancer.get(newItem);
            console.log('get: ', get);
            expect(get).toEqual(item);
        })
    })
})
