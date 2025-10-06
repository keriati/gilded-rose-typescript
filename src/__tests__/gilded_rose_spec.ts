import { Shop, Item } from '../gilded_rose';

describe("Sulfuras", () => {
    it("nesmie získať kvalitu", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 3, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it("nesmie stratiť kvalitu ani pri dátume spotreby 0", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });

    it("nesmie stratiť kvalitu", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(80);
    });
});

describe("Aged Brie", () => {
    it("má zvyšovať kvalitu o 1 každý deň", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 25, 24)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(25);
    });

    it("nesmie mať kvalitu vyššiu ako 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("nesmie mať kvalitu zápornú", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(2);
    });
});

describe("Backstage passy", () => {
    it("majú zvýšiť kvalitu o 3 ak zostáva 5 dní alebo menej", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 44)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(47);
    });

    it("nesmú mať kvalitu vyššiu ako 50", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    });

    it("majú zvýšiť kvalitu o 2 ak zostáva 10 dní alebo menej", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 44)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(46);
    });

    it("majú mať kvalitu 0 po koncerte", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("majú zvýšiť kvalitu o 1 ak zostáva viac ako 10 dní", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 44)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(45);
    });

    it("nesmú mať kvalitu pod 0", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });
});

describe("Conjured", () => {
    it("nesmú mať kvalitu zápornú", () => {
        const gildedRose = new Shop([new Item("Conjured", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    });

    it("majú stratiť 4 body kvality po uplynutí dátumu spotreby", () => {
        const gildedRose = new Shop([new Item("Conjured", 0, 24)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(20);
    });

    it("majú stratiť 2 body kvality pred uplynutím dátumu spotreby", () => {
        const gildedRose = new Shop([new Item("Conjured", 5, 24)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(22);
    });
});