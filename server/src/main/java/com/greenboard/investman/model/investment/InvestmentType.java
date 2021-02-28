package com.greenboard.investman.model.investment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "investment_type")
public class InvestmentType {
    @Id
    @GeneratedValue(generator = "type_id_generator")
    @SequenceGenerator(
            name = "type_id_generator",
            sequenceName = "type_id_sequence",
            initialValue = 1
    )
    @Column(name = "type_id", nullable = false)
    private long id;

    @Column(name = "type")
    private String type;

    @Column(name = "type_name")
    private String typeName;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "investment_id")
    private Investment investment;
}
