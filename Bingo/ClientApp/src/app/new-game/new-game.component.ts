import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../service/game-board.service';
import { GameBoard } from '../model/GameBoard';

@Component({
  selector: 'new-game',
  templateUrl: './new-game.component.html',
})

export class NewGameComponent {
  gameBoards: GameBoard[];
  selectedGameBoard: GameBoard;

  constructor(readonly gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.gameBoardService.getGameBoards().subscribe(data => this.gameBoards = data);
  }
}
