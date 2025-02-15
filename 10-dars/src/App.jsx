import HeroBg from "./assets/icons/hero_bg";
import { HeroInfoBg } from "./assets/icons/hero_info.bg";
import { HeroBtnIco } from "./assets/icons/hero_btn.ico";
import { HeroCard } from "./components/card/hero-card";
import { Button } from "./components/ui/button";
import { heroCards, infoCards, rukunData } from "./data/data";
import { MainLayout } from "./layouts/main-layout";
import { InfoCards } from "./components/card/info-card";
import { RukunCard } from "./components/card/rukun-card";
import { audioBooks, newBooks } from "./data/data2";
import { BooksCard } from "./components/card/books-card";

function App() {
    return (
        <>
            <MainLayout>
                <section className="pt-[16px]">
                    <div className="container">
                        <div className="flex gap-[24px]">
                            <div className="flex relative bg-[var(--primary-soft)] rounded-[12px] overflow-hidden w-[100%]">
                                <h1 className="font-bold text-2xl pt-[33px] pb-[273px] pl-[32px]">
                                    Кўп ўқилаётганлар
                                </h1>
                                <div className="flex ml-[61px] pr-[72px] ">
                                    {heroCards.map((item) => (
                                        <HeroCard
                                            key={item.id}
                                            id={item.id}
                                            img={item.img}
                                            text={item.text}
                                        />
                                    ))}
                                </div>

                                <HeroBg className="absolute  top-[62.5%] translate-y-[-50%]" />
                            </div>
                            <div className="bg-[var(--primary)] rounded-[14px] max-w-[261px] justify-center items-center">
                                <div className=" relative flex flex-col gap-[20px]">
                                    <h2 className="mt-[32px] ml-[24px] mr-[38px] font-bold text-2xl leading-[133%] text-[var(--white)]">
                                        Китоб ўқишни ёқтирасизми?
                                    </h2>
                                    <p className="text-[var(--white)] font-normal leading-[133%] text-[18px] mb-[77px] ml-[22px] mr-[24px]">
                                        Унда пулингизни тежаш учун ўзингиз
                                        йоқтирган рукнга обуна бўлинг
                                    </p>
                                    <Button
                                        className={
                                            "bg-[var(--primary)] ml-[24px] mr-[27px] mb-[32px] text-[var(--text)] font-bold text-[18px] z-10"
                                        }
                                        startIcon={<HeroBtnIco />}
                                        variant={"ikkinchi"}
                                    >
                                        Обуна бўлиш
                                    </Button>
                                    <HeroInfoBg className="absolute p-0  left-[2px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[58px]">
                    <div className="container">
                        <div>
                            <div className="flex">
                                {infoCards.map((item) => (
                                    <InfoCards
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[38px]">
                    <div className="container">
                        <h2 className="font-bold text-[32px] leading-[125%]">
                            Рукнлар
                        </h2>
                        <div className=" pt-[32px] flex gap-[16px]">
                            {rukunData.map((item) => (
                                <RukunCard
                                    key={item.id}
                                    img={item.img}
                                    title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="pt-[64px]">
                    <div className="container">
                        <h2 className="text-[32px] font-semibold leading-[125%] text-[var(--text)]">
                            Янги қўшилганлар
                        </h2>
                        <div className="flex gap-[24px] pt-[32px]">
                            {newBooks.map((item) => (
                                <BooksCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    category={item.category}
                                    title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="pt-[64px]">
                    <div className="container">
                        <h2 className="text-[32px] font-semibold leading-[125%] text-[var(--text)]">
                            Аудио китоблар
                        </h2>
                        <div className="flex gap-[24px] pt-[32px]">
                            {audioBooks.map((item) => (
                                <BooksCard
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    category={item.category}
                                    title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}

export default App;
