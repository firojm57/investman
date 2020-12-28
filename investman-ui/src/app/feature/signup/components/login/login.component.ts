import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { apiConstants, constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string = "";
  loginFailCount: number = 0;

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
    this.userId = event.target.userId.value;
    this.password = event.target.userPass.value;
    this.userService.getLoginStatus(this.userId, this.password).subscribe(statusModel => {
      if(statusModel.status == constants.statusSuccess) {
        this.router.navigate([`/${apiConstants.home}`]);
        this.loginFailCount = 0;
      } else {
        this.loginFailCount += 1;
      }
    });
  }
}
