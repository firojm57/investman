package com.greenboard.investman.service.impl;

import com.greenboard.investman.repository.user.UserRepository;
import com.greenboard.investman.service.UserService;
import com.greenboard.investman.vo.user.LoginRequestVO;
import com.greenboard.investman.vo.user.LoginResponseVO;
import org.springframework.beans.factory.annotation.Autowired;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public LoginResponseVO getLoginStatus(LoginRequestVO requestVO) {
        userRepository.findById(requestVO.getUserId()).orElse(null).getPassword();
        return null;
    }
}
