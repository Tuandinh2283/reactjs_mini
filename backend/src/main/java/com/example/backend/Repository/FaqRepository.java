package com.example.backend.Repository;


import com.example.backend.Entity.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface FaqRepository extends JpaRepository<Faq, Long> {
    Optional<Faq> findByQuestionContainingIgnoreCase(String question);
}