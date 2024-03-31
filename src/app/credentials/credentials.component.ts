import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.css'
})
export class CredentialsComponent {
  isSignDivVisiable: boolean = true;
  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) { }

  onRegister() {
    const localUsers = JSON.parse(localStorage.getItem('angular17users') || '[]');
    localUsers.push(this.signUpObj);
    localStorage.setItem('angular17users', JSON.stringify(localUsers));
    alert('Registration Success');
  }

  onLogin() {
    const localUsers = JSON.parse(localStorage.getItem('angular17users') || '[]');
    const user = localUsers.find((u: SignUpModel) => u.email === this.loginObj.email && u.password === this.loginObj.password);
    if (user) {
      alert('User Found...');
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('No User Found');
    }
  }
}

export class SignUpModel {
  name: string = "";
  email: string = "";
  password: string = "";
}

export class LoginModel {
  email: string = "";
  password: string = "";
}