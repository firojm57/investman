package com.greenboard.investman.service.user;

import com.greenboard.investman.vo.user.UserProfileVO;

public interface UserProfileService {
    UserProfileVO getUserProfileByUserId(String userId);
}
