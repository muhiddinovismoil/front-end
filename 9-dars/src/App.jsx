import { MainLayout } from "./layout/main-layout";
import heroImg from "./assets/hero_img.svg";
import heroImg2 from "./assets/hero_img2.svg";
import heroImg3 from "./assets/hero_img3.svg";
import infoImg from "./assets/info_img.svg";
import infoImg2 from "./assets/info_img2.svg";
import infoImg3 from "./assets/info_img3.svg";
import infoImg4 from "./assets/info_img4.svg";
import newCollectionImg from "./assets/new_collection_img.svg";
import newCollectionImg2 from "./assets/new_collection_img2.svg";
import newCollectionImg3 from "./assets/new_collection_img3.svg";
import newCollectionImg4 from "./assets/new_collection_img4.svg";
import newCollectionImg5 from "./assets/new_collection_img5.svg";
import audioBookImg from "./assets/audio_book_img.svg";
import audioBookImg2 from "./assets/audio_book_img2.svg";
import audioBookImg3 from "./assets/audio_book_img3.svg";
import audioBookImg4 from "./assets/audio_book_img4.svg";
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
                                    Болалар адабиёти
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
            <section className="new_collection">
                <div className="container">
                    <div className="new_collection__block">
                        <div className="new_collection__head">
                            <h2 className="new_collection__title">
                                Янги қўшилганлар
                            </h2>
                        </div>
                        <ul className="new_collection__list">
                            <li className="new_collection__item">
                                <div className="new_collection__img_box">
                                    <img
                                        src={newCollectionImg}
                                        alt="new collection book1"
                                    />
                                </div>
                                <h3 className="new_collection__sub_title">
                                    1984
                                </h3>
                                <p className="new_collection__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="new_collection__img_box">
                                    <img
                                        src={newCollectionImg2}
                                        alt="new collection book2"
                                    />
                                </div>
                                <h3 className="new_collection__sub_title">
                                    Rich dad poor dad
                                </h3>
                                <p className="new_collection__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="new_collection__img_box">
                                    <img
                                        src={newCollectionImg3}
                                        alt="new collection book3"
                                    />
                                </div>
                                <h3 className="new_collection__sub_title">
                                    Код 8
                                </h3>
                                <p className="new_collection__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="new_collection__img_box">
                                    <img
                                        src={newCollectionImg4}
                                        alt="new collection book4"
                                    />
                                </div>
                                <h3 className="new_collection__sub_title">
                                    Даниел КИЗ
                                </h3>
                                <p className="new_collection__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="new_collection__img_box">
                                    <img
                                        src={newCollectionImg5}
                                        alt="new collection book5"
                                    />
                                </div>
                                <h3 className="new_collection__sub_title">
                                    Бепарволикнинг но...
                                </h3>
                                <p className="new_collection__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="audio_books">
                <div className="container">
                    <div className="audio_books__block">
                        <div className="audio_books__head">
                            <h2 className="audio_books__title">
                                Аудио китоблар
                            </h2>
                        </div>
                        <ul className="audio_books__list">
                            <li className="audio_books__item">
                                <div className="audio_books__img_box">
                                    <img
                                        src={audioBookImg}
                                        alt="new collection book1"
                                    />
                                </div>
                                <h3 className="audio_books__sub_title">1984</h3>
                                <p className="audio_books__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="audio_books__img_box">
                                    <img
                                        src={audioBookImg2}
                                        alt="new collection book2"
                                    />
                                </div>
                                <h3 className="audio_books__sub_title">
                                    Rich dad poor dad
                                </h3>
                                <p className="audio_books__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="audio_books__img_box">
                                    <img
                                        src={newCollectionImg5}
                                        alt="new collection book3"
                                    />
                                </div>
                                <h3 className="audio_books__sub_title">
                                    Код 8
                                </h3>
                                <p className="audio_books__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="audio_books__img_box">
                                    <img
                                        src={audioBookImg3}
                                        alt="new collection book4"
                                    />
                                </div>
                                <h3 className="audio_books__sub_title">
                                    Даниел КИЗ
                                </h3>
                                <p className="audio_books__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                            <li className="audio_books__item">
                                <div className="audio_books__img_box">
                                    <img
                                        src={audioBookImg4}
                                        alt="new collection book5"
                                    />
                                </div>
                                <h3 className="audio_books__sub_title">
                                    Бепарволикнинг но...
                                </h3>
                                <p className="audio_books__category">
                                    SIYOSAT, FANTASTIKA
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default App;
