import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GameBoardService } from '../service/game-board.service';
import { GameBoard, BoardTile } from '../model/GameBoard';

@Component({
  selector: 'edit-board',
  templateUrl: './create-edit-board.component.html',
})

export class EditBoardComponent implements OnInit {
  gameBoard: GameBoard;

  constructor(readonly gameBoardService: GameBoardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameBoardService.getGameBoard(+this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.gameBoard = data;
      this.gameBoard.tiles.sort((a, b) => { return a.order>b.order ? 1 : -1})
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.gameBoardService.editGameBoard(this.gameBoard);
    }
  }

  addTile() {
    this.gameBoard.tiles.push(new BoardTile());
    this.gameBoard.tiles[this.gameBoard.tiles.length-1].order = this.gameBoard.tiles.length;
  }

  removeTile(i: number) {
    this.gameBoard.tiles.splice(i, 1);
  }
}
