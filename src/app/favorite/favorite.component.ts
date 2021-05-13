import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FavoriteChangedEventArgs } from '../types/event';
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // inputs: ['isFavorite']
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean = false;
  @Output('change') click:EventEmitter<FavoriteChangedEventArgs> = new EventEmitter();


  changeColor() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite});
  }

  constructor(){}

  ngOnInit(): void {

  }
}


