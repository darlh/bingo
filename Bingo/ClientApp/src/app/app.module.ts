import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GameCardComponent } from './game-card/game-card.component';
import { SelectGameComponent } from './select-game/select-game.component';
import { CreateBoardComponent } from './create-edit-board/create-board.component';
import { EditBoardComponent } from './create-edit-board/edit-board.component';

import { ConfigService } from './service/config.service';
import { GameBoardService } from './service/game-board.service';
import { GameCardService } from './service/game-card.service';

import { TilePositionPipe } from './pipe/tile-position.pipe';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GameCardComponent,
    SelectGameComponent,
    CreateBoardComponent,
    EditBoardComponent,

    TilePositionPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'game-card/:id', component: GameCardComponent },
      { path: 'create-board', component: CreateBoardComponent },
      { path: 'edit-board/:id', component: EditBoardComponent },
    ])
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: ConfigService) => (http: HttpClient, baseUrl: string) => config.loadConfig(),
      deps: [ConfigService],
      multi: true
    },
    GameBoardService,
    GameCardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
