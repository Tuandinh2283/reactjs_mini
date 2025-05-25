import React, { useState } from "react";
import "./LanguageDropdown.css";

const languages = [
  { label: "Global (English)", code: "en" },
  { label: "Japan (日本語)", code: "ja" },
  { label: "Korea (한국어)", code: "ko" },
  { label: "France (Français)", code: "fr" },
  { label: "Germany (Deutsch)", code: "de" },
  { label: "Americas (English)", code: "en-US" },
  { label: "Singapore (English)", code: "en-SG" },
];

const LanguageDropdown = () => {
  const [selected, setSelected] = useState("Global (English)");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language) => {
    setSelected(language.label);
    setIsOpen(false);
    // Xử lý đổi ngôn ngữ hoặc gọi API dịch ở đây nếu cần
  };

  return (
    <div className="language-dropdown">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown-button"
        type="button"
      >
        🌐 {selected}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {languages.map((lang) => {
            const isSelected = selected === lang.label;
            return (
              <div
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`dropdown-item${isSelected ? " selected" : ""}`}
              >
                {lang.label} {isSelected && "✅"}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
