import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../service/game-board.service';
import { GameBoard, Tile } from '../model/GameBoard';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})

export class GameBoardComponent implements OnInit {
  gameBoard: GameBoard;
  rows: number[] = [1, 2, 3, 4, 5];
  columns: number[] = [1, 2, 3, 4, 5];
  boardDimensions: number[][] =
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]
    ];


  constructor(readonly gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.gameBoardService.getGameBoard(1).subscribe(data => {
      this.gameBoard = data;
      this.gameBoard.bingo = false;
      this.gameBoard.tiles.forEach(tile => tile.covered = false);
      this.gameBoard.freeSpace = true; //change to http parameter
      if (this.gameBoard.freeSpace) {
        this.gameBoard.tiles.find(tile => tile.xCoordinate == 3 && tile.yCoordinate == 3).content = "Free";
        this.gameBoard.tiles.find(tile => tile.xCoordinate == 3 && tile.yCoordinate == 3).covered = true;
      }
    });
  }

  checkForBingo() {
    //check vertical win
    this.rows.forEach(row => {
      if (this.gameBoard.tiles.filter(tile => tile.yCoordinate == row).every(tile => tile.covered == true)) {
        this.columns.forEach(column => {
          this.gameBoard.tiles.find(tile => tile.xCoordinate == column && tile.yCoordinate == row).bingo = true;
        });
        this.gameBoard.bingo = true;
      }
    });
    //check horizonatal bingo
    this.columns.forEach(column => {
      if (this.gameBoard.tiles.filter(tile => tile.xCoordinate == column).every(tile => tile.covered == true)) {
        this.rows.forEach(row => {
          this.gameBoard.tiles.find(tile => tile.xCoordinate == column && tile.yCoordinate == row).bingo = true;
        });
        this.gameBoard.bingo = true;
      }
    });
    //check diagonal bingo
    if (this.gameBoard.tiles.filter(tile => tile.xCoordinate == tile.yCoordinate).every(tile => tile.covered == true)) {
      this.gameBoard.tiles.filter(tile => tile.xCoordinate == tile.yCoordinate).forEach(tile => tile.bingo = true);
      this.gameBoard.bingo = true;
    }
    if (this.gameBoard.tiles.filter(tile => tile.xCoordinate == 6 - tile.yCoordinate).every(tile => tile.covered == true)) {
      this.gameBoard.tiles.filter(tile => tile.xCoordinate == 6 - tile.yCoordinate).forEach(tile => tile.bingo = true);
      this.gameBoard.bingo = true;
    }

    if (this.gameBoard.bingo) {
      this.onWin();
    }
  }

  clickTile(x: number, y: number) {
    if (!this.gameBoard.bingo) {
      this.gameBoard.tiles.find(tile => tile.xCoordinate == x && tile.yCoordinate == y).covered = !this.gameBoard.tiles.find(tile => tile.xCoordinate == x && tile.yCoordinate == y).covered;
      this.checkForBingo();
    }
  }

  onWin() {
  }

}
