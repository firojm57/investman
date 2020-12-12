package com.greenboard.investman.model.user;

import com.greenboard.investman.model.common.Audit;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_info")
@Getter @Setter @NoArgsConstructor
public class UserInfo extends Audit {
    @Id
    @GeneratedValue(generator = "user_info_generator")
    @SequenceGenerator(
            name = "user_info_generator",
            sequenceName = "user_info_sequence",
            initialValue = 1000
    )
    @Column(name = "user_info_id", nullable = false)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "primary_email", nullable = false)
    private String primaryEmail;

    @Column(name = "primary_mobile")
    private String primaryMobile;

    @Column(name = "primary_address")
    private String primaryAddress;
}
