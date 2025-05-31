import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container" id="footer-container">
      <hr />
      <div className="footer">
        <div className="footer_chilren">
          <div className="info-container">
            <div className="info-item">
              <div className="info-content">
                <div className="info-title">Trụ sở chính:</div>
                <div className="info-text">
                  Nhà khách ATS, số 8 Phạm Hùng, Phường Mễ Trì, Quận Nam Từ
                  Liêm, Hà Nội
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-content">
                <div className="info-title">Chi nhánh:</div>
                <div className="info-text">
                  Số H.54 đường Dương Thị Giang, Phường Tân Thới Nhất, Quận 12,
                  TP. Hồ Chí Minh
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-content">
                <div className="info-title">Email:</div>
                <div className="info-text">contact@softdreams.vn</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-content">
                <div className="info-title">Tổng đài hỗ trợ, CSKH:</div>
                <div className="info-text">1900 33 69</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-content">
                <div className="info-title">Website:</div>
                <a
                  href="https://softdreams.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  softdreams.vn
                </a>
              </div>
            </div>
          </div>
          <div className="introduce">
            <div className="intrduce_con">Giới thiệu</div>
            <li className="header-nav">Giới thiệu</li>
            <li className="header-nav">Tin tức</li>
            <li className="header-nav">Tuyển dụng </li>
            <li className="header-nav">Sự kiện</li>
          </div>
          <div className="map">
            <iframe
              title="Google Map - Trụ sở"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.7776353653576!2d106.05711127597473!3d20.184981981261636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367133799c80f7%3A0xd7ee6d5bfef7647e!2zVHJ1bmcgVMOibSBWxINuIEhvw6EgSHV54buHbiBZw6puIEtow6FuaA!5e0!3m2!1svi!2s!4v1747492470776!5m2!1svi!2s"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="social-links">
          <div className="logo-section">
            <img src={Logo} alt="logo" className="logo-img" />
            <div className="brand-text"></div>
          </div>
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
          <img src={LinkedIn} alt="linkedin" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
