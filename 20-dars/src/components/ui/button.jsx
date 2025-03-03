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
                    "bg-white py-[12px] px-[88.5px] text-primary":
                        variant === "uchinchi",
                    "bg-primary py-[15px] px-[157.5px] text-white":
                        variant === "tortinchi",
                    "bg-primary py-[13px] px-[29.5px] text-white":
                        variant === "beshinchi",
                    "py-[15px] border border-[rgba(0,0,0,0.1)] px-[45px] bg-white text-primary":
                        variant === "oltinchi",
                    "py-[13px] px-[38.5px] font-medium bg-primary text-white":
                        variant === "yettinchi",
                    "py-[19px] font-medium pl-[153.5px] pr-[189.5px] bg-primary text-white":
                        variant === "sakkiz",
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
