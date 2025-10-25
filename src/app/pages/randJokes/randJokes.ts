import { Component, OnInit, signal, computed } from '@angular/core';
import { Jokes } from '../../interfaces/jokes';

@Component({
  selector: 'randJokes',
  templateUrl: 'randJokes.html'
})

export class randjokesPageComponent{

  jokes: Jokes[] = [
  {id: 1,text: "¿Por qué los programadores prefieren la oscuridad? Porque la luz atrae bugs."},
  {id: 2,text: "Error 404: chiste no encontrado."},
  {id: 3,text: "¿Qué le dijo el router al WiFi? —Sin ti mi vida no tiene conexión."},
  {id: 4,text: "Un SQL entra a un bar, se acerca a dos mesas y pregunta: '¿Puedo unirme a ustedes?'"},
  {id: 5,text: "¿Por qué los desarrolladores odian la naturaleza? Porque tiene demasiados bugs."},
  {id: 6,text: "Programar es como cocinar, pero sin saber qué ingredientes tienes ni cómo se usa el horno."},
  {id: 7,text: "Dicen que el amor es como Java: empieza con una clase y termina en un objeto."},
  {id: 8,text: "¿Por qué los ingenieros no discuten? Porque siempre tienen la razón (float)."},
  {id: 9,text: "Mi código funciona... no sé por qué, pero funciona. Mejor no tocarlo."},
  {id: 10,text: "¿Por qué los programadores siempre confunden Halloween y Navidad? Porque OCT 31 == DEC 25."}
];

  jokeId = signal(0);

  getRandomJoke(){
    const randomIndex = Math.floor(Math.random() * this.jokes.length);
    this.jokeId.set(randomIndex);
  }

}
