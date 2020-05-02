import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../service/game-board.service';
import { GameBoard, BoardTile } from '../model/GameBoard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'create-board',
  templateUrl: './create-edit-board.component.html',
})

export class CreateBoardComponent implements OnInit {
  gameBoard: GameBoard;

  constructor(readonly gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.gameBoard = new GameBoard();
    this.gameBoard.tiles = [];
    for (let i = 0; i < 25; i++) {
      this.gameBoard.tiles.push(new BoardTile());
      this.gameBoard.tiles[i].order = i + 1;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.gameBoardService.createGameBoard(this.gameBoard);
    }
  }

  addTile() {
    this.gameBoard.tiles.push(new BoardTile());
    this.gameBoard.tiles[this.gameBoard.tiles.length].order = this.gameBoard.tiles.length;
  }

  removeTile(i: number) {
    this.gameBoard.tiles.splice(i, 1);
  }
}
