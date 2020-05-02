export class GameBoard {
  id: number;
  title: string;
  author: string;
  tiles: BoardTile[];
}

export class BoardTile {
  id: number;
  content: string;
  order: number;
}
