package com.greenboard.investman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class InvestmentManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestmentManagerApplication.class, args);
	}

}
