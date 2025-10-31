import { Component, input, signal, output} from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'getAge',
  templateUrl: 'getAge.html',
  styleUrls: ['./../../app.scss'],
  styles: '.InputFecha{max-width: 400px;}'
})

export class getAgeComponent{

  fechaActual: Date = new Date();
  fechaNacimiento = signal('');
  edad = signal(0);

  getAge(){
    // Convertir la fecha de nacimiento (string) a tipo Date
    const nacimiento = new Date(this.fechaNacimiento());

    // Calcular la diferencia de años
    let edad = this.fechaActual.getFullYear() - nacimiento.getFullYear();

    // Ajustar si aún no ha cumplido años este año
    const mesActual = this.fechaActual.getMonth();
    const diaActual = this.fechaActual.getDate();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }

    this.edad.set(edad);
  }

}
