import React from "react";
import { Link } from "react-router-dom";

export const Navigation = ({ id, title, icon, path }) => {
    return (
        <>
            {!icon ? (
                <div>
                    <Link className="font-normal text-[16px]" to={path}>
                        {title}
                    </Link>
                </div>
            ) : (
                <div className="flex items-center gap-[4px]">
                    <Link
                        to={path}
                        className="font-normal text-[16px] text-[rgba(0,0,0,0.6)]"
                    >
                        {title}
                    </Link>
                    <img src={icon} alt="arrow icon" />
                </div>
            )}
        </>
    );
};
