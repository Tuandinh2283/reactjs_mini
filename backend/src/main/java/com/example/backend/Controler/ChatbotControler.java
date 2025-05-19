package com.example.backend.Controler; // Đổi từ "Controler" -> "Controller" cho đúng chính tả

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatbotControler {
    @PostMapping("/ask") // Sửa "/apk" -> "/ask" cho đúng nghĩa
    public ResponseEntity<Map<String, String>> ask(@RequestBody Map<String, String> map) {
        String question = map.get("question");

        // Tạm thời trả lời đơn giản
        String answer = "Bạn vừa hỏi: " + question;

        Map<String, String> response = new HashMap<>();
        response.put("answer", answer);

        return ResponseEntity.ok(response);
    }
}
