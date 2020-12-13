package com.greenboard.investman.controller.user;

import com.greenboard.investman.service.UserService;
import com.greenboard.investman.vo.user.LoginResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login/{userId}")
    public LoginResponseVO getLoginStatus(@PathVariable("userId") String userId,
                                          @RequestParam("password") String password) {
        return userService.getLoginStatus(userId, password);
    }
}
