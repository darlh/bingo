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
    this.baseUrl = this.configService.baseUrl + 'api/Game/gameBoard/';
  }

  getGameBoard(id: number) {
    return this.http.get<GameBoard>(this.baseUrl + id);
  }

  getGameBoards() {
    return this.http.get<GameBoard[]>(this.baseUrl);
  }
}
