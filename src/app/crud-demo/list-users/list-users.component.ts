import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../app.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  users: Person[] = [];
  constructor(private service: AppService = Inject(AppService)) {}
    
    
    ngOnInit(): void {
    this.service.getAllUsers().subscribe((users) => {
      this.users = users;
    });

  }

}
