package portafolio.porta.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${ADMIN_USERNAME:default_admin}")
    private String adminUser;

    @Value("${ADMIN_PASSWORD:default_pass}")
    private String adminPass;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 1. Activamos CORS con la configuración definida abajo
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            // 2. Desactivamos CSRF (necesario para que funcionen los POST desde otro dominio)
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authz -> authz
                // Permite acceso libre para enviar mensajes
                .requestMatchers("/api/v1/messages").permitAll()
                // Protege las rutas de administrador
                .requestMatchers("/api/v1/admin/**").authenticated()
                // Permite cualquier otra cosa (útil para pruebas, luego se puede restringir)
                .anyRequest().permitAll()
            )
            .httpBasic(httpBasic -> {});

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // --- CONFIGURACIÓN CORS INFALIBLE ---
        // Usamos "*" para permitir cualquier origen (GitHub Pages, Localhost, etc.)
        configuration.setAllowedOrigins(List.of("*"));
        
        // Permitimos todos los métodos HTTP comunes
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        
        // Permitimos todos los encabezados
        configuration.setAllowedHeaders(List.of("*"));
        
        // IMPORTANTE: Al usar "*" en origins, allowCredentials DEBE ser false.
        // Esto está bien para el formulario de contacto público.
        configuration.setAllowCredentials(false);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new InMemoryUserDetailsManager(
            User.withDefaultPasswordEncoder()
                .username(adminUser)
                .password(adminPass)
                .roles("ADMIN")
                .build()
        );
    }
}
