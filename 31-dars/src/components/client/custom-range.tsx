"use client";
import React, { useState } from "react";
import { Range } from "react-range";

const CustomRangeSlider = ({
    rangeFn,
}: {
    rangeFn: (range: number[]) => void;
}) => {
    const [values, setValues] = useState([100, 1500]);

    return (
        <div className="w-[230px]  mt-10 pl-[12px]">
            <Range
                step={20}
                min={20}
                max={2000}
                values={values}
                onChange={(newValues) => {
                    rangeFn(newValues), setValues(newValues);
                }}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="relative h-[6px] w-full bg-[#BADCC1] rounded-lg"
                    >
                        <div
                            className="absolute h-full bg-[#42a358]"
                            style={{
                                left: `${(values[0] / 2000) * 100}%`,
                                right: `${100 - (values[1] / 2000) * 100}%`,
                            }}
                        />
                        {React.Children.map(children, (child: any, index) =>
                            React.cloneElement(child, { key: index })
                        )}
                    </div>
                )}
                renderThumb={({ props }) => {
                    const { key, ...restProps } = props;
                    return (
                        <div
                            key={key}
                            {...restProps}
                            className="h-5 w-5 border-[#fbfbfb] border-4 bg-[#42a358] rounded-full shadow-lg 
                outline-none focus:ring-0 "
                        />
                    );
                }}
            />

            <label className=" text-lg font-medium text-[#3d3d3d] flex mt-[15px]">
                Price :{" "}
                <p className="text-[var(--primary)] font-bold">
                    ${values[0]} - ${values[1]}
                </p>
            </label>
        </div>
    );
};

export default CustomRangeSlider;
