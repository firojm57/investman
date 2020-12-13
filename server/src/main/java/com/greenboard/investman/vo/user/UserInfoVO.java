package com.greenboard.investman.vo.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoVO {
    private String firstName;
    private String middleName;
    private String lastName;
    private String primaryEmail;
    private String primaryMobile;
    private String primaryAddress;
}
