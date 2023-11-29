import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';





@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person = {
    givenName: 'Bill',
    surName: 'Zevgitis',
    age: 36,
    email: 'bzevgitis@aueb.gr',
  }

}
