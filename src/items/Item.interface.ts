export interface Item {
  name: string;
  sellIn: number;
  quality: number;

  updateQuality: () => void;
}
