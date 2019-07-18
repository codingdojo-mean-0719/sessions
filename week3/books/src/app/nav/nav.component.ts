import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthed = false;

  constructor(private readonly auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.isAuthed$.subscribe(authed => {
      console.log('are we aauthed??', authed);
      this.isAuthed = authed;
    });
  }

  logout() {
    console.log('logging out');
    this.auth.logout().subscribe(() => {
      console.log('logged out ');
      this.router.navigate(['/']);
    });
  }
}
