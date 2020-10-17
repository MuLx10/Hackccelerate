import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

import { AuthService } from '../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy{

  @Input() user: User | null = null;
  private authListenerSubs: Subscription;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
