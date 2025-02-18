import logo from "../../assets/logo.svg";
import { MenuIcon } from "../../assets/icons/menu-icon";
import { SearchIcon } from "../../assets/icons/search-icon";

export const HeaderSearch = () => {
    return (
        <div className="flex items-center grow  gap-[46px]">
            <a href="#">
                <img src={logo} alt="img" />
            </a>
            <div className="flex gap-[4px] grow items-center">
                <div className="relative">
                    <MenuIcon className="absolute left-[24px] top-[50%] translate-y-[-50%]" />
                    <select
                        className="outline-none border border-[#e1e1e1] py-[9px] pl-[60px] pr-[50px] text-left rounded-bl-[14px] rounded-tl-[14px] appearance-none cursor-pointer"
                        name="category"
                    >
                        <option value="old">Рукнлар</option>
                        <option value="new">Yangi</option>
                    </select>
                </div>
                <div className="border relative rounded-r-[14px] w-full py-[9px] pl-[29px] border-[#e1e1e1]">
                    <input
                        placeholder="Қидириш"
                        className="outline-none w-full"
                    />
                    <button className="cursor-pointer absolute right-0 py-[9px] pl-[19px] pr-[27px] border-l-2 border-[#e1e1e1] top-0">
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
