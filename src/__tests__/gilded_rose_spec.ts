import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    it("should up the quality of aged brie by 2 if quality is less than 11 on the item Backstage pass", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage pass", 10, 44)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(46);
    });

    it("should up the quality of aged brie by 3 if quality is less than 6 on the item Backstage pass", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage pass", 5, 44)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(47);
    });

    it("should set the quality of Backstage pass to 0 if the due date has passed", () => {
        //arrange
        const gildedRose = new Shop([new Item("Backstage pass", 0, 40)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(0);
    });

    it("should degrade the quality twice as fast if the sell by date has passed", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 0, 44)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(42);
    });

    it("should not allow the quality to be negative", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(0);
    });

    it("should not allow the quality to be greater than 50 for items except Sulfuras", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(50);
    });

    it("should up the quality by 1 the older it gets", () => {
        //arrange
        const gildedRose = new Shop([new Item("Aged Brie", 25, 24)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(25);
    });

    it("should not drop in quailty if its sulfuras", () => {
        //arrange
        const gildedRose = new Shop([new Item("Sulfuras", 0, 80)]);
        // act
        const items = gildedRose.updateQuality();
        // assert
        expect(items[0].quality).toEqual(80);
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