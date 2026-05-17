package com.greenboard.investman.vo.user.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserLoginRequestVO {
    private String userId;
    private String password;
}
