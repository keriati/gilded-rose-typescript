import { Shop, Item } from '../gilded_rose';

describe("Aged Brie", () => {
    it("should not allow the quality of Aged Brie to be negative", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(2);
    });

    it("should not allow the quality of Aged Brie to be greater than 50", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(50);
    });

    it("should up the quality by 1 the older Aged Brie gets", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 25, 24)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(25);
    });
});

describe("Regular item", () => {
    it("should drop in quality by 1 before due date", () => {
        //arrange
        const gildedRose = new Shop([new Item("Car", 5, 24)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(23);
    });

    it("should drop in quality by 2 if the due date has passed", () => {
        //arrange
        const gildedRose = new Shop([new Item("Car", 0, 24)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(22);
    });

    it("should not allow the quality to be negative", () => {
        //arrange
        const gildedRose = new Shop([new Item("Car", 0, 0)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(0);
    });
});

describe("Backstage passes", () => {
    it("should up the quality of Backstage pass by 1 if quality is more then 10", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 44)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(45);
    });

    it("should up the quality of Backstage pass by 2 if quality is less than 11", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 44)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(46);
    });

    it("should up the quality of Backstage pass by 3 if quality is less than 6 ", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 44)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(47);
    });

    it("should set the quality of Backstage pass to 0 if the due date has passed", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(0);
    });

    it("the quality of Backstage pass should never go below zero", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(0);
    });

    it("the quality of Backstage pass should never go above 50", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 3, 50)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(50);
    });
});

describe("Sulfuras", () => {
    it("Sulfuras should not drop in quailty", () => {
        //arrange
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(80);
    });

    it("Sulfuras should not drop in quailty if due date is 0", () => {
        //arrange
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(80);
    });

    it("Sulfuras should not up in quailty", () => {
        //arrange
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 3, 80)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(80);
    });
});

describe("Conjured", () => {
    it("Conjured items should drop in quality by 2 before due date", () => {
        //arrange
        const gildedRose = new Shop([new Item("Conjured", 5, 24)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(22);
    });

    it("Conjured items should drop in quality by 4 if the due date has passed", () => {
        //arrange
        const gildedRose = new Shop([new Item("Conjured", 0, 24)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(20);
    });

    it("Conjured items should not allow the quality to be negative", () => {
        //arrange
        const gildedRose = new Shop([new Item("Conjured", 0, 0)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(0);
    });
});