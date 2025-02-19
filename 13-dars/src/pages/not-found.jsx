/* eslint-disable react/prop-types */
export const NotFound = ({ img }) => {
    return (
        <div className="container flex justify-center items-center">
            <div className="max-w-[760px]">
                <img src={img} alt="" />
            </div>
        </div>
    );
};
