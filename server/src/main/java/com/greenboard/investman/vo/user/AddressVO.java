package com.greenboard.investman.vo.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressVO {
    private String line1;
    private String line2;
    private String city;
    private String state;
    private String country;
    private String postalCode;
}
