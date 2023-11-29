import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Bill';
  lastName = 'Zevgitis';
   
  person: Person = {
    givenName: 'Bill',
    surName: 'Zevgitis',
    age: 36,
    email: 'bzevgitis@aueb.gr',
    address: 'Athens, Greece'
  };

}
