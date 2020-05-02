import { Component, OnInit, Input } from '@angular/core';
import { GameBoardService } from '../service/game-board.service';
import { GameBoard } from '../model/GameBoard';

@Component({
  selector: 'select-game',
  templateUrl: './select-game.component.html',
})

export class SelectGameComponent {
  gameBoards: GameBoard[];
  selectedGameBoard: GameBoard;

  @Input() route: string;
  @Input() buttonLabel: string;

  constructor(readonly gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.gameBoardService.getGameBoards().subscribe(data => this.gameBoards = data);
  }
}
