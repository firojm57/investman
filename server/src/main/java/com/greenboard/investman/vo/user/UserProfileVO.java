package com.greenboard.investman.vo.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserProfileVO {
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String mobile;
    private Set<AddressVO> addressVOS;
}
