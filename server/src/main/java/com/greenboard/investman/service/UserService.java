package com.greenboard.investman.service;

import com.greenboard.investman.vo.user.LoginRequestVO;
import com.greenboard.investman.vo.user.LoginResponseVO;

public interface UserService {
    LoginResponseVO getLoginStatus(LoginRequestVO requestVO);

}
