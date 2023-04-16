import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>MR WAVE</h1>
                    <p>
                    Microsoft Surface nhập khẩu chính hãng bởi nhà phân phối, đầy đủ chứng từ nguồn gốc xuất xứ , giá đã bao gồm thuế VAT. 
                    Bảo hành đổi mới 30 ngày và 12 tháng bởi nhà phân phối .


                    </p>
                    <div className="ctas">
                        <div className="banner-cta">About Me</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
