package com.greenboard.investman.model.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user_address")
public class Address {

    public Address(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    @Id
    @GeneratedValue(generator = "address_id_generator")
    @SequenceGenerator(
            name = "address_id_generator",
            sequenceName = "address_id_sequence",
            initialValue = 1000
    )
    @Column(name = "address_id", nullable = false)
    private Long addressId;

    private String line1;
    private String line2;
    private String city;
    private String state;
    private String country;

    @Column(name = "postal_code")
    private String postalCode;

    @ManyToOne
    @JoinColumn(name = "user_profile_id")
    private UserProfile userProfile;
}
