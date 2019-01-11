import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { User } from '../models/user';
import { AlertService } from '../services/alert.service';


@Component({
  moduleId: module.id,
  templateUrl: 'signup.component.html'
})

export class SignupComponent {
  model: any = {};
  loading = false;

  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) { }


register() {
  this.loading = true;
  this.userService.create(this.model.nom, this.model.prenom, this.model.email, this.model.password, this.model.type).subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/login']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}
