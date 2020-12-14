package com.greenboard.investman.controller.user;

import com.greenboard.investman.service.UserService;
import com.greenboard.investman.vo.restapi.StatusVO;
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

    @GetMapping("/login")
    public ResponseEntity<StatusVO> getLoginStatus(@RequestParam("userId") String userId,
                                                   @RequestParam("password") String password) {
        return ResponseEntity.ok().body(userService.getLoginStatus(userId, password));
    }

    @PostMapping("/create")
    @Transactional
    public ResponseEntity<StatusVO> createUser(@RequestBody UserVO userVO) {
        return ResponseEntity.ok().body(userService.createUser(userVO));
    }
}
