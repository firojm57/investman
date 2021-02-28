package com.greenboard.investman.model.user;

import com.greenboard.investman.model.common.Audit;
import com.greenboard.investman.model.investment.Investment;
import com.greenboard.investman.model.saving.Saving;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user_profile")
public class UserProfile extends Audit {

    public UserProfile(String firstName, String middleName, String lastName, String email, String mobile, User user) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.user = user;
    }

    @Id
    @GeneratedValue(generator = "user_profile_id_generator")
    @SequenceGenerator(
            name = "user_profile_id_generator",
            sequenceName = "user_profile_id_sequence",
            initialValue = 1
    )
    @Column(name = "user_profile_id", nullable = false)
    private long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email_id", nullable = false)
    private String email;

    @Column(name = "mobile_number")
    private String mobile;

    @OneToMany(mappedBy = "userProfile",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Address> addresses;

    @OneToMany(mappedBy = "userProfile",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Investment> investments;

    @OneToMany(mappedBy = "userProfile",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Saving> savings;

    @Column(name = "profile_picture")
    private String profilePicture;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
