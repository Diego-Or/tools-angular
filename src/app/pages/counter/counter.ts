import { Component, OnInit, signal } from '@angular/core';

@Component({
  // selector: 'counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.scss', './../../app.scss']
})

export class counterPageComponent{
  constructor() { }
  contador = signal(0);

  increseOne():void{
    this.contador.update(v => v += 1);
  }
  refresh():void{
    this.contador.set(0);
  }
  decreseOne():void{
    this.contador.update(v => v -= 1);
  }
}
