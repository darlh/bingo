import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { GameBoard } from '../model/GameBoard';
import { MessageService } from 'primeng/api';

@Injectable()
export class GameBoardService {
  baseUrl: any;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private router: Router,
    private messageService: MessageService,
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
        this.router.navigateByUrl('/');
        this.messageService.add({ severity: 'success', summary: 'Game Board Added!' });
        console.log("Create is successful!", data);
      },
      error => {
        console.log("Error", error);
        this.messageService.add({ severity: 'error', summary: 'Failed to add Game Board' });
        throw (error);
      }
    );
  }

  editGameBoard(board: GameBoard) {
    return this.http.put<GameBoard>(this.baseUrl, board).subscribe(
      data => {
        this.router.navigateByUrl('/');
        this.messageService.add({ severity: 'success', summary: 'Game Board Updated!' });
        console.log("Edit is successful!", data);
      },
      error => {
        console.log("Error", error);
        this.messageService.add({ severity: 'error', summary: 'Failed to update Game Board' });
        throw (error);
      })
  }

  deleteGameBoard(id: number) {
    return this.http.delete<GameBoard>(this.baseUrl + id).subscribe(
      data => {
        this.router.navigateByUrl('/');
        this.messageService.add({ severity: 'success', summary: 'Game Board Deleted!' });
        console.log("Delete is successful!", data);
      },
      error => {
        console.log("Error", error);
        this.messageService.add({ severity: 'error', summary: 'Failed to delete Game Board' });
        throw (error);
      }
    );
  }
}
