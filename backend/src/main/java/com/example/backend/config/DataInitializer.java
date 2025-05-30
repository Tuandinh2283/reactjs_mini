package com.example.backend.config;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepository;
import com.example.backend.enums.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initAdmin(UserRepository userRepository) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("admin123")); // mật khẩu được mã hóa
                admin.setRole(Role.valueOf("ADMIN")); // Ghi đúng: ROLE_ADMIN
                userRepository.save(admin);
                System.out.println("✅ Đã tạo tài khoản admin mặc định: admin / admin123");
            }
        };
    }
}
