//package com.example.backend.Service;
//
//import com.example.backend.dto.TranslateRequest;
//import com.example.backend.dto.TranslateResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.*;
//import org.springframework.stereotype.Service;
//import org.springframework.web.client.RestTemplate;
//
//import java.security.Security;
//import java.util.*;
//
//@Service
//public class TranslateService {
//
//    @Autowired
//    private Security security;
//
//    public TranslateResponse translate(TranslateRequest request) {
//        String url = "https://translation.googleapis.com/language/translate/v2?key=" + security.getGoogleApiKey();
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//
//        Map<String, Object> body = new HashMap<>();
//        body.put("q", request.getText());
//        body.put("target", request.getTargetLang());
//        body.put("format", "text");
//
//        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(body, headers);
//
//        RestTemplate restTemplate = new RestTemplate();
//        ResponseEntity<Map> response = restTemplate.postForEntity(url, httpEntity, Map.class);
//
//        String translated = ((Map<String, Object>) ((List<Object>) ((Map) response.getBody().get("data")).get("translations")).get(0)).get("translatedText").toString();
//
//        return new TranslateResponse(translated);
//    }
//}
