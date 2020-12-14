package com.greenboard.investman.service.impl;

import com.greenboard.investman.model.user.User;
import com.greenboard.investman.repository.user.UserRepository;
import com.greenboard.investman.service.UserService;
import com.greenboard.investman.util.APIConstants;
import com.greenboard.investman.util.convertor.UserVOConvertor;
import com.greenboard.investman.vo.restapi.StatusVO;
import com.greenboard.investman.vo.user.UserVO;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public StatusVO getLoginStatus(String userId, String password) {
        StatusVO responseVO = new StatusVO();
        User user = userRepository.findById(userId).orElse(null);
        if (user != null && StringUtils.equals(user.getPassword(), password)) {
            responseVO.setStatus(APIConstants.LOGIN_STATUS_SUCCESS);
        } else {
            responseVO.setStatus(APIConstants.LOGIN_STATUS_FAILED);
        }
        return responseVO;
    }

    @Override
    public StatusVO createUser(UserVO userVO) {
        StatusVO statusVO = new StatusVO();
        User user = UserVOConvertor.userFromUserVO(userVO);
        userRepository.save(user);
        statusVO.setStatus(APIConstants.LOGIN_STATUS_SUCCESS);
        return statusVO;
    }
}
