import { Header } from "./components/header/Header";
import { Buttons } from "./components/buttons/Buttons";
import { AboutItem } from "./components/about-items/AboutItem";
import { OpinionItems } from "./components/opinions-items/OpinionItem";
import HeroImg from "./assets/hero_img.svg";
import "./App.css";
import { Footer } from "./components/footer/Footer";
function App() {
    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero__block">
                            <div className="hero__content">
                                <h1 className="hero__title">
                                    Bring everyone together to build better
                                    products.
                                </h1>
                                <p className="hero__paragraph">
                                    Manage makes it simple for software teams to
                                    plan day-to-day tasks while keeping the
                                    larger team goals in view.
                                </p>
                                <Buttons
                                    cname1="hero__btn_block"
                                    cname2="hero__btn"
                                />
                            </div>
                            <div className="hero__image_box">
                                <img src={HeroImg} alt="hero image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <div className="about__block">
                            <div className="about__content">
                                <h2 className="about__title">
                                    What’s different about Manage?
                                </h2>
                                <p className="about__paragraph">
                                    Manage provides all the functionality your
                                    team needs, without the complexity. Our
                                    software is tailor-made for modern digital
                                    product teams.
                                </p>
                            </div>
                            <AboutItem />
                        </div>
                    </div>
                </section>
                <section className="opinions">
                    <div className="container">
                        <div className="opinions__block">
                            <h2 className="opinions__title">
                                What they’ve said
                            </h2>
                            <div className="opinions__elements">
                                <OpinionItems
                                    name={"Anisha Li"}
                                    text={
                                        "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
                                    }
                                />
                                <OpinionItems
                                    name={"Ali Bravo"}
                                    text={
                                        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
                                    }
                                />
                            </div>
                            <Buttons
                                cname1="opinions__btn_block"
                                cname2="opinions__btn"
                            />
                        </div>
                    </div>
                </section>
                <section className="banner">
                    <div className="container">
                        <div className="banner__block">
                            <div className="banner__content">
                                <h2 className="banner__title">
                                    Simplify how your team works today.
                                </h2>
                                <div className="banner__btn_block">
                                    <button className="banner__btn">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
