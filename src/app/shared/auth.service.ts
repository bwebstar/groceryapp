import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  // login method
  login(email:string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(() => {
      localStorage.setItem('token','true');
      this.router.navigate(['/dashboard']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  // register method
  register(email:string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(() => {
      alert('Registration Successfully');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

    // login method
    logout(){
      this.fireAuth.signOut().then(() => {
        localStorage.setItem('token','false');
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
      })
    }
  

}
