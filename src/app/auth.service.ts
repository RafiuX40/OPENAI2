import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) { }

  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
  async logout() {
    return signOut(this.auth);
  }
}
