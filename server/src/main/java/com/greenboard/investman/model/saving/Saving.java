package com.greenboard.investman.model.saving;

import com.greenboard.investman.model.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "saving")
public class Saving {
    @Id
    @GeneratedValue(generator = "saving_id_generator")
    @SequenceGenerator(
            name = "saving_id_generator",
            sequenceName = "saving_id_sequence",
            initialValue = 1
    )
    @Column(name = "saving_id", nullable = false)
    private long id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "saving_date")
    private LocalDateTime savingDate;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "action")
    private String action;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
