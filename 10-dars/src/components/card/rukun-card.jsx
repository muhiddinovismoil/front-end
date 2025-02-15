/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const RukunCard = ({ id, img, title }) => {
    return (
        <div>
            <div
                className="w-[200px] h-[150px] rounded-[14px] flex justify-start bg-cover items-end pb-[17px] pl-[16px] text-[13px] cursor-pointer"
                style={{ backgroundImage: `url(${img})` }}
            >
                {/* <img src={img} alt="rukun img" /> */}
                <h3 className="text-[var(--white)] font-semibold leading-[133%] text-[18px]">
                    {title}
                </h3>
            </div>
        </div>
    );
};
