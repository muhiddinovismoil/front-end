import headerLogo from "../../assets/header_logo.svg";
import "./header.css";
export const Header = () => {
    return (
        <div className="container">
            <div className="header__block">
                <div className="header__img">
                    <a href="#">
                        <img src={headerLogo} alt="" />
                    </a>
                </div>
                <div className="header__category">
                    <select className="header__category_items" name="" id="">
                        <option value="Рукнлар">Рукнлар</option>
                    </select>
                </div>
                <div className="header__search_box">
                    <form className="header__form">
                        <input
                            className="header__inputs"
                            name="search"
                            type="text"
                            placeholder="Қидириш"
                            autoComplete="off"
                        />
                    </form>
                </div>
                <div className="header__btn_select-box">
                    <select
                        className="header__language_items"
                        name="language"
                        id="language"
                    >
                        <option value="Ўз">Ўз</option>
                    </select>
                </div>
                <button className="header__btn">Кириш</button>
            </div>
            <div className="header__block2">
                <ul className="header__list">
                    <li className="header__item">
                        <a className="header__link" href="#">
                            Аудиокитоб
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">
                            Электрон китоблар
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">
                            Босма китоблар
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">
                            Контакт
                        </a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">
                            Биз хақимизда
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
