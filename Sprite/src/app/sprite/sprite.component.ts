import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.css']
})
export class SpriteComponent {

  @Input() path: string;
  @Input() offsetX: string;
  @Input() offsetY: string;
  @Input() width: string;
  @Input() height: string;

  @Output() hasNextPicture = new EventEmitter();

  onGetNextPicture() {
    this.hasNextPicture.emit();
  }

}