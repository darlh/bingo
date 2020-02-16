import { Pipe, PipeTransform } from '@angular/core';
import { Tile } from '../model/GameBoard';

@Pipe({ name: 'tilePosition' })
export class TilePositionPipe implements PipeTransform {
  transform(value: Tile[], x: number, y: number): Tile {
    return value.find(tile => tile.xCoordinate == x && tile.yCoordinate == y);
  }
}
