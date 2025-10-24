import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'getAge',
  templateUrl: 'getAge.html',
  styleUrl: 'getAge.scss'
})

export class getAgeComponent{
  constructor() { }
  inputFecha = 'prueba';
  fecha: string = '';

  getAge(): string{
    console.log(this.fecha);
    return `hola`
  }

}
