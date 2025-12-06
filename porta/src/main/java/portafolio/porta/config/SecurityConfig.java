package portafolio.porta.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.beans.factory.annotation.Value; // ¡Importante para leer variables!

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // 1. Inyectamos las variables de entorno o usamos valores por defecto
    // Estos nombres deben coincidir con los definidos en docker-compose.yml y Render.
    @Value("${ADMIN_USERNAME:default_admin}")
    private String adminUser;

    @Value("${ADMIN_PASSWORD:default_pass}")
    private String adminPass;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/api/v1/messages").permitAll()
                        .requestMatchers("/api/v1/admin/**").authenticated()
                        .anyRequest().permitAll()
                )
                .httpBasic(httpBasic -> {});

        return http.build();
    }

    // 2. Usamos las variables inyectadas para crear el usuario
    @Bean
    public UserDetailsService userDetailsService() {
        System.out.println("Cargando usuario Admin: " + adminUser); // Para debugging en logs

        return new InMemoryUserDetailsManager(
                User.withDefaultPasswordEncoder()
                        .username(adminUser)
                        .password(adminPass)
                        .roles("ADMIN")
                        .build()
        );
    }
}