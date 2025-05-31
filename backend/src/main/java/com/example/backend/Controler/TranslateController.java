// TranslateController.java
package com.example.backend.Controler;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/api/translate")
@CrossOrigin(origins = "*")
public class TranslateController {

    private static final String GOOGLE_API_KEY = "AIzaSyAvn2_fwUWNMx6Slm7Mi4Innj6iXUsP8IA ";

    @PostMapping
    public ResponseEntity<?> translate(@RequestBody Map<String, String> request) {
        String text = request.get("text");
        String targetLang = request.get("targetLang");

        try {
            String url = "https://translation.googleapis.com/language/translate/v2?key=" + GOOGLE_API_KEY;

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            Map<String, Object> body = new HashMap<>();
            body.put("q", text);
            body.put("target", targetLang);
            body.put("format", "text");

            HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(body, headers);
            RestTemplate restTemplate = new RestTemplate();

            ResponseEntity<Map> response = restTemplate.postForEntity(url, httpEntity, Map.class);

            String translated = ((Map<String, Object>) ((List<Object>) ((Map) response.getBody().get("data")).get("translations")).get(0)).get("translatedText").toString();

            return ResponseEntity.ok(Collections.singletonMap("translatedText", translated));
        } catch (Exception e) {
            e.printStackTrace(); // ➕ in lỗi chi tiết ra console
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Translation failed.");
        }

    }
}
