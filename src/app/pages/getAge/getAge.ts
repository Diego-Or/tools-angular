import { Component, input, signal, output} from '@angular/core';
import { DatePipe } from "@angular/common";
import { Edad } from './../../interfaces/edad';

@Component({
  selector: 'getAge',
  templateUrl: 'getAge.html',
  styleUrls: ['./../../app.scss'],
  styles: '.InputFecha{max-width: 400px;}'
})

export class getAgeComponent{

  fechaActual: Date = new Date();
  fechaNacimiento = signal('');
  edadObj = signal<Edad>({year: 0, month: 0, days: 0, hours: 0});

  getAge() {
    const nacimiento = new Date(this.fechaNacimiento());
    const ahora = new Date();

    // Diferencia total en milisegundos
    const diffMs = ahora.getTime() - nacimiento.getTime();

    // Cálculo base de unidades de tiempo
    const diffAnios = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
    const diffMeses = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHoras = Math.floor(diffMs / (1000 * 60 * 60));

    // Cálculo más preciso: años, meses, días, horas
    let anios = ahora.getFullYear() - nacimiento.getFullYear();
    let meses = ahora.getMonth() - nacimiento.getMonth();
    let dias = ahora.getDate() - nacimiento.getDate();
    let horas = ahora.getHours() - nacimiento.getHours();

    if (horas < 0) {
      horas += 24;
      dias--;
    }

    if (dias < 0) {
      // Obtener los días del mes anterior
      const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
      dias += mesAnterior;
      meses--;
    }

    if (meses < 0) {
      meses += 12;
      anios--;
    }

    this.edadObj.set({
      year: anios,
      month: meses,
      days: dias,
      hours: horas
    });
  }

}
