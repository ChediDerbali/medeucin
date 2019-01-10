import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { User } from '../models/user';


@Component({
  moduleId: module.id,
  templateUrl: 'signup.component.html'
})

export class SignupComponent {
  model: User = new User();
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService, ) { }

  register() {
    this.loading = true;
    this.userService.create(this.model.nom, this.model.prenom, this.model.email, this.model.password, this.model.type)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error)
          this.loading = false;
        });
  }
}
