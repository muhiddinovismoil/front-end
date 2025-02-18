import clsx from "clsx";
export const Button = ({
    children,
    type,
    disabled,
    startIcon,
    endIcon,
    variant,
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            className={clsx(
                "py-[12px] font-bold rounded-[14px] text-[18px] cursor-pointer",
                {
                    "bg-primary px-[24px] text-white": variant === "birinchi",
                    "bg-white px-[24px] text-text-color":
                        variant === "ikkinchi",
                },
                className
            )}
            {...props}
        >
            <span className="flex items-center gap-[12px]">
                <span>{startIcon}</span>
                {children}
                <span>{endIcon}</span>
            </span>
        </button>
    );
};
