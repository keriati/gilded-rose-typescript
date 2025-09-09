import { Shop, Item } from '../gilded_rose';

//describe("Gilded Rose", () => {
//
//    it("Sulfuras should not change quality", () => {
//        //Arrange
//        const gildedRose = new Shop([new Item("Sulfuras", 10, 80)]);
//        //Act
//        const items = gildedRose.updateQuality();
//        //Assert
//        expect(items[0].quality).toEqual(80);
//    });
//});

//describe("Gilded Rose", () => {
//
//    it("Sulfuras should not change quality", () => {
//        //Arrange
//        const gildedRose = new Shop([new Item("Sulfuras", 10, 80)]);
//        //Act
//        const items = gildedRose.updateQuality();
//        //Assert
//        expect(items[0].quality).toEqual(80);
//    });
//});

describe("regular item", () => {
    it("Should drop quality", () => {
    const gildedRose = new Shop([new Item("Regular", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49);
    });
});