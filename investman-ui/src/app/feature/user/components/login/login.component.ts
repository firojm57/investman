import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/model';
import { UserService } from 'src/app/service/user/user.service';
import { apiConstants, constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'investman-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFailCount: number = 0;
  loginErrorMessage: string = "";
  userModel: UserLoginModel = new UserLoginModel("", "");

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onUserIdFocus() {
    this.resetError();
  }
  
  onPasswordFocus() {
    this.resetError();
  }

  onUserKeyUp(event: any) {
    this.userModel.userId = event.target.value
  }

  onPassKeyUp(event: any) {
    this.userModel.password = event.target.value
  }

  onSubmit() {
    if(!this.userModel.userId || !this.userModel.password) {
      this.loginErrorMessage = "Invalid Credentials"
      return;
    }
    this.userService.getLoginStatus(this.userModel).subscribe(statusModel => {
      if(statusModel.status == constants.statusSuccess) {
        this.router.navigate([`/${apiConstants.home}`]);
        this.loginFailCount = 0;
      } else {
        this.loginFailCount += 1;
      }
    },
    error => {
      this.loginErrorMessage = "Server Error";
    },
    () => {

    });
  }

  private resetError() {
    this.loginErrorMessage = "";
    this.loginFailCount = 0;
  }
}
