import { Shop, Item } from '../gilded_rose';

// describe("Gilded Rose", () => {

//     it("should foo", () => {
//         const gildedRose = new Shop([new Item("foo", 0, 0)]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].name).toEqual("fixme");
//     });
// });

describe("testing function updateQuality", () => {
    it("should lower the quality by 1", () => {
        const gildedRose = new Shop([new Item("nieco", 1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});

describe("regular item", () => {
    it("should lower the quality by 1 when the day passes", () => {
        const gildedRose = new Shop([new Item("regular item", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9);
    });

    it("should lower the sellIn by 1 when the day passes", () => {
        const gildedRose = new Shop([new Item("regular item", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
    });

    it("should lower the quality by 2 when the sellIn is 0 or less", () => {
        const gildedRose = new Shop([new Item("regular item", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });

    it("should not lower the quality below 0", () => {
        const gildedRose = new Shop([new Item("regular item", 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});