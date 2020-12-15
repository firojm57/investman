package com.greenboard.investman.service.user.impl;

import com.greenboard.investman.model.user.UserProfile;
import com.greenboard.investman.repository.user.UserProfileRepository;
import com.greenboard.investman.service.user.UserProfileService;
import com.greenboard.investman.util.convertor.UserModelConvertor;
import com.greenboard.investman.vo.user.UserProfileVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService {

    @Autowired
    private UserProfileRepository profileRepository;

    @Override
    public UserProfileVO getUserProfileByUserId(String userId) {
        UserProfile profile = profileRepository.findByUserUserId(userId).orElse(null);
        return UserModelConvertor.toUserProfileVO(profile);
    }
}
