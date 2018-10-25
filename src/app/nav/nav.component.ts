import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../user/user.service";
import { User } from "../user/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  getLoggedUser(): User|null {
    return this.userService.getLoggedUser();
  }

  logIn() {
    this.userService.logInUser();
  }

  logOut() {
    this.userService.logOutUser();
    this.router.navigate(['/']);
  }

}
