import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameCardService } from '../service/game-card.service';
import { GameCard, CardTile } from '../model/GameCard';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})

export class GameCardComponent implements OnInit {
  gameBoardId: number;
  gameCard: GameCard;
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
  displayWinDialog: boolean = false;

  constructor(readonly gameCardService: GameCardService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.gameCardService.getGameCard(+this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.gameCard = data;
      this.gameCard.bingo = false;
      this.gameCard.tiles.forEach(tile => tile.covered = false);
      this.gameCard.freeSpace = true; //change to http parameter
      if (this.gameCard.freeSpace) {
        this.gameCard.tiles.find(tile => tile.xCoordinate == 3 && tile.yCoordinate == 3).content = "Free";
        this.gameCard.tiles.find(tile => tile.xCoordinate == 3 && tile.yCoordinate == 3).covered = true;
      }
    });
  }

  checkForBingo() {
    //check vertical win
    this.rows.forEach(row => {
      if (this.gameCard.tiles.filter(tile => tile.yCoordinate == row).every(tile => tile.covered == true)) {
        this.columns.forEach(column => {
          this.gameCard.tiles.find(tile => tile.xCoordinate == column && tile.yCoordinate == row).bingo = true;
        });
        this.gameCard.bingo = true;
      }
    });
    //check horizonatal bingo
    this.columns.forEach(column => {
      if (this.gameCard.tiles.filter(tile => tile.xCoordinate == column).every(tile => tile.covered == true)) {
        this.rows.forEach(row => {
          this.gameCard.tiles.find(tile => tile.xCoordinate == column && tile.yCoordinate == row).bingo = true;
        });
        this.gameCard.bingo = true;
      }
    });
    //check diagonal bingo
    if (this.gameCard.tiles.filter(tile => tile.xCoordinate == tile.yCoordinate).every(tile => tile.covered == true)) {
      this.gameCard.tiles.filter(tile => tile.xCoordinate == tile.yCoordinate).forEach(tile => tile.bingo = true);
      this.gameCard.bingo = true;
    }
    if (this.gameCard.tiles.filter(tile => tile.xCoordinate == 6 - tile.yCoordinate).every(tile => tile.covered == true)) {
      this.gameCard.tiles.filter(tile => tile.xCoordinate == 6 - tile.yCoordinate).forEach(tile => tile.bingo = true);
      this.gameCard.bingo = true;
    }

    if (this.gameCard.bingo) {
      this.onWin();
    }
  }

  clickTile(x: number, y: number) {
    if (!this.gameCard.bingo) {
      this.gameCard.tiles.find(tile => tile.xCoordinate == x && tile.yCoordinate == y).covered = !this.gameCard.tiles.find(tile => tile.xCoordinate == x && tile.yCoordinate == y).covered;
      this.checkForBingo();
    }
  }

  onWin() {
    this.displayWinDialog = true;
  }

}
