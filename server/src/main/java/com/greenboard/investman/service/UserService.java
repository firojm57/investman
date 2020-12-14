package com.greenboard.investman.service;

import com.greenboard.investman.vo.restapi.StatusVO;
import com.greenboard.investman.vo.user.UserVO;

public interface UserService {
    StatusVO getLoginStatus(String userId, String password);

    StatusVO createUser(UserVO userVO);
}
