package com.greenboard.investman.service;

import com.greenboard.investman.vo.user.LoginResponseVO;

public interface UserService {
    LoginResponseVO getLoginStatus(String userId, String password);
}
