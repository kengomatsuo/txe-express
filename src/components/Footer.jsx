import React from "react";
import headsetIcon from "/headset.svg";
import emailIcon from "/envelope.svg";
import instagramIcon from "/instagram.svg";
import tiktokIcon from "/tik-tok.svg";
import linkedinIcon from "/linkedin.svg";
import whatsappIcon from "/whatsapp.svg";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "start",
        padding: "2rem 1.5rem",
        backgroundColor: "#f8f8f8",
        textAlign: "left",
        width: "100%",
        gap: "0.5rem",
      }}
    >
      <h2 style={{ marginBottom: "0.5rem" }}>Customer Service</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={headsetIcon}
          alt="call center icon"
          width={16}
          style={{ marginRight: "0.5rem" }}
        />
        <a
          href="tel:+6287788471339"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          +62 877-8847-1339
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={emailIcon}
          alt="email icon"
          width={16}
          style={{ marginRight: "0.5rem" }}
        />
        <a
          href="mailto:txeexpress@gmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          txeexpress@gmail.com
        </a>
      </div>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="https://wa.me/6287788471339">
          <img src={whatsappIcon} alt="WhatsApp icon" width={32} />
        </a>
        <a href="https://www.instagram.com/txeexpress">
          <img src={instagramIcon} alt="Instagram icon" width={32} />
        </a>
        <a href="https://www.tiktok.com/@txe.express">
          <img src={tiktokIcon} alt="TikTok icon" width={32} />
        </a>
        <a href="">
          <img src={linkedinIcon} alt="LinkedIn icon" width={32} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
