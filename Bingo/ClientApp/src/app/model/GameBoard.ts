export interface GameBoard {
  id: number;
  title: string;
  tiles: Tile[];
  freeSpace: boolean;
  bingo: boolean;
}

export interface Tile {
  id: number;
  content: string;
  xCoordinate: number;
  yCoordinate: number;
  covered: boolean;
  bingo: boolean;
}
