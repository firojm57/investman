package com.greenboard.investman.util.convertor;

import com.greenboard.investman.model.user.Address;
import com.greenboard.investman.model.user.User;
import com.greenboard.investman.model.user.UserProfile;
import com.greenboard.investman.vo.user.AddressVO;
import com.greenboard.investman.vo.user.UserProfileVO;
import com.greenboard.investman.vo.user.UserVO;

import java.util.List;
import java.util.stream.Collectors;

public class UserModelConvertor {
    public static User toUserModel(UserVO userVO) {
        User user = new User(userVO.getUserId(), userVO.getPassword());
        UserProfileVO userProfileVO = userVO.getUserProfileVO();
        if (userProfileVO != null) {
            UserProfile userProfile = new UserProfile(userProfileVO.getFirstName(), userProfileVO.getMiddleName(),
                    userProfileVO.getLastName(), userProfileVO.getEmail(),
                    userProfileVO.getMobile(), user);
            List<AddressVO> addressVOS = userProfileVO.getAddressVOS();
            if (addressVOS != null && !addressVOS.isEmpty()) {
                List<Address> addresses = addressVOS.stream().map(addressVO -> {
                    Address address = new Address(userProfile);
                    address.setLine1(addressVO.getLine1());
                    address.setLine2(addressVO.getLine2());
                    address.setCity(addressVO.getCity());
                    address.setState(addressVO.getState());
                    address.setCountry(addressVO.getCountry());
                    address.setPostalCode(addressVO.getPostalCode());
                    return address;
                }).collect(Collectors.toList());
                userProfile.setAddresses(addresses);
            }
            user.setUserProfile(userProfile);
        }
        return user;
    }

    public static UserProfileVO toUserProfileVO(UserProfile profile) {
        UserProfileVO profileVO = null;
        if (profile != null) {
            profileVO = new UserProfileVO(profile.getFirstName(), profile.getMiddleName(),
                    profile.getLastName(), profile.getEmail(), profile.getMobile(),
                    profile.getAddresses().stream()
                            .map(address -> new AddressVO(address.getLine1(), address.getLine2(),
                                    address.getCity(), address.getState(), address.getCountry(),
                                    address.getPostalCode()))
                            .collect(Collectors.toList()));
        }
        return profileVO;
    }
}
