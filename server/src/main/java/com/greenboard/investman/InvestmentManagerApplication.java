package com.greenboard.investman;

import com.greenboard.investman.util.APIConstants;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableJpaAuditing
@EntityScan(basePackages = "com.greenboard.investman.model")
public class InvestmentManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestmentManagerApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/user/**")
						.allowedOrigins(APIConstants.UI_LOCAL_ORIGIN);
			}
		};
	}

}
