import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  jwtHelper = new JwtHelperService();

  constructor(private autService: AuthService) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.autService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
