/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export const InfoCards = ({ id, img, text, title }) => {
    return (
        <div className="flex max-w-[322px] gap-[20px] pt-[26px] pb-[26px] pl-[16px] pr-[26px]">
            <img src={img} alt="info-img" />
            <div className="">
                <h2 className="font-bold text-[15px] leading-[120%] mb-[7px] text-[#11142d]">
                    {title}
                </h2>
                <p className="font-normal text-[11px] text-[#aaa]">{text}</p>
            </div>
        </div>
    );
};
