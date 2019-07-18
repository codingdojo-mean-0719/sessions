import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationErrors: string[] = [];
  user = new User();

  constructor(private readonly auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(user: User) {
    console.log('registering user', user);

    this.auth.register(user).subscribe(loggedUser => {
      console.log('logged user', loggedUser);
      this.router.navigateByUrl('books');
    });
  }
}
