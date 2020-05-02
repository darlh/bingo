import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { GameBoard } from '../model/GameBoard';

@Injectable()
export class GameBoardService {
  baseUrl: any;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.baseUrl = this.configService.baseUrl + 'api/Board/';
  }

  getGameBoard(id: number) {
    return this.http.get<GameBoard>(this.baseUrl + id);
  }

  getGameBoards() {
    return this.http.get<GameBoard[]>(this.baseUrl);
  }

  createGameBoard(board: GameBoard) {
    return this.http.post<GameBoard>(this.baseUrl, board).subscribe(
      data => {
        console.log("Create is successful!", data);
      },
      error => {
        console.log("Error", error);
        throw (error);
      }
    );
  }

  editGameBoard(board: GameBoard) {
    return this.http.put<GameBoard>(this.baseUrl, board).subscribe(
      data => {
        console.log("Edit is successful!", data);
      },
      error => {
        console.log("Error", error);
        throw (error);
      })
  }
}
