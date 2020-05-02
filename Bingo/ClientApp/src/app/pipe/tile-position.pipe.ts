import { Pipe, PipeTransform } from '@angular/core';
import { CardTile } from '../model/GameCard';

@Pipe({ name: 'tilePosition' })
export class TilePositionPipe implements PipeTransform {
  transform(value: CardTile[], x: number, y: number): CardTile {
    return value.find(tile => tile.xCoordinate == x && tile.yCoordinate == y);
  }
}
