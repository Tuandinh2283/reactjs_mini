package com.example.backend.Controler;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepository;
import com.example.backend.dto.AuthRequest;
import com.example.backend.dto.AuthResponse;
import com.example.backend.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/api/auth")
    public ResponseEntity<?> register(@RequestBody AuthRequest authRequest) {
        if (userRepository.findByUsername(authRequest.getUsername()).isPresent()){
            return ResponseEntity.badRequest().body("Username is already in use");
        }
        User user = User.builder()
                .username(authRequest.getUsername())
                .password(passwordEncoder.encode(authRequest.getPassword()))
                .build();
        userRepository.save(user);
        return ResponseEntity.ok(Collections.singletonMap("message", "User registered successfully"));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        String token = jwtTokenProvider.createToken(request.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }

}
