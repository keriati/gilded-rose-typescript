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

describe("Aged Brie", () => {
    it("should increase the quality by 1 when the day passes", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
    });
    it("should increase the quality by 2 when the sellIn is 0 or less", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
    });
    it("should not increase the quality above 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    })
});

describe("Backstage passes", () => {
    it("should increase the quality by 1 when the day passes", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 18, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
    });
    it("should increase the quality by 2 when there are 10 or fewer days left", () => {
        const gildedRose = new Shop([new Item("Backstage pass to a TAFKAL80ETC concert", 10, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
    });
    it("should increase the quality by 3 when there are 5 or fewer days left", () => {
        const gildedRose = new Shop([new Item("Backstage pass to a TAFKAL80ETC concert", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
    });
    it("should drop the quality to 0 when the concert has passed", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
    it("should not increase value above 50", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    })
})

describe("Sulfuras, Hand of Ragnaros", () => {
    it("should not change the quality or sellIn", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(5);
    });
})

describe("Conjured items", () => {
    it("should lower the quality by 2 when the day passes", () => {
        const gildedRose = new Shop([new Item("Conjured item", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
    });
    it("should lower the quality by 4 when the sellIn is 0 or less", () => {
        const gildedRose = new Shop([new Item("Conjured item", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(6);
    });
    it("should not lower the quality below 0", () => {
        const gildedRose = new Shop([new Item("Conjured item", 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
})
