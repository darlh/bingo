import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { GameCard } from '../model/GameCard';

@Injectable()
export class GameCardService {
  baseUrl: any;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.baseUrl = this.configService.baseUrl + 'api/Card/';
  }

  getGameCard(id: number) {
    return this.http.get<GameCard>(this.baseUrl + id);
  }
}
