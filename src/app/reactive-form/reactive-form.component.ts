import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
form = new FormGroup ({
  givenName: new FormControl('', Validators.required),
 surName: new FormControl('', Validators.required),
  age: new FormControl(0,[Validators.required, Validators.min(18), Validators.max(120),] ),
  email: new FormControl('', [Validators.required, Validators.email]),
  address: new FormControl('', Validators.required),
  photoURL: new FormControl(''),


})
}
