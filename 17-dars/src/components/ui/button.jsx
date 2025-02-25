import clsx from "clsx";
export const Button = ({ children, type, className, variant, ...props }) => {
    return (
        <button
            type={type}
            className={clsx(
                "py-[15px] rounded-[62px] font-medium text-[16px] cursor-pointer",
                {
                    "bg-primary px-[67.5px] text-white ":
                        variant === "birinchi",
                    "bg-white py-[15px] px-[80px] text-primary border border-gray":
                        variant === "ikkinchi",
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
