"use client";
import React, { useState } from "react";

interface PaginationProps {
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex items-center justify-between w-[215px] h-[35px] gap-[10px]">
            {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                    <button
                        key={pageNumber}
                        className={`w-[35px] h-[35px] text-lg rounded-md transition-all flex items-center justify-center ${
                            currentPage === pageNumber
                                ? "bg-[#42a358] text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
                        }`}
                        onClick={() => handlePageClick(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}
            <button
                className="w-[35px] h-[35px] text-lg bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 flex items-center justify-center"
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
