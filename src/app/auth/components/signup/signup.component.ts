import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    console.log('Registering...', this.username, this.email, this.password);
  }
}
