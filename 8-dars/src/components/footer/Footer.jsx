import "./footer.css";
import logo from "../../assets/footer_logo.svg";
import facebookIco from "../../assets/footer_icon.svg";
import youtubeIco from "../../assets/footer_icon2.svg";
import twitterIco from "../../assets/footer_icon3.svg";
import pinterestIco from "../../assets/footer_icon4.svg";
import instagramIco from "../../assets/footer_icon5.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__block">
                    <div className="footer__content1">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="footer__social-list">
                            <li className="footer__items">
                                <a href="https://facebook.com">
                                    <img
                                        src={facebookIco}
                                        alt="facebook icon"
                                    />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://youtube.com">
                                    <img src={youtubeIco} alt="youtube icon" />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://x.com">
                                    <img src={twitterIco} alt="twitter icon" />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://www.pinterest.com/">
                                    <img
                                        src={pinterestIco}
                                        alt="pinterest icon"
                                    />
                                </a>
                            </li>
                            <li className="footer__items">
                                <a href="https://www.instagram.com/">
                                    <img
                                        src={instagramIco}
                                        alt="instagram icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content2">
                        <ul className="footer__list1">
                            <li className="footer__lists-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Pricing</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Products</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">About Us</a>
                            </li>
                        </ul>
                        <ul className="footer__list2">
                            <li className="footer__lists-item">
                                <a href="/">Careers</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Community</a>
                            </li>
                            <li className="footer__lists-item">
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content3">
                        <form className="footer__form_data">
                            <input
                                className="footer__search-input"
                                name="search"
                                type="email"
                                placeholder="Updates in your inbox…"
                                required
                            />
                            <button className="footer__seach_btn">Go</button>
                        </form>
                        <p className="footer__licence">
                            Copyright 2020. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
