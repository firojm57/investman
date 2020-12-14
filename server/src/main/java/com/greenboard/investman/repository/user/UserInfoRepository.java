package com.greenboard.investman.repository.user;

import com.greenboard.investman.model.user.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoRepository extends JpaRepository<UserProfile, Long> {

}
