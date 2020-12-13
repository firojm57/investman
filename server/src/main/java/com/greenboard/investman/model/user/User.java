package com.greenboard.investman.model.user;

import com.greenboard.investman.model.common.Audit;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user_login")
public class User extends Audit {

    public User(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }

    @Id
    @Column(name = "user_id")
    private String userId;

    @Column(name = "password")
    private String password;

    @OneToMany(mappedBy = "user",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<UserInfo> userInfo;
}
