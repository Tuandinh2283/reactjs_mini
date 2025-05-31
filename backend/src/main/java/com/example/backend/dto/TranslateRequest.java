package com.example.backend.dto;


public class TranslateRequest {
    private String text;
    private String targetLang;

    // Getters + Setters
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
    public String getTargetLang() { return targetLang; }
    public void setTargetLang(String targetLang) { this.targetLang = targetLang; }
}