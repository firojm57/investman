import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/model';
import { UserService } from 'src/app/service/user/user.service';
import { apiConstants, constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFailCount: number = 0;
  userModel: UserLoginModel = new UserLoginModel("", "");

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onUserIdFocus() {
    this.loginFailCount = 0;
  }
  
  onPasswordFocus() {
    this.loginFailCount = 0;
  }

  onSubmit(event: any) {
    this.userModel.userId = event.target.userId.value;
    this.userModel.password = event.target.userPass.value;
    this.userService.getLoginStatus(this.userModel).subscribe(statusModel => {
      if(statusModel.status == constants.statusSuccess) {
        this.router.navigate([`/${apiConstants.home}`]);
        this.loginFailCount = 0;
      } else {
        this.loginFailCount += 1;
      }
    });
  }
}
