import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { keys } from 'src/app/shared/utils/constants';
import { UserOptionModel } from '../../util/user-utils';

@Component({
  selector: 'investman-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {
  optionModels: UserOptionModel[] = [];
  selectedUserOption: string = "";
  userActionVisible: boolean = false;

  constructor(private dataService: DataService) {
    this.optionModels.push(new UserOptionModel("profile", keys.userActionProfile));
    this.optionModels.push(new UserOptionModel("setting", keys.userActionSetting));
    this.optionModels.push(new UserOptionModel("logout", keys.userActionLogout));
  }

  ngOnInit(): void {
    this.dataService.getUserActionVisible().subscribe((visible: boolean) =>{
      this.userActionVisible = visible;
    });
  }

  onOptionClick(option: UserOptionModel) {
    this.selectedUserOption = option.name;
    this.dataService.setUserActionVisible(false);
  }
}
