import { Component } from '@angular/core';
import { AuthService }  from './auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  constructor(private auth: AuthService) {}
};
