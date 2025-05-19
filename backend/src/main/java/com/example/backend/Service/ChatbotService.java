package com.example.backend.Service;


import com.example.backend.Entity.Faq;
import com.example.backend.Repository.FaqRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChatbotService {
    private final FaqRepository faqRepository;

    public ChatbotService(FaqRepository faqRepository) {
        this.faqRepository = faqRepository;
    }

    public String getAnswer(String question) {
        Optional<Faq> faq = faqRepository.findByQuestionContainingIgnoreCase(question);
        return faq.map(Faq::getAnswer)
                .orElse("❓ Xin lỗi, tôi chưa có câu trả lời cho câu hỏi này.");
    }
}
