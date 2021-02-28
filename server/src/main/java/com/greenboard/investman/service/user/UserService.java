package com.greenboard.investman.service.user;

import com.greenboard.investman.vo.common.StatusVO;
import com.greenboard.investman.vo.user.UserVO;

public interface UserService {
    StatusVO getLoginStatus(String userId, String password);

    StatusVO createUser(UserVO userVO);
}
