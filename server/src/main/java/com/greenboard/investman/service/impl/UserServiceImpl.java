package com.greenboard.investman.service.impl;

import com.greenboard.investman.model.user.User;
import com.greenboard.investman.repository.user.UserRepository;
import com.greenboard.investman.service.UserService;
import com.greenboard.investman.util.APIConstants;
import com.greenboard.investman.vo.user.LoginResponseVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public LoginResponseVO getLoginStatus(String userId, String password) {
        LoginResponseVO responseVO = new LoginResponseVO();
        User user = userRepository.findById(userId).orElse(null);
        if (user != null && StringUtils.equals(user.getPassword(), password)) {
            responseVO.setStatus(APIConstants.LOGIN_STATUS_SUCCESS);
        } else {
            responseVO.setStatus(APIConstants.LOGIN_STATUS_FAILED);
        }
        return responseVO;
    }
}
