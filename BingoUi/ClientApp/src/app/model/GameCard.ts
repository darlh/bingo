export class GameCard {
  id: number;
  title: string;
  author: string;
  tiles: CardTile[];
  freeSpace: boolean;
  bingo: boolean;
}

export class CardTile {
  id: number;
  content: string;
  xCoordinate: number;
  yCoordinate: number;
  covered: boolean;
  bingo: boolean;
}
