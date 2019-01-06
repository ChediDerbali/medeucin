import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: User = new User()
  loading = false;
  invalidCredantials =false;


  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(
            data => {
              this.invalidCredantials = false;

                this.router.navigate(['/medecinProfile']);
            },
            error => {
                console.log(error)
                this.invalidCredantials = true;
                this.loading = false;
            });
}
}
