import { MainLayout } from "./layout/main-layout";
import heroImg from "./assets/hero_img.svg";
import heroImg2 from "./assets/hero_img2.svg";
import heroImg3 from "./assets/hero_img3.svg";
import infoImg from "./assets/info_img.svg";
import infoImg2 from "./assets/info_img2.svg";
import infoImg3 from "./assets/info_img3.svg";
import infoImg4 from "./assets/info_img4.svg";
import "./App.css";

function App() {
    return (
        <MainLayout>
            <section className="hero">
                <div className="container">
                    <div className="hero__block">
                        <div className="hero__content">
                            <h1 className="hero__title">Кўп ўқилаётганлар</h1>
                            <ul className="hero__list">
                                <li className="hero__item">
                                    <img src={heroImg} alt="hero images" />
                                    <p className="hero__book-title">1984</p>
                                </li>
                                <li className="hero__item">
                                    <img src={heroImg2} alt="hero images" />
                                    <p className="hero__book-title">Code 8</p>
                                </li>
                                <li className="hero__item">
                                    <img src={heroImg3} alt="hero images" />
                                    <p className="hero__book-title">
                                        Rich dad poor dad
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="hero__content2">
                            <h2 className="hero__sub_title">
                                Китоб ўқишни ёқтирасизми?
                            </h2>
                            <p className="hero__paragraph">
                                Унда пулингизни тежаш учун ўзингиз йоқтирган
                                рукнга обуна бўлинг
                            </p>
                            <button className="hero__btn">Обуна бўлиш</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="info">
                <div className="container">
                    <div className="info__block">
                        <ul className="info__list">
                            <li className="info__item">
                                <div className="info__img_box">
                                    <img src={infoImg} alt="" />
                                </div>
                                <div className="info__content">
                                    <h2 className="info__title">
                                        Тезкор етказиш
                                    </h2>
                                    <p className="info__text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </li>
                            <li className="info__item">
                                <div className="info__img_box">
                                    <img src={infoImg2} alt="" />
                                </div>
                                <div className="info__content">
                                    <h2 className="info__title">
                                        Тўлов химояси
                                    </h2>
                                    <p className="info__text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </li>
                            <li className="info__item">
                                <div className="info__img_box">
                                    <img src={infoImg3} alt="" />
                                </div>
                                <div className="info__content">
                                    <h2 className="info__title">Юқори сифат</h2>
                                    <p className="info__text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </li>
                            <li className="info__item">
                                <div className="info__img_box">
                                    <img src={infoImg4} alt="" />
                                </div>
                                <div className="info__content">
                                    <h2 className="info__title">
                                        Энг сара китоблар
                                    </h2>
                                    <p className="info__text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="pillars">
                <div className="container">
                    <div className="pillars__block">
                        <h2 className="pillars__title">Рукнлар</h2>
                        <ul className="pillars__list">
                            <li className="pillars__item content">
                                <h3 className="pillars__sub_title">
                                    Жахон адабиёти
                                </h3>
                            </li>
                            <li className="pillars__item2 content">
                                <h3 className="pillars__sub_title">
                                    Узбек адабиёти
                                </h3>
                            </li>
                            <li className="pillars__item3 content">
                                <h3 className="pillars__sub_title">
                                    Бизнес ва психология
                                </h3>
                            </li>
                            <li className="pillars__item4 content">
                                <h3 className="pillars__sub_title sub-title_style">
                                    Болалар адабиёти{" "}
                                </h3>
                            </li>
                            <li className="pillars__item5 content">
                                <h3 className="pillars__sub_title">
                                    Детективлар
                                </h3>
                            </li>
                            <li className="pillars__item6 content">
                                <h3 className="pillars__sub_title">
                                    Фантастика
                                </h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="new_collection"></section>
            <section className="audio_books"></section>
        </MainLayout>
    );
}

export default App;
