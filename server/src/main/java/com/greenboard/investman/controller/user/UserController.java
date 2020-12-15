package com.greenboard.investman.controller.user;

import com.greenboard.investman.service.user.UserProfileService;
import com.greenboard.investman.service.user.UserService;
import com.greenboard.investman.vo.restapi.StatusVO;
import com.greenboard.investman.vo.user.UserProfileVO;
import com.greenboard.investman.vo.user.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping
    public ResponseEntity<UserProfileVO> getUserProfileByUserId(@RequestParam("userId") String userId) {
        return ResponseEntity.ok(userProfileService.getUserProfileByUserId(userId));
    }

    @GetMapping("/login")
    public ResponseEntity<StatusVO> getLoginStatus(@RequestParam("userId") String userId,
                                                   @RequestParam("password") String password) {
        return ResponseEntity.ok(userService.getLoginStatus(userId, password));
    }

    @PostMapping("/create")
    @Transactional
    public ResponseEntity<StatusVO> createUser(@RequestBody UserVO userVO) {
        return ResponseEntity.ok(userService.createUser(userVO));
    }
}
