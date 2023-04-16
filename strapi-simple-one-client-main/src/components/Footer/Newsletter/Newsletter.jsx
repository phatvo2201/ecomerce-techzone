import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">NewTech</span>
                <span className="big-text">
                    Để Lại Số Điện Thoại Để Được Tư Vấn Và Khuyến Mãi
                </span>
                <div className="form">
                    <input type="text" placeholder="SĐT Khách Hàng" />
                    <button>Nhận Tư Vấn</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                   
                </span>
                <span className="small-text">Facebook :</span>
                    <span className="small-text">Zalo :</span>
                    <span className="small-text">Telegram :</span>
                    <span className="small-text">HotLine :  </span>
            </div>
        </div>
    );
};

export default Newsletter;
