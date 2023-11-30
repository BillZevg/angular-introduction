import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonComponent, PersonAltComponent],
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

  person2: Person = {
    givenName: 'Aristeidis',
    surName: 'Zevgitis',
    age: 64,
    email: 'arisz@aueb.gr',
    address: 'Athens, Greece'
  };


}
