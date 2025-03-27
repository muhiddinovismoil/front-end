import React from "react";

interface ProductTypeProps {
    text: string;
    isActive: boolean;
    onClick: () => void;
}

export const ProductType: React.FC<ProductTypeProps> = ({
    text,
    isActive,
    onClick,
}) => {
    return (
        <button
            className={`relative pb-2 text-[15px] transition duration-300 ${
                isActive ? "text-green-600 cerapro-bold-font" : "text-gray-600"
            }`}
            onClick={onClick}
        >
            {text}
            {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-green-600"></span>
            )}
        </button>
    );
};
