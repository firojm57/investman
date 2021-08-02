import { Component, OnInit } from '@angular/core';
import { keys } from 'src/app/shared/utils/constants';
import { UserOptionModel } from '../../util/user-utils';

@Component({
  selector: 'investman-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  openUserAction: boolean = false;
  optionModels: UserOptionModel[] = [];
  selectedUserOption: string = "";

  constructor() {
    this.optionModels.push(new UserOptionModel("profile", keys.userActionProfile));
    this.optionModels.push(new UserOptionModel("setting", keys.userActionSetting));
    this.optionModels.push(new UserOptionModel("logout", keys.userActionLogout));
  }

  ngOnInit(): void {
  }

  onUserIconClick() {
    this.openUserAction = !this.openUserAction;
  }

  onOptionClick(option: UserOptionModel) {
    this.onUserIconClick();
    this.selectedUserOption = option.name;
  }
}
