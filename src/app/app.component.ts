import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            PersonComponent,
            PersonAltComponent, 
            EventBindComponent,
            OutputDemoComponent,
            PersonCardComponent,
            TemplateDrivenFormComponent,
            ReactiveFormComponent
                  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  name: string = 'Bill';
  lastName = 'Zevgitis';
   
  person: Person = {
    givenName: 'Bill',
    surName: 'Zevgitis',
    age: 36,
    email: 'bzevgitis@aueb.gr',
    address: 'Athens, Greece'
  };
 
  users: Person[] = [];


 sendUser: Person | undefined;

 constructor(private appService: AppService = Inject(AppService)) {}
  
 ngOnInit(): void {
  this.appService.getAllUsers().subscribe((users) => {
    this.users = users;
    console.log(this.users);
  })
  }

onDeleteUser(i: number): void {
  this.users.splice(i, 1);
}

onSendUser(user:Person) {
  console.log(user);
this.sendUser = user;
}

onNewPerson(person: Person) {
  this.users.push(person);
}


}
