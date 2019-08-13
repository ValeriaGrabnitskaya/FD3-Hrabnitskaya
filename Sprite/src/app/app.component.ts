import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'http://fe.it-academy.by/Examples/cards2.png';
  offsetX = '0';
  offsetY = '0';
  width = '140px';
  height = '190px';

  setNewStyle() {
    this.offsetX = '-140px';
  }
}
