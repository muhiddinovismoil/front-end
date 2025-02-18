import React from "react";
import NotFoundImg from "../../assets/not-found.svg";
export const NotFoundPage = () => {
    return (
        <div className="container pt-[70px] flex justify-center items-center">
            <div>
                <div>
                    <img src={NotFoundImg} alt="not found img" />
                </div>
                <p className="pt-[12px] max-w-[220px] text-center opacity-[0.5]">
                    Сизнинг сўровингиз бўйича хечнарса топилмади!
                </p>
            </div>
        </div>
    );
};
