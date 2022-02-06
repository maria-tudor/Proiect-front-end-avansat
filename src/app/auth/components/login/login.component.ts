import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    /*
    this.alertService.info('Checking User Info');
    this.progressBar.startLoading();
    const loginObserver = {
      next: x => {
        this.progressBar.setSuccess();
        console.log('User logged in');
        this.alertService.success('Logged In');
        this.progressBar.completeLoading();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger('Unable to Login');
        this.progressBar.completeLoading();
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);
*/
  }

}
