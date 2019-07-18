import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginErrors: string[] = [];
  user = new User();

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.login(user).subscribe(loggedUser => {
      console.log('logged user', loggedUser);

      this.router.navigateByUrl('books');
    });
  }
}
