import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {merge, Observable} from 'rxjs';
import {User} from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user$: Observable<User | null> = merge(
    this.authService.getLoggedInUser(),
    this.authService.getUser()
  );
  title = 'learningApp';

  constructor(private authService: AuthService) {
  }
}
