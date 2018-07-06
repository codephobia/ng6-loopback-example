import { Component, OnInit } from '@angular/core';
import { UserApi as UserService } from '@lbservices';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
      private user: UserService
  ) {}

  isAuthenticated(): boolean {
    return this.user.isAuthenticated();
  }
}
