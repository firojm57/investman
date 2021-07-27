package com.greenboard.investman.model.investment;

import com.greenboard.investman.model.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "investment")
public class Investment {
    @Id
    @GeneratedValue(generator = "investment_id_generator")
    @SequenceGenerator(
            name = "investment_id_generator",
            sequenceName = "investment_id_sequence",
            initialValue = 1
    )
    @Column(name = "investment_id", nullable = false)
    private long id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "investment_date")
    private LocalDateTime investmentDate;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "action")
    private String action;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "investment",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<InvestmentType> investmentTypes;
}
