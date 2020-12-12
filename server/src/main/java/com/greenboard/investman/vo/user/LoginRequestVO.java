package com.greenboard.investman.vo.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginRequestVO {
    private String userId;
    private String password;
}
