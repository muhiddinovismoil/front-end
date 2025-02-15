import { HeaderSearch } from "./header-search";
import { Button } from "../../components/ui/button";
import { UserIcon } from "../../assets/icons/user-icon";
import LanguageIcon from "../../assets/icons/language-icon";

export const Header = () => {
    return (
        <>
            <div className="flex border-b border-b-[#f0f0f0]">
                <div className="py-[21px] gap-[64px]  container flex">
                    <HeaderSearch />
                    <div className="flex gap-[20px] relative">
                        <LanguageIcon className="absolute left-[18px] top-[50%] translate-y-[-50%]" />
                        <select
                            className="cursor-pointer outline-0 bg-[var(--primary-soft)] pl-[45px] pr-[40px] pt-[9px] pb-[9px]  rounded-2xl appearance-none"
                            name="language"
                            id="lang"
                        >
                            <option value="Ўз">Ўз</option>
                        </select>
                        <Button
                            className={"bg-[var(--primary)]"}
                            startIcon={<UserIcon />}
                            variant={"birinchi"}
                        >
                            Кириш
                        </Button>
                    </div>
                </div>
            </div>
            <div className="border-b border-b-[#f0f0f0]">
                <div className="container ">
                    <ul className="flex gap-[20px] pt-[9px] pb-[9px]">
                        <li>
                            <a
                                className="text-[#4052b5] font-semibold text-base"
                                href="#"
                            >
                                Аудиокитоб
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[#4052b5] font-semibold text-base"
                                href="#"
                            >
                                Электрон китоблар
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[#4052b5] font-semibold text-base"
                                href="#"
                            >
                                Босма китоблар
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[#4052b5] font-semibold text-base"
                                href="#"
                            >
                                Контакт
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[#4052b5] font-semibold text-base"
                                href="#"
                            >
                                Биз хақимизда
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
