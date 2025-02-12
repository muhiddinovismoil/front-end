import headerLogo from "../../assets/header_logo.svg";
import { Buttons } from "../buttons/Buttons";
import "./header.css";
export const Header = () => {
    return (
        <header className="main_header">
            <div className="container">
                <div className="main_header__block">
                    <div className="main_header__logo">
                        <a href="/">
                            <img src={headerLogo} alt="logo" />
                        </a>
                    </div>
                    <div className="main_header__menu">
                        <nav className="main_header__nav">
                            <ul className="main_header__list">
                                <li className="main_header__item">
                                    <a className="main_header__link" href="/">
                                        Pricing
                                    </a>
                                </li>
                                <li className="main_header__item">
                                    <a className="main_header__link" href="/">
                                        Product
                                    </a>
                                </li>
                                <li className="main_header__item">
                                    <a className="main_header__link" href="/">
                                        About Us
                                    </a>
                                </li>
                                <li className="main_header__item">
                                    <a className="main_header__link" href="/">
                                        Careers
                                    </a>
                                </li>
                                <li className="main_header__item">
                                    <a className="main_header__link" href="/">
                                        Community
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Buttons
                        cname1="main_header__btn_block"
                        cname2="main_header__btn"
                    />
                </div>
            </div>
        </header>
    );
};
