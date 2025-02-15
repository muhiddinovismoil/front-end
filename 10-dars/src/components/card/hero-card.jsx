/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export const HeroCard = ({ id, img, text }) => {
    return (
        <div className="text-center max-w-[190px] pt-[32px] pb-[16px] overflow-hidden">
            <img src={img} alt="hero-img" className="cursor-pointer" />
            <div className="">
                <p className="font-normal text-[20px]">{text}</p>
            </div>
        </div>
    );
};
