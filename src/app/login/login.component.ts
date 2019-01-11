import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';
import { AlertService } from 'app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: User = new User()
  loading = false;
  invalidCredantials = false;
  returnUrl = 'api/medecinProfile';


  constructor(private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.invalidCredantials = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.invalidCredantials = true;
          this.loading = false;
        });
  }
}
