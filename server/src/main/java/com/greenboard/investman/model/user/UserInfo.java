package com.greenboard.investman.model.user;

import com.greenboard.investman.model.common.Audit;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user_info")
public class UserInfo extends Audit {

    public UserInfo(String firstName, String middleName, String lastName, String primaryEmail, String primaryMobile, String primaryAddress, User user) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.primaryEmail = primaryEmail;
        this.primaryMobile = primaryMobile;
        this.primaryAddress = primaryAddress;
        this.user = user;
    }

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

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
