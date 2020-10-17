import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenStorage {
  private accessToken = 'authToken';

  set(token: string) {
    if (!token) { return; }
    localStorage.setItem(this.accessToken, token);
  }
  get() {
    return localStorage.getItem(this.accessToken);
  }
  clear(): void {
    localStorage.removeItem(this.accessToken);
    localStorage.clear();
  }
}
